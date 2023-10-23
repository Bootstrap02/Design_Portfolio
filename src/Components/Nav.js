import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '../Constants/Images';

const Nav = () => {

const [hover, setHover] = useState(false)

const handleHover = (id) =>{
  setHover(id)
}


  return (
    <div className='mx-8 my-4 flex justify-between items-center p-2 max-lg:hidden text-white font-bold '>
        <div>
      <img src= {Images.foodweb.logo} alt='logo' width={70} height={70} loading='lazy'/>
      <h3>Portfolio</h3>
        </div>
        <div className='flex p-2 gap-8 mx-8' style={{borderBottom : '1px solid #D9D9D9 '}}>
        <Link id='home' to = "/" style={{borderBottom: hover === 'home' ? '2px solid #40EF14' : 'none'}} 
          onMouseOver={() =>{handleHover('home')}}>Home</Link>

  <Link id='frontend' to = "/Frontend" style= {{borderBottom: hover === 'frontend'? '2px solid #40EF14' : 'none'}}
    onMouseOver={()=>{handleHover('frontend')}}>Front-end</Link>

            <Link id='backend' to = "/Backend"  style= {{borderBottom: hover === 'backend'? '2px solid #40EF14' : 'none'}}
    onMouseOver={()=>{handleHover('backend')}}>Back-end</Link>
            <Link id='uiux' to = "/UIUX"  style= {{borderBottom: hover === 'uiux'? '2px solid #40EF14' : 'none'}}
    onMouseOver={()=>{handleHover('uiux')}}>UI/UX Design</Link>
            <Link id='graphicart' to = "/Graphicart"  style= {{borderBottom: hover === 'graphicart'? '2px solid #40EF14' : 'none'}}
    onMouseOver={()=>{handleHover('graphicart')}}>Graphic-Art Design</Link>
            <Link id='contact' to = "/Contact"    style= {{borderBottom: hover === 'contact'? '2px solid #40EF14' : 'none'}}
    onMouseOver={()=>{handleHover('contact')}}>Contact</Link>
        </div>
       
    </div>
  )
}

export default Nav