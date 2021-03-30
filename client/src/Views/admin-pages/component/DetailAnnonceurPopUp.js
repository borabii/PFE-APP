import React from 'react';
import './DetailAnnonceurPopUp.css';
function DetailAnnonceurPopUp() {
    return (
  <div className="detailAnnonceur">
    <div className="detailAnnonceur__top">

    <h4>Information compte </h4>
        <div className="__container">  
        <img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="img"/>
          <div className="middel__infoPerso">
             <ul>
                <li>Nom</li>
                <li>Adresse</li>
                <li> mail</li> 
                <li> Catégoris </li> 
              </ul> 
          </div> 
          </div>
    </div>
     <div className="detailAnnonceur__middel">
        <h4>Information compte </h4>
        <div className="middel__container">  
        <img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="img"/>
          <div className="middel__infoPerso">
             <ul>
                <li>Nom</li>
                <li>Adresse</li>
                <li> mail</li> 
                <li> Catégoris </li> 
              </ul> 
          </div> 
          </div>
         </div>
   
   
   <div className="detailAnnonceur__bottom">
         <h4> Historique</h4>
       <div className="bottom__container">

        
         <div className="info-item">  
          <h6>Nombre Abonnés</h6>
           <h6>354</h6>
               </div>
         <div className="info-item">    
          <h6> Avis</h6>
           <h6>354</h6>
               </div>

         <div className="info-item">
            <h6> nombre d'annonce</h6>
           <h6>354</h6>
           </div>
           
           <div className="info-item">
              <h6> nombre d'event</h6>
               <h6>354</h6>
                 </div>
                 </div>
               
        
   </div>
   </div>   

    )
}

export default DetailAnnonceurPopUp;
