import React from 'react'
import style from './Post.module.css'
const Post = (props) => {
  return ( 
      <div className = {style.post}>
        <div className = {style.post_wrapper}>
          < div className = {` ${style.post_avatar_wrap} picture_wrapper `}>
          <img className = "picture" src="profile-photo.jpg"></img>
          </div>
          < p className = {style.post_text}>{props.message}</p>
        </div>
        <span className = {style.like}>Like: {props.like}</span>
      </div>
  )
}


export default Post;