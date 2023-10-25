import React, { useState } from "react";
import images from '../../Constants/Images';

const Design = () => {
  const [isHovered, setIsHovered] = useState("");

 

  return (
    <div className="flex flex-row max-lg:col justify-center items-center flex-wrap gap-12 max-lg:gap-4 shadow-xl  rounded-lg   p-2">
      {images.graphic.map((image, index) => {
        return (
          <div
            key={index}
            className="flex justify-between flex-col max-lg:w-[100%] w-[40%]  border-[#80214C] bg-purple-100 shadow-xl rounded-lg border m-2"
          >
            <div>
              <img
                src={image.image}
                loading="lazy"
                className="rounded-xl "
                alt="Project"
                style={{
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                  transform:
                    isHovered === image.title ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered(image.title)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
            <div className="flex items-center flex-col  p-4">
              <h2 className="font-black text-purple-950">{image.title}</h2>
              <h3 className="font-semibold text-black">{image.description}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Design;
