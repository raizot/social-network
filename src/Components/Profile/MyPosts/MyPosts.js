import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post';
const MyPosts = () => {
  return ( 
    <div>
      <div className ={style.posts}>
        <h2>My posts</h2>
        <form className = {style.form}>
          <textarea className = {style.input_text}>Введите сообщение</textarea>
          <button type="submit"> Отправить</button>
        </form>

      </div>
      <Post like = "5" message = "Hi how are u"/>
      <Post like = "0" message = "Today is a sunny day"/>
      <Post like = "4" message = "Today is a rainy day"/>
    </div>
  )
}


export default MyPosts;