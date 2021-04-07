import React from "react";
import AbonnéInfo from "./AbonnéInfo";
import AbonneNote from "./AbonneNote.js";
import AbonnéCenterOfInterest from "./AbonnéCenterOfInterest";
import AbonnéSearchParametre from "./AbonnéSearchParametre";
function AbonnéProfil() {
  return (
    <div className="profileAbonne">
      <div className="AboneéSide-menu">
        <ul>
          <li>Mes information </li>
          <li> Mes centre d'interet</li>
          <li> Mes notes et avis</li>
          <li> Parametre de recherche</li>
          <li> Modifier ma localisation</li>
        </ul>
      </div>
      <div className="AboneéSide-menuSmallDevice">
        <span>Information </span>
        <span>Intérêt</span>
        <span>Avis</span>
        <span>Recherche</span>
        <span>Localisation</span>
      </div>
      <div className="profileAbonné-body">
        {/* <AbonnéInfo /> */}
        {/* <AbonneNote /> */}
        {/* <AbonnéSearchParametre /> */}
        <AbonnéCenterOfInterest />
      </div>
    </div>
  );
}

export default AbonnéProfil;
