import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Landingpage';
import Frontend from './Components/Frontend';
import Backend from './Components/Backend';
import UIUXDesign from './Components/UIUX';
import Graphicart from './Components/Graphicart.js';
import Contact from './Components/Contact';
import Choplifeapp from './Components/Works/Uiux/Choplifeapp';
import Choplifeweb from './Components/Works/Uiux/Choplifeweb';
import Quickdoctorapp from './Components/Works/Uiux/Quikdoctorapp';
import Quickdoctorweb from './Components/Works/Uiux/Quikdoctorweb';



function App() {
  return (
    <div className="App bg-black">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Frontend' element={<Frontend/>}/>
        <Route path='/Backend' element={<Backend/>}/>
        <Route path='/UIUX' element={<UIUXDesign/>}/>
        <Route path='/Graphicart' element={<Graphicart/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Choplifeapp' element={<Choplifeapp/>}/>
        <Route path='/Choplifeweb' element={<Choplifeweb/>}/>
        <Route path='/Quickdoctorapp' element={<Quickdoctorapp/>}/>
        <Route path='/Quickdoctorweb' element={<Quickdoctorweb/>}/>
        </Routes>
    </div>
  );
}

export default App;
