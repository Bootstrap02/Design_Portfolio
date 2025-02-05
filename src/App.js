import React, {useState} from 'react';
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
    const [language, setLanguage] = useState("English")
    const [click, setClick] = useState(false)
         const openLanguage = (lang) =>{
          setLanguage(lang)
        }
        
  return (
    <div className="text-center bg-black  ">
      <div className='w-[100%] flex justify-center'><Nav language={language} openLanguage={openLanguage} click={click} setClick={setClick}/></div>
      <Routes>
        <Route path='/' element={<Home language={language} click={click} setClick={setClick} />}/>
        <Route path='/Frontend' element={<Frontend  language={language} setClick={setClick}/>}/>
        <Route path='/Backend' element={<Backend  language={language}  setClick={setClick}/>}/>
        <Route path='/UIUX' element={<UIUXDesign  language={language}  setClick={setClick}/>}/>
        <Route path='/Graphicart' element={<Graphicart  language={language}  setClick={setClick}/>}/>
        <Route path='/Contact' element={<Contact  language={language}  setClick={setClick}/>}/>
        <Route path='/Choplifeapp' element={<Choplifeapp  language={language}  setClick={setClick}/>}/>
        <Route path='/Choplifeweb' element={<Choplifeweb  language={language}  setClick={setClick}/>}/>
        <Route path='/Quickdoctorapp' element={<Quickdoctorapp  language={language}  setClick={setClick}/>}/>
        <Route path='/Quickdoctorweb' element={<Quickdoctorweb  language={language}  setClick={setClick}/>}/>
        </Routes>
    </div>
  );
}

export default App;
