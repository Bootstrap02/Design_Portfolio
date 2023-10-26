import React, { useState } from 'react';
import Images from '../Constants/Images';
import Buttons from '../Constants/Buttons';
import Postmodals from './Postmodals';


const Landingpage = () => {

  const [modals, setModals] = useState(false);

  const modalStyle = {
    zIndex: "2000",
    position: "fixed",
    top: "20%",
    left: "10%"
    
  };



  const [successMessage, setSuccessMessage] = useState(false);


const openSuccessMessage = () => {
   setSuccessMessage("Congratulations! Your message was sent successful");
};
const closeSuccessMessage = () => {
   setSuccessMessage(false)
};


  const openModals = () => {
    setModals(true);
  };
  const closeModals = () => {
    setModals(false);
  };



  return (
    <div className='flex justify-between max-lg:justify-center  items-start  p-6 max-lg:p-2  max-lg:flex-col w-[100%]]'>
        <div className='mx-6 max-lg:flex justify-center w-[50%] max-lg:w-[90%]'>
            <img className='w-[80%]' src={Images.foodweb.potrait} alt='potrait' />
        </div>

        <div className='text-white flex flex-col w-[50%] justify-center max-lg:w-[100%]'>
      <div className='my-2 p-4 text-2xl max-lg:text-xl'>
      Greetings! <span className='text-[#005163] font-bold'>I'm <span className=' text-4xl max-lg:text-2xl'>Louis Joseph</span></span>, a passionate and versatile Software Engineer specializing in Frontend Development with React.js, Backend Engineering with Node.js, and UI/UX Design.
       With a year of hands-on experience, I have honed my skills in creating seamless and visually appealing digital experiences.
      </div>

<div className='justify-start'>
<strong className='text-[#40EF14]'>Frontend Expertise: </strong>
In the realm of frontend development, I excel in crafting responsive, interactive, and user-friendly interfaces using React.js. I have a keen eye for detail, ensuring that every pixel is in its perfect place, and every user interaction is smooth and intuitive.
<br/><br/>
<strong  className='text-[#40EF14]'>Backend Mastery: </strong>
On the backend, I thrive in the world of Node.js, architecting robust and scalable server-side applications. My proficiency lies in optimizing performance and ensuring the backend infrastructure seamlessly supports the frontend, providing users with a seamless experience.


<br/><br/>
<strong  className='text-[#40EF14]'>UI/UX Proficiency: </strong>
User-centric design is at the heart of my work. I am proficient in utilizing tools like Figma, Jira, and Maze to transform complex concepts into intuitive, visually appealing interfaces. My expertise in UI/UX design ensures that every project I undertake is not just functional but also aesthetically pleasing, enhancing user engagement and satisfaction.

<br/><br/>
<strong  className='text-[#40EF14]'>Graphic Arts Designer: </strong>
Beyond code, I am a creative soul with a flair for graphic arts. I bring ideas to life through captivating visuals, merging functionality with creativity to deliver compelling designs that leave a lasting impression.


<br/><br/>
<strong  className='text-[#40EF14]'>Tools & Technologies:: </strong>
I am well-versed in a range of tools and packages, including Figma, Jira, Maze, and more, allowing me to streamline collaboration, enhance productivity, and deliver exceptional results.
<br/><br/>
I am deeply enthusiastic about technology and design, always eager to take on new challenges and create meaningful solutions. Collaborative, innovative, and detail-oriented, I am dedicated to delivering high-quality work that exceeds expectations.
<br/><br/>
Thank you for visiting my portfolio. I look forward to the opportunity to collaborate, innovate, and create together. Let's bring your ideas to life!
<br/><br/>
Warm regards,
<br/><br/>
<div className='flex flex-col gap-4'>
<h2>Louis Joseph</h2>
<a className='text-[#40EF14]' href="louisjoseph.vercel.app" target="_blank">louisjoseph.vercel.app</a>
<a className='text-[#40EF14]' href="https://www.linkedin.com/in/louis-joseph-634558153/" target="_blank">https://www.linkedin.com/in/louis-joseph-634558153/</a>
<h3>louisjoseph131@gmail.com</h3>
</div>
</div>
<div>
<div>
<div className='ml-auto m-4'  onClick={openModals}><Buttons/></div>
              {modals && <Postmodals closeModals={closeModals} openSuccessMessage = {openSuccessMessage} />}
              <div  style={modalStyle} className="w-[1000px] max-lg:w-[300px]" >
          {successMessage &&  <div className=' bg-black rounded-lg w-full flex flex-col justify-center items-center m-4 p-4 max-lg:p-2 max-lg:m-2 '>
          
    <div className="flex flex-col justify-center w-full gap-4 items-center rounded-lg border-2 border-[#B59410] p-8 max-lg:p-4">
    <button className="bg-white ml-auto" onClick={ closeSuccessMessage}>
      <img src= {Images.foodweb.cancel}/>
      </button>
      <p className='text-white font-black text-center text-4xl max-lg:text-2xl'>{successMessage}</p>
      <img src= {Images.foodweb.sent} width={100}/>
    </div>
  </div>}
        </div>
            </div>
</div>
        </div>
       
    </div>
  )
}

export default Landingpage