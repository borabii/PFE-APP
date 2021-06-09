import React, { useState, useEffect, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Icon } from "leaflet";
import AuthContext from "../../../Context/auth/authContext";
import PubContext from "../../../Context/Publication/pubContext";
import PubDetailPopUp from "./PubDetailPopup";
import axios from "axios";

function Map() {
  //componenet state
  const [editEventModalShow, setEditEventModalShow] = useState(false);
  const [activeMark, setActiveMark] = useState({});
  const [org, setorg] = useState({});
  const [position, setPosition] = useState(null);
  //app level state
  const pubContext = useContext(PubContext);
  const { pubs, loadPubs } = pubContext;
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const userIcon = new Icon({
    iconUrl: "/flag.svg",
    iconSize: [25, 25],
  });
  const actIcon = new Icon({
    iconUrl: "/actMarker.svg",
    iconSize: [25, 25],
  });
  const annonceIcon = new Icon({
    iconUrl: "/annonceMarker.svg",
    iconSize: [25, 25],
  });
  const eventIcon = new Icon({
    iconUrl: "/eventMarker.svg",
    iconSize: [25, 25],
  });
  const iconTest = (typepub) => {
    if (typepub === "Activity") {
      return actIcon;
    } else if (typepub === "Event") {
      return eventIcon;
    } else return annonceIcon;
  };
  function LocationMarker() {
    //locate user current position
    const map = useMap();
    useEffect(() => {
      // map.locate().on("locationfound", function (e) {
      //   setPosition(e.latlng);
      //   map.flyTo(e.latlng, 10);
      //   const radius = user.distanceDeRecherche;
      //   const circle = L.circle(e.latlng, radius);
      //   circle.addTo(map);
      // });
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        map.flyTo(
          { lat: position.coords.latitude, lng: position.coords.longitude },
          10
        );
        const radius = user.distanceDeRecherche;
        const circle = L.circle(
          { lat: position.coords.latitude, lng: position.coords.longitude },
          radius
        );
        circle.addTo(map);
        loadPubs(
          [position.coords.latitude],
          [position.coords.longitude],
          user.distanceDeRecherche
        );
      });
      return () => {
        // map.stopLocate();
      };
    }, [map]);
    return position === null ? null : (
      <Marker position={position} icon={userIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  const MapInfoControl = () => {
    const positionClass = {
      bottomleft: "leaflet-bottom leaflet-left",
      bottomright: "leaflet-bottom leaflet-right",
      topleft: "leaflet-top leaflet-left",
      topright: "leaflet-top leaflet-right",
    };

    return (
      <div className={positionClass.bottomleft}>
        <div className="leaflet-control ">
          <div className="mapMarker-info">
            <div className="info-IconContainer">
              <img src="/actMarker.svg" alt="" />
              <p>Activité</p>
            </div>
            <div className="info-IconContainer">
              <img src="/eventMarker.svg" alt="" />
              <p>Événement</p>
            </div>
            <div className="info-IconContainer">
              <img src="/annonceMarker.svg" alt="" />
              <p>Annonce</p>
            </div>
            <div className="info-IconContainer">
              <img src="/flag.svg" alt="" />
              <p>Vous</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const handleClick = (e, pub) => {
    setActiveMark(pub);
    setEditEventModalShow(true);
    axios
      .get(`http://localhost:8000/api/users/Admin/getDemandeur/${pub.user}`)
      .then((res) => setorg(res.data));
  };
  // useEffect(() => {
  //   if (position) {
  //     loadPubs([position.lat], [position.lng], user.distanceDeRecherche);
  //   }
  // }, [position !== null]);

  return (
    <div className="map-container">
      <MapContainer
        center={[36.78729147, 10.18432617]}
        zoom={14}
        scrollWheelZoom
        className="map-style"
        preferCanvas={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pubs !== null &&
          pubs.map((pub) => (
            <Marker
              key={pub._id}
              position={[
                pub.adresse.coordinates[0],
                pub.adresse.coordinates[1],
              ]}
              eventHandlers={{
                click: (e) => {
                  handleClick(e, pub);
                },
              }}
              icon={iconTest(pub.typePub)}
            />
          ))}
        <LocationMarker />
        <MapInfoControl />
      </MapContainer>

      <PubDetailPopUp
        show={editEventModalShow}
        data={activeMark}
        user={org}
        onHide={() => setEditEventModalShow(false)}
      />
    </div>
  );
}

export default Map;
