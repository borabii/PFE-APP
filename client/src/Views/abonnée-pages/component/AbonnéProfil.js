import React from "react";
import AbonneInfo from "./AbonneInfo";
import AbonneNote from "./AbonneNote.js";
import AbonnéCenterOfInterest from "./AbonnéCenterOfInterest";
import AbonnéSearchParametre from "./AbonnéSearchParametre";
function AbonnéProfil() {
  return (
    <div className="profileAbonne">
      <div className="side__menue ">
        <ul>
          <li>Mes information </li>
          <li> Mes centre d'interet</li>
          <li> Mes notes et avis</li>
          <li> Parametre de recherche</li>
          <li> Modifier ma localisation</li>
        </ul>
      </div>
      <div className=" profileAbonne_container ">
        {/* <AbonneInfo /> */}
        {/* <AbonneNote /> */}
        {/* <AbonnéSearchParametre/> */}
        <AbonnéCenterOfInterest />
      </div>
    </div>
  );
}

export default AbonnéProfil;
