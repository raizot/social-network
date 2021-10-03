import React from 'react'
import style from './Profile.module.css'
const Profile = () => {
  return ( 
    <div className="profile">
      <div className = {`${style.picture_wrapper}`}>
        <img className = {`${style.main_picture}`} src="sunset.jpg" alt = "main picture"></img>
      </div>
        <div className = {`${style.profile}`}>
          < div className ={`${style.profile_info}`} >
            <div className = {`${style.profile_picture_wrapper}`}>
              <img className= {`${style.profile_picture}`} src="profile-photo.jpg" alt="profile photo"></img>
            </div>  
            <div div className = {`${style.about}`}>
              <h2 className = {`${style.person_name}`}>Hugo</h2>
              <div className = {`${style.person_age}`}>Age: 24</div>
              <p className = {`${style.person_about}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>        
          </div>
        </div>
    </div>
  )
}

export default Profile;