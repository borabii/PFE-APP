import React from 'react';
import './DetailAnnonceurPopUp.css'

function DetailAnnonceurPopUp() {
    return (
        <div className="detailAnnonceurPopUp">
            <div className="detailAnnonceurPopUp__top">
                <img src="https://www.fitadium.com/conseils/wp-content/uploads/2020/05/halteres-ou-machines.jpg" alt=""/>
            </div>
            <div className="detailAnnonceurPopUp__midle">
                {/* <div className="annonceur">
                    about annonceur !
                    nom !
                </div> */}
                <div className=" detail_avis">
                    <h2>Avis</h2>
                    <div className="avis">
                        <h6>7.5</h6>
                        <img src="" alt=" stars"/>
                    </div>
                </div>
                <div className=" detail_nbr_abonne">
                    <h6>Nombre abonné</h6>
                     <h6>550</h6>
                </div>
            </div>
            <div className="detailAnnonceurPopUp__bottom">
                <h1> historique</h1>
                <div className="percentage_circle" >
                    <div className="flex-wrapper">
  <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart orange">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        stroke-dasharray="30, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">30%</text>
    </svg>
  </div>
  
  <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart green">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        stroke-dasharray="60, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">60%</text>
    </svg>
  </div>

  <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart blue">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        stroke-dasharray="90, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">90%</text>
    </svg>
  </div>
</div>
        
                </div>
            </div>


        </div>
       
    );
  
}

export default DetailAnnonceurPopUp;
