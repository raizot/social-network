import React from 'react'
import style from './Nav.module.css'
const Nav = () => {
  return ( 
     <nav nav className = {`${style.nav}`} >
      <ul>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
      </ul>
    </nav>
  )
}


export default Nav;