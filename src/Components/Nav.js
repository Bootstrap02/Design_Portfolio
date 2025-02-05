import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navmodal from './Navmodal';
import { FaBars } from "react-icons/fa";

const Nav = ({language, openLanguage, click, setClick}) => {


const handleClick = (id) =>{
  setClick(id)
}

const [modals, setModals] = useState(false);
  const openModals = () => {
    setModals(true);
  };
  const closeModals = () => {
    setModals(false);
  };
  const activeButton ={
    backgroundColor: '#40EF14',
    color: 'black',
    fontWeight: 'bold',
    padding: '5px',
   //  borderRadius: '6px 0 0 6px '
     };
   
     const inActiveButton ={
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold',
    padding: '5px',
   //  borderRadius: ' 0 6px 6px 0'
     }


  return (
   <div className='flex justify-between items-center p-2 w-[90%]'>
     <div className='flex  border-2 border-white w-[fit-content] rounded-[6px] mx-4'>
      <button className='' style={language === 'English' ? activeButton : inActiveButton} 
      onClick={() => openLanguage('English')}>English</button>
      <button className='' style={language === 'German' ? activeButton : inActiveButton} 
      onClick={() => openLanguage('German')}>Deutsch</button>
        </div>
     <nav className=' flex justify-between items-center p-2 max-lg:hidden text-white font-bold '>
        <div className='flex p-2 gap-8 mx-8' style={{borderBottom : '1px solid #D9D9D9 '}}>
        <Link id='home' to = "/" style={{borderBottom: click === 'home' ? '2px solid #40EF14' : 'none'}} 
          onClick={() =>{handleClick('home')}}>Home</Link>

  <Link id='frontend' to = "/Frontend" style= {{borderBottom: click === 'frontend'? '2px solid #40EF14' : 'none'}}
    onClick={()=>{handleClick('frontend')}}>Front-end</Link>

            <Link id='backend' to = "/Backend"  style= {{borderBottom: click === 'backend'? '2px solid #40EF14' : 'none'}}
    onClick={()=>{handleClick('backend')}}>Back-end</Link>

            <Link id='apps' to = "/UIUX"  style= {{borderBottom: click === 'apps'? '2px solid #40EF14' : 'none'}}
    onClick={()=>{handleClick('apps')}}>Apps</Link>
            <Link id='contact' to = "/Contact"    style= {{borderBottom: click === 'contact'? '2px solid #40EF14' : 'none'}}
    onClick={()=>{handleClick('contact')}}>Contact</Link>
        </div>
    </nav>
    
<div className=' flex flex-col mb-8 items-center justify-center '>
<button className="hidden  max-lg:block " onClick={openModals}>
<FaBars size={30} color="white" />
    {modals && <Navmodal closeModals={closeModals} />}
</button>
<p className="max-lg:hidden"><strong className='text-lg text-[#FEBD69]'>{language === "English"? "Welcome" : "Willkommen"}</strong></p>
</div>

   </div>
  )
}

export default Nav

