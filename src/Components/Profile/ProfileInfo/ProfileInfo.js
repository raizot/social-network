import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
      <div className = {`${style.profile}`}>
        <div className = {`${style.picture_wrapper}`}>
          <img className = {`${style.main_picture}`} src={props.main_picture} alt = "main picture"/>
        </div>
        <div className ={`${style.profile_info}`} >
          <div className = "picture_wrapper" >
            <img className= "picture" src={props.profile_photo} alt="profile photo"/>
          </div>  
          <div div className = {`${style.about}`}>
              <h2 className = {`${style.person_name}`}>{props.person_name}</h2>
              <div className = {`${style.person_age}`}>{`Age: ${props.person_age}`}</div>
              <p className = {`${style.person_about}`}>{props.person_about}</p>
          </div>        
        </div>
      </div>
  )
}

export default ProfileInfo;