import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '../Constants/Images';
import Navmodal from './Navmodal';

const Nav = () => {

const [click, setClick] = useState(false)

const handleClick = (id) =>{
  setClick(id)
  setModals(false);
}

const [modals, setModals] = useState(false);
  const openModals = () => {
    setModals(true);
  };
  const closeModals = () => {
    setModals(false);
  };


  return (
   <div className='m-4 flex justify-between items-center p-2'>
    <div>
      <img src= {Images.foodweb.logo} alt='logo' width={70} height={70} loading='lazy'/>
      <h3>Portfolio</h3>
        </div>
     <nav className='m-4 flex justify-between items-center p-2 max-lg:hidden text-white font-bold '>
        <div className='flex p-2 gap-8 mx-8' style={{borderBottom : '1px solid #D9D9D9 '}}>
        <Link id='home' to = "/" style={{borderBottom: click === 'home' ? '2px solid #40EF14' : 'none'}} 
          onClick={() =>{handleClick('home')}}>Home</Link>

  <Link id='frontend' to = "/Frontend" style= {{borderBottom: click === 'frontend'? '2px solid #40EF14' : 'none'}}
    onClick={()=>{handleClick('frontend')}}>Front-end</Link>

            <Link id='backend' to = "/Backend"  style= {{borderBottom: click === 'backend'? '2px solid #40EF14' : 'none'}}
    onClick={()=>{handleClick('backend')}}>Back-end</Link>
            <Link id='uiux' to = "/UIUX"  style= {{borderBottom: click === 'uiux'? '2px solid #40EF14' : 'none'}}
    onClick={()=>{handleClick('uiux')}}>UI/UX Design</Link>
            <Link id='graphicart' to = "/Graphicart"  style= {{borderBottom: click === 'graphicart'? '2px solid #40EF14' : 'none'}}
    onClick={()=>{handleClick('graphicart')}}>Graphic-Art Design</Link>
            <Link id='contact' to = "/Contact"    style= {{borderBottom: click === 'contact'? '2px solid #40EF14' : 'none'}}
    onClick={()=>{handleClick('contact')}}>Contact</Link>
        </div>
    </nav>
    
<button className="hidden  max-lg:block  mr-6" onClick={openModals}>
  <img src={Images.foodweb.menu} width={50}  />
    {modals && <Navmodal closeModals={closeModals} />}
</button>

   </div>
  )
}

export default Nav

