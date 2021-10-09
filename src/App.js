import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./Components/Settings/Settings";

const App = () => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Nav />
          <main className = "content" >
            <Route path = "/dialogs" component = {Dialogs}/>
            <Route path = "/profile" component = {Profile}/>
            <Route path = "/settings" component = {Settings}/>

          </main>
        </div>
      </BrowserRouter>

    )
}
//JSON.stringify(fetch("../public/manifest.json")).img
export default App;
