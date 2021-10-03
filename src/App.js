import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
  return (
  <div className="app-wrapper">
    <Header />
    <Nav />
    <main className = "content" >
        <Dialogs/>
           {/*< Profile />*/}
    </main>

  </div>
    )
}
//JSON.stringify(fetch("../public/manifest.json")).img
export default App;
