import React from 'react'
import style from './Settings.module.css'
const Settings = () => {
  return ( 
      <div className={style.settings_wrapper}>
        <button className={style.style_toggle}>Dark theme</button>
      </div>
  )
}


export default Settings;