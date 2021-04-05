import React from 'react';
import AlarmIcon from '@material-ui/icons/Alarm';

function NotifDropDown() {
    return (
        <div className="notifDropDown">
            <h2 className="notif__bar">Notification</h2>
            <div className="notif__info">
              <div className="notif__container">

              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fperson&psig=AOvVaw1ngEScD9W-J_93SthubIfa&ust=1617623971563000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiM-4XF5O8CFQAAAAAdAAAAABAD" alt="" />
               
              <div className="notif__container-description">
                    <dl>
                        <dd > Ralph Edwards</dd>
                        <dd>Vous envoyer une invitation</dd>
                    </dl>
                    <h6 className="temps">11.30</h6>
              </div>  
                
            </div>
            <div className="notif__container">

              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fperson&psig=AOvVaw1ngEScD9W-J_93SthubIfa&ust=1617623971563000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiM-4XF5O8CFQAAAAAdAAAAABAD" alt="" />
               
              <div className="notif__container-description">
                    <dl>
                        <dd > Ralph Edwards</dd>
                        <dd>Vous envoyer une invitation</dd>
                    </dl>
                    <h6 className="temps">11.30</h6>
              </div>  
                
              </div>
              <div className="notif__container">
              
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fperson&psig=AOvVaw1ngEScD9W-J_93SthubIfa&ust=1617623971563000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiM-4XF5O8CFQAAAAAdAAAAABAD" alt="" />
               
              <div className="notif__container-description">
                    <dl>
                        <dd > Ralph Edwards</dd>
                        <dd>Vous envoyer une invitation</dd>
                    </dl>
                    <h6 className="temps">11.30</h6>
              </div>  
                
</div>
            <div className="notif__container">
               <AlarmIcon  id="icon-style"/>
               <div className="notif__container-description">
                   <dl>
                   <dd > Dim.15 avril 14:30 </dd>
                   <dd> Rappel</dd>
                        
                   </dl>
                   
               </div>  
               
               </div>

               </div>
        </div>
    )
}

export default NotifDropDown
