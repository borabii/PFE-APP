import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';

function PubDetailPopUp() {
    return (
        <div className="pubDetailPopUp">
         
             <div className="pubDetailPopUp__info">
             <h4>INFORMATION PRINCIPALE</h4>
                <div className="pub__info" >
                   <dl>
                        <dt>Catégoris</dt>
                        <dd>Fitness</dd>
                        <dt>Description</dt>
                        <dd id="description">
                         Abdos-fessiers, Barres-Haltères, Gym Silhouette,… Pour vous tonifier, modeler votre silhouette, avoir une meilleure posture…
                         Zumba, Cardio Move, Step, danse afro. Pour améliorer votre condition physique, vous dépenser, bruler les calories, tout en vous amusant.
                         </dd>
                        <dt>Adresse</dt>
                        <dd><LocationOnIcon  id="icon-loc"/>Tunis </dd>
                        <dt>HORAIRES </dt>
                        <dd> jeudi 06:30 - 21:30 H </dd>
                   </dl>
                
                 </div>
             </div>
             <div className="pubDetailPopUp__organizateur">
             <h3>ORGANISER PAR</h3>
                <div className="organizateur__container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzWk9kfZiZ3-enCoEgErPVWons-ZKHSt_Ow&usqp=CAU" alt="" />
                <div className="organizateur__info">
                    <dl>
                        <dd > Galaxy Gym</dd>
                        <dd><LocationOnIcon id="icon-loc" />Monplaisir</dd>
                        <dd > mail@gmail.com</dd>
                    </dl>
                </div>  
                </div>
             </div>
             <div className="pubDetailPopUp__participation">
                 <button className="btn-participation">Je parrticipe</button>
             </div>
        </div>
    )
}

export default PubDetailPopUp
