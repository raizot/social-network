import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {
  return ( 
    <div className="profile">
        <ProfileInfo main_picture="sunset.jpg" profile_photo="profile-photo.jpg" person_name = "Hugo" person_age = "32" person_about ="I like cats" />
        <MyPosts />
    </div>
  )
}

export default Profile;