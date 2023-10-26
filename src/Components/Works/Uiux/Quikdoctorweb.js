import React from 'react';
import Images from '../../../Constants/Images';
import Webmockup from './Quikwebmockup'

const Quikdoctorweb = () => {
  const background = {
    backgroundImage :  `url(${Images.quikweb.mockBG})`,
    backgroundRepeat: 'repeat',
}

  return (
    <div className='bg-white w-[100%]  max-lg:flex max-lg:flex-col'>
      <div className='flex justify-start mx-4 pt-6 mb-2 text-2xl font-bold'>
      <h1>Welcome to <span className=' text-4xl text-[#145710]'>Quikdoctor </span> Medical AI Consultancy mobile app</h1>
      </div>
       <div>
        <img src={Images.quikapp.mucks}/>
       </div>
       <div>
        <div className='text-4xl text-center font-bold p-6 my-4'><span className='text-[#145710]'>Project </span>Description</div>
        <div className='flex flex-col gap-4 justify-center mx4 my-8'>
       <header className='font-semibold text-2xl '> Discover Quickdoctor Medical Consultancy Ltd.: Your Trusted Companion in Health</header>
       <div className='flex justify-center'><p className='text-xl w-[80%] '>At Quickdoctor, we understand that your health is your most valuable asset. Our innovative AI-powered platform connects you with certified medical professionals, offering expert advice and personalized assistance anytime, anywhere. Whether you have pressing health concerns, need a second opinion, or simply seek general medical guidance, Quickdoctor is here to empower you with knowledge and support.</p></div>
       <div className='flex justify-center'>
        <img className='w-[90%]' src={Images.quikapp.mucksgroup}/>
       </div>
        </div>
        <div  className='bg-[#f7f6f6] shadow-lg p-6 mx-8  max-lg:p-2 max-lg:m-2  rounded-lg '>
        <div className='text-4xl text-center font-bold p-6'><span className='text-[#80214C]'>Design </span>Process</div>
        <div className='flex justify-center'><p className='text-xl w-[80%]'>User Interface (UI) and User Experience (UX) design are critical components of creating digital products that are not only visually appealing but also user-friendly and intuitive. The UI/UX design process involves several stages that focus on understanding user needs, creating user interfaces, and ensuring a seamless and enjoyable user experience.</p></div>
        <div className='flex flex-col gap-8 m-6 p-4  max-lg:my-4 max-lg:mx-0 max-lg:p-0'>
          <div className='text-black flex gap-12 max-lg:gap-0 max-lg:justify-between   justify-center items-center'>
            <div className='flex justify-center items-center gap-2 max-lg:w-[12%]'>
            <img src={Images.foodweb.understand} width={70} height={70} loading='lazy'/>
            <h1 className='font-bold text text 4xl'>01</h1>
          </div>
          <div className='max-lg:hidden'>
            <img src={Images.foodweb.designarrow} width={70} height={70} loading='lazy'/>
          </div>
            <div className='flex justify-center items-center gap-2 max-lg:w-[12%]'>
            <img src={Images.foodweb.research} width={70} height={70} loading='lazy'/>
            <h1 className='font-bold text text 4xl'>02</h1>
          </div>
          <div className='max-lg:hidden'>
            <img src={Images.foodweb.designarrow} width={70} height={70} loading='lazy'/>
          </div>
            <div className='flex justify-center items-center gap-2 max-lg:w-[12%]'>
            <img src={Images.foodweb.prototypes} width={70} height={70} loading='lazy'/>
            <h1 className='font-bold text text 4xl'>03</h1>
          </div>
          <div className='max-lg:hidden'>
            <img src={Images.foodweb.designarrow} width={70} height={70} loading='lazy'/>
          </div>
            <div className='flex justify-center items-center gap-2 max-lg:w-[12%]'>
            <img src={Images.foodweb.design} width={70} height={70} loading='lazy'/>
            <h1 className='font-bold text text 4xl'>04</h1>
          </div>
          <div className='max-lg:hidden'>
            <img src={Images.foodweb.designarrow} width={70} height={70} loading='lazy'/>
          </div>
            <div className='flex justify-center items-center gap-2 max-lg:w-[12%]'>
            <img src={Images.foodweb.test} width={70} height={70} loading='lazy'/>
            <h1 className='font-bold text text 4xl'>05</h1>
          </div>
          </div>
          <div className='text-black flex gap-6 max-lg:justify-between'>
            <div className='flex flex-col gap-2 max-lg:w-[12%]  mr-3'>
              <h1 className='text-sm font-semibold'>Understand</h1>
              <p className='text-[5px] text-[#ACACAC] '>Understanding the target audience, their behaviors, needs, and preferences.</p>
            </div>
            <div className='flex flex-col gap-2 max-lg:w-[12%]'>
              <h1 className='text-sm font-semibold'>Research</h1>
              <p className='text-[5px] text-[#ACACAC] '>Analyzing competitors and market trends to identify gaps and opportunities.</p>
            </div>
            <div className='flex flex-col gap-2 max-lg:w-[12%]'>
              <h1 className='text-sm font-semibold'>Prototype</h1>
              <p className='text-[5px] text-[#ACACAC] '> Building interactive prototypes to simulate the user experience and test functionalities.</p>
            </div>
            <div className='flex flex-col gap-2 max-lg:w-[12%]'>
              <h1 className='text-sm font-semibold'>Design</h1>
              <p className='text-[5px] text-[#ACACAC] '>Designing the actual user interfaces with a focus on aesthetics and branding.</p>
            </div>
            <div className='flex flex-col gap-2 max-lg:w-[12%] '>
              <h1 className='text-sm font-semibold'>Test</h1>
              <p className='text-[5px] text-[#ACACAC] '>Conducting tests with real users to evaluate the product's ease of use and identify potential issues.</p>
            </div>
          </div>
          
        </div>
        </div>
        <div>
        <div className='text-4xl text-center font-bold p-6'><span className='text-[#145710]'>Brand </span>Guideline</div>
        <div className='flex justify-center'><p className='text-xl w-[80%]'>A brand guideline, also known as a brand-style-guide or brand book is a documentthat outlines the visual and verbal guidelines for maintaining consistency and coherence in a brand's identity.</p></div>
          <div className= ' bg-[#f7f6f6] shadow-lg p-6 my-6 mx-8 rounded-lg '>
           <img src = {Images.quikapp.Colorstexts} loading ='lazy'/>
          </div>
        </div>
       </div>
       <div className='flex flex-col gap-6'>
       <div className='text-4xl text-center font-bold p-6'><span className='text-[#145710]'>Wireframe </span>Design</div>
        <div className='m-8 p-8 max-lg:m-2 max-lg:p-2 bg-[#f7f6f6] shadow-lg rounded-lg'>
          <video src= {Images.quikapp.intros} width="100%" height="auto" controls autoPlay/>
        </div>
        <div style={background}>
         <Webmockup/>
        </div>
        <div className='flex flex-col gap-6 my-6 justify-center items-center'>
    <img src={Images.quikapp.heart} width={80} height={80} loading='lazy'/>
    <h1 className='text-bold text-2xl'>Thanks for Watching</h1>
</div>

       </div>
    
    </div>
  )
}

export default Quikdoctorweb
