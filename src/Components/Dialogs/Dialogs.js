import React from 'react'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem';
import style from './Dialogs.module.css'
import Message from './Message';

const Dialogs = (props)=>{
    return(
        <div className={style.dialogs_wrapper}>
            <ul className="dialogs_list">
                < DialogItem id = "dima" name = "Dima"/>
                < DialogItem id = "fifa" name = "Fifa"/>
                < DialogItem id = "lol" name = "LoL"/>
                < DialogItem id = "dota" name = "G1"/>
            </ul>
            <div className={style.messages}>
                <Message message = "F1"/>
                <Message message = "F2"/>
                <Message message = "F3"/>
                <Message message = "F4"/>
                <Message message = "F5"/>
            </div>
            
        </div>
    )
}


export default Dialogs;