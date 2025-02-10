import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Images from '../Constants/Images';
import Buttons from '../Constants/Buttons';
import Postmodals from './Postmodals';


const Landingpage = ({language, setClick}) => {

  const [modals, setModals] = useState(false);

  const modalStyle = {
    zIndex: "2000",
    position: "fixed",
    top: "20%",
    left: "10%"
    
  };
  
useEffect(()=>{
setClick("home")
},[])
  const [hover, setHover] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false);

const handleClick = (id) =>{
  setHover(id)
}


const openSuccessMessage = () => {
   setSuccessMessage(language === "English" ? "Message sent successfully!" : "Nachricht erfolgreich gesendet!")
;
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
        <div className='mx-6 max-lg:mx-2   gap-4 flex flex-col items-center justify-center w-[50%] max-lg:w-[97%]'>
         <div className=' flex flex-col max-lg:items-center text-center text-white font-bold text-md max-lg:text-[12px]'>   <img className='w-[70%] ' src={Images.foodweb.potrait} alt='potrait' />
         <div className='flex gap-5 max-lg:gap-2'>
         <p>louisjoseph131@gmail.com</p>
         <p>+2348164910957 || +2349069412463</p>
         </div>
         </div>
            <div className='flex flex-col gap-3 max-lg:gap-0 items-center justify-center'>
              <div  className=' m-4 max-lg:m-0'> <button className='flex max-lg:text-[15px] gap-1 px-8 py-2 max-lg:p-1 justify-center items-center  bg-white shadow-lg rounded-md'><img src={Images.foodweb.github} width={20}/>
                <a  href="https://github.com/Bootstrap02" target="_blank"><strong>Github</strong></a></button></div>
             
<div className='flex gap-2 items-center justify center'>
<div  className=' m-4 max-lg:mx-0'><button className='flex gap-1 px-8 py-2 max-lg:p-1  max-lg:text-[15px] justify-center items-center bg-white shadow-lg rounded-md'><img src={Images.foodweb.cv} width={20}/>
{language === "English"?  
<a  href= "https://drive.google.com/file/d/1t_BpgdhZoFLso1J6l5rHmOIFtptDqj-R/view?usp=sharing"  target="_blank"><strong>View CV</strong></a>
:
<a  href=  "https://drive.google.com/file/d/1Xkg02Z63KbF4mibxpqrMmZleEgW6H8nJ/view?usp=sharing"  target="_blank"><strong>View CV</strong></a>
}
</button></div>

<div><div className=' m-4 max-lg:m-0'  onClick={openModals}><Buttons language={language}/></div>
              {modals && <Postmodals closeModals={closeModals} openSuccessMessage = {openSuccessMessage} language={language}/>}
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
        </div></div>
        <div  className=' m-4 max-lg:mx-0'> <button className='flex gap-1 px-8 py-2 max-lg:text-[15px] max-lg:p-1 justify-center items-center bg-white shadow-lg rounded-md'><img src={Images.foodweb.facebook} width={20}/>
                <a  href="https://m.facebook.com/profile.php/?id=100011187841047" target="_blank"><strong>Facebook</strong></a></button></div>
       
            </div>
            <div  className=' m-4 max-lg:m-0'><button className='flex gap-1 px-8 py-2 max-lg:p-1 max-lg:text-[15px] justify-center items-center bg-white shadow-lg rounded-md'><img src={Images.foodweb.linkedin} width={20}/>
            {language === "English"? 
            <a  href="https://www.linkedin.com/in/louis-joseph-634558153/" target="_blank"><strong>LinkedIn</strong></a>
            :
            <a  href="linkedin.com/in/louis-joseph-8341bb128" target="_blank"><strong>LinkedIn</strong></a>
}
            </button></div>
                </div>
        </div>



        <div className='text-white flex flex-col w-[50%] justify-center max-lg:w-[100%]'>
        {language === "English"?<div className='my-2 p-4 text-2xl max-lg:text-xl'>
      Greetings! <span className='text-[#40EF14] font-bold'>I'm <span className=' text-4xl max-lg:text-2xl'>Louis Joseph</span></span>, a passionate and versatile Software Engineer specializing in Frontend Development with React.js, Backend Engineering with Node.js, and UI/UX Design.
       With a year of hands-on experience, I have honed my skills in creating seamless and visually appealing digital experiences.
      </div>:
      <div className='my-2 p-4 text-2xl max-lg:text-xl'>
      Grüße! <span className='text-[#40EF14] font-bold'>Ich bin <span className=' text-4xl max-lg:text-2xl'>Louis Joseph</span></span>, ein leidenschaftlicher und vielseitiger Softwareentwickler, spezialisiert auf Frontend-Entwicklung mit React.js, Backend-Engineering mit Node.js und UI/UX-Design. Mit einem Jahr praktischer Erfahrung habe ich meine Fähigkeiten darin geschärft, nahtlose und visuell ansprechende digitale Erlebnisse zu schaffen.
      </div>}

      {language === "English"?
      <div className='justify-start'>
<strong className='text-[#40EF14]'>Frontend Expertise: </strong>
In the realm of frontend development, I excel in crafting responsive, interactive, and user-friendly interfaces using React.js. I have a keen eye for detail, ensuring that every pixel is in its perfect place, and every user interaction is smooth and intuitive. <Link id='frontend' to = "/Frontend"
    ><button  className='border-2 border-[#B59410] p-2'><strong> {language=== "English"? "See more..." : "Mehr erfahren..."}</strong></button></Link>
<br/><br/>
<strong  className='text-[#40EF14]'>Backend Mastery: </strong>
On the backend, I thrive in the world of Node.js, architecting robust and scalable server-side applications. My proficiency lies in optimizing performance and ensuring the backend infrastructure seamlessly supports the frontend, providing users with a seamless experience. <Link  id='backend' to = "/Backend" 
   ><button className='border-2 border-[#B59410] p-2'><strong> See more ...</strong></button></Link>


<br/><br/>
<strong  className='text-[#40EF14]'>Mobile-app Proficiency: </strong>
I have strong expertise in mobile app development using React Native, JavaScript, and React, with a focus on creating intuitive user experiences and clean interfaces. I efficiently integrate a variety of third-party packages to enhance app functionality and performance. Having built apps with Expo, I have successfully deployed them to both Google Play Store and Apple App Store. Additionally, I am well-versed in the build and deployment process, ensuring smooth and efficient releases. <Link  id='apps' to = "/UIUX" 
    ><button className='border-2 border-[#B59410] p-2'><strong> {language=== "English"? "See more..." : "Mehr erfahren..."}</strong></button></Link>

<br/><br/>
<strong  className='text-[#40EF14]'>Tools & Technologies:: </strong>
I am well-versed in a range of tools and packages, including Git amd Github, Docker, Expo, Cloudinary, MongoDB..., allowing me to streamline collaboration, enhance productivity, and deliver exceptional results.
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
</div>:
 <div className='justify-start'>
 <strong className='text-[#40EF14]'>Frontend-Expertise: </strong>
 Ich bin spezialisiert auf die Entwicklung responsiver, interaktiver und benutzerfreundlicher Oberflächen mit React.js. Mein ausgeprägtes Auge für Details stellt sicher, dass jedes Pixel perfekt positioniert ist und jede Benutzerinteraktion reibungslos und intuitiv abläuft. <Link id='frontend' to = "/Frontend"
     ><button  className='border-2 border-[#B59410] p-2'><strong> {language=== "English"? "See more..." : "Mehr erfahren..."}</strong></button></Link>
 <br/><br/>
 <strong className='text-[#40EF14]'>Backend-Expertise: </strong>
Auf der Backend-Seite blühe ich in der Welt von Node.js auf und entwickle robuste und skalierbare serverseitige Anwendungen. Meine Stärke liegt in der Optimierung der Leistung und der Sicherstellung, dass die Backend-Infrastruktur nahtlos das Frontend unterstützt, um den Nutzern eine reibungslose Erfahrung zu bieten. <Link id='backend' to='/Backend'>
    <button className='border-2 border-[#B59410] p-2'><strong> Mehr erfahren ...</strong></button>
</Link>

<br/><br/>
<strong className='text-[#40EF14]'>Mobile-App-Kompetenz: </strong>  
Ich habe umfangreiche Erfahrung in der Entwicklung von Mobile-Apps mit **React Native, JavaScript und React**, wobei mein Fokus auf der **Schaffung intuitiver Benutzererlebnisse und klarer Benutzeroberflächen** liegt. Ich integriere effizient eine Vielzahl von **Drittanbieter-Paketen**, um die Funktionalität und Leistung der Apps zu verbessern. Nachdem ich Apps mit **Expo** entwickelt habe, konnte ich sie erfolgreich im **Google Play Store und im Apple App Store** veröffentlichen. Darüber hinaus bin ich mit dem **Build- und Deployment-Prozess** bestens vertraut und sorge für reibungslose und effiziente Veröffentlichungen.  

<Link id='apps' to="/UIUX">  
    <button className='border-2 border-[#B59410] p-2'><strong> {language === "English" ? "See more..." : "Mehr erfahren..."}</strong></button>  
</Link>  

<br/><br/>  
<strong className='text-[#40EF14]'>Tools & Technologien:: </strong>  
Ich beherrsche eine Vielzahl von Tools und Paketen, darunter **Git und GitHub, Docker, Expo, Cloudinary, MongoDB...**, die es mir ermöglichen, die Zusammenarbeit zu optimieren, die Produktivität zu steigern und außergewöhnliche Ergebnisse zu liefern.  

<br/><br/>  
Ich bin leidenschaftlich begeistert von Technologie und Design, stets bereit, neue Herausforderungen anzunehmen und sinnvolle Lösungen zu entwickeln. **Kollaborativ, innovativ und detailorientiert**, setze ich mich dafür ein, **hochwertige Arbeit zu liefern, die Erwartungen übertrifft**.  
<br/><br/>
Vielen Dank, dass Sie mein Portfolio besucht haben. Ich freue mich auf die Möglichkeit zur Zusammenarbeit, Innovation und gemeinsamen Gestaltung. Lassen Sie uns Ihre Ideen zum Leben erwecken!
<br/><br/>
Mit freundlichen Grüßen,
<br/><br/>
<div className='flex flex-col gap-4'>
    <h2>Louis Joseph</h2>
    <a className='text-[#40EF14]' href='louisjoseph.vercel.app' target='_blank'>louisjoseph.vercel.app</a>
    <a className='text-[#40EF14]' href='https://www.linkedin.com/in/louis-joseph-634558153/' target='_blank'>https://www.linkedin.com/in/louis-joseph-634558153/</a>
    <h3>louisjoseph131@gmail.com</h3>
</div>

 </div>
}

        </div>
       
    </div>
  )
}

export default Landingpage