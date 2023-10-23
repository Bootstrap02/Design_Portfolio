import React from 'react';
import Images from '../Constants/Images';
import Buttons from '../Constants/Buttons';


const Landingpage = () => {
  return (
    <div className='flex justify-between items-start  px-4 my-2 mx-4'>
        <div className='mx-6'>
            <img src={Images.foodweb.potrait} alt='potrait' width={500} height={450} loading='lazy'/>
        </div>

        <div className='text-white flex flex-col w-[50%]'>
      <div className='my-2 p-4 text-2xl'>
      Greetings! <span className='text-[#005163] font-bold'>I'm <span className=' text-4xl'>Louis Joseph</span></span>, a passionate and versatile Software Engineer specializing in Frontend Development with React.js, Backend Engineering with Node.js, and UI/UX Design.
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
Louis Joseph
[Your Contact Information]
[Your Portfolio Link]
[Your LinkedIn Profile]
[Your Email Address]
</div>
<div className='ml-auto'><Buttons/></div>
        </div>
       
    </div>
  )
}

export default Landingpage