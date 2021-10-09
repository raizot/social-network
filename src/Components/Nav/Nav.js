import React from 'react'
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav = () => {
  return ( 
     <nav className = {`${style.nav}`} >
      <ul class="nav_list">
        <li>
          <NavLink activeClassName = {style.active} to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink activeClassName = {style.active} to="/dialogs">Messages</NavLink>
        </li>
          <li>
              <NavLink activeClassName = {style.active} to="/settings">Settings</NavLink>
          </li>
      </ul>
    </nav>
  )
}


export default Nav;