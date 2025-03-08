import React, { useState } from "react";
import images from '../../Constants/Images';
import { Link } from 'react-router-dom';

const Mobileapp = ({language}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <div className="">
      {images.Uiuxdesign?.map((photo, photoIndex) => (
        <div key={photoIndex} className="flex flex-col items-center justify-center gap-3 bg-[#438672] border-2 border-[#FFD700] rounded-lg m-8 p-2 max-lg:m-2 max-lg:p-2">
          <div className=" w-full  flex justify-center">
            <img
              src={
                activeImageIndex === "film"
                  ? photo.film
                  : photo.photos[activeImageIndex]
              }
              width={550}
              height={250}
              loading="lazy"
              alt="video"
            />
          </div>

          <div className="font-montecarlo flex flex-col  items-center justify-center gap-4 text-white w-full p-4 bg-black ">
            <h1><strong>{photo.title}</strong></h1>
            <div className= " flex  gap-6  items-center justify-center">
            <h2>
            {language === "English"? <strong>{photo.description}</strong> :<strong>{photo.description2}</strong> }
            </h2>
            <a href ={photo.link} target="_blank">  <button className='px-8 py-2  max-lg:px-4  max-lg:py-2 bg-black border-2 border-[#FFD700] rounded-md'><strong>{language ==="English"? "Visit" : "besuchen" }</strong></button></a>
            </div>
            
          </div>
        

          <div className=" rounded-lg flex justify-center items-center gap-6 w-full bg-[#5F0E33]">
            {photo.photos?.map((image, index) => (
              <div
                key={index}
                className={`m-1 p-1  border ${
                  index === activeImageIndex
                    ? "border-2 border-[#d4af37]"
                    : "border-none"
                } rounded-lg`}
                onClick={() => handleImageClick(index)}
              >
                <img src={image} width={100} height={100} alt="picture" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mobileapp;
