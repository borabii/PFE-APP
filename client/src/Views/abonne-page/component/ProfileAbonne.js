import React from 'react';
import "./Abonne.css";
import AbonneInfo from "./AbonneInfo";
import AbonneNote from "./AbonneNote";
import SearchParametre from './SearchParametre';

function ProfileAbonne() {
    return (
        <div className="profileAbonne">
            <div className=" side__menue ">
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
            {/* <li> Abonne__interet</li> */}
            {/* <AbonneNote /> */}
            <SearchParametre />
            {/* <li> modify__location</li> */}
            </div>
            
        </div>
    )
}

export default ProfileAbonne
