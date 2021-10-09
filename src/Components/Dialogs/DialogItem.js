import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css'

const DialogItem = (props)=>{
    return(
        <li className = {style.name_item}><NavLink activeClassName={style.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink></li>
    )
}


export default DialogItem;