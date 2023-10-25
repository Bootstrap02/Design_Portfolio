import React, { useState } from 'react';
import images from '../Constants/Images';


const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${images.quikapp.mockBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
  };

  const modalStyle = {
    zIndex: "2000",
    position: "fixed",
    top: "25%",
    left: "10%",
    }

  const [successMessage, setSuccessMessage] = useState(null);


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xeqbpyny", {
        action: "https://formspree.io/f/xeqbpyny",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        setSuccessMessage("Message sent successfully!"); // Set success message
        setFormData({ // Reset form fields
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });

      } else {
        console.error("Form submission failed.");
        // Handle error (show an error message to the user, etc.)
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      // Handle error (show an error message to the user, etc.)
    }
  };

  return (
    <div className="w-[100%] "  style={backgroundImageStyle}>
      

      <div
        className="flex justify-center items-center m-8 rounded-sm text-4xl font-bold"
       
      >
        <h1>Contact Me</h1>
      </div>
      <div className="max-lg:w-[80%] m-2">
       
        <p>
           You can contact me via phone, email, whatsapp, linkedIn, facebook. I a available at all hours.you can use any of the information on this page or fill the simple form provided below.
        </p>
      </div>
      <div className="flex gap-8 justify-center max-lg:flex-col">
        
          <form
            onSubmit={handleFormSubmit}
            className="input border m-6 max-lg:m-1 "
          >
            <div className="my-2 ">
              <label className="text-white" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="w-full py-2 px-4 my-2 rounded-lg text-black"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>
            <div className="my-2 ">
              <label className="text-white" htmlFor="email">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email Address"
                className="w-full py-2 px-4 my-2 rounded-lg text-black"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="my-2 ">
              <label className="text-white" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
                className="w-full py-2 rounded-lg px-4 my-2 text-black"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
              />
            </div>
            <div className='my-2'>
              <label className="text-white" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message" 
                placeholder="Type your message"
                className="w-full py-2 rounded-lg px-4 my-2 text-black"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg font-semibold my-2 bg-[#D88538]"
            >
              Submit
            </button>
          </form>
        
        <div  style={modalStyle} className="w-[1000px] max-lg:w-[300px]" >
          {successMessage &&  <div className='container bg-black rounded-lg w-full flex flex-col justify-center items-center m-4 p-4 max-lg:p-2 max-lg:m-2 '>
          
    <div className="flex flex-col justify-center w-full gap-4 items-center rounded-lg border-2 border-[#B59410] p-8 max-lg:p-4">
    <button className="bg-white ml-auto" onClick={() => setSuccessMessage(null)}>
      <img src= {images.foodweb.cancel}/>
      </button>
      <p className='text-white font-black text-center text-4xl max-lg:text-2xl'>{successMessage}</p>
      <img src= {images.foodweb.sent} width={200}/>
    </div>
  </div>}
        </div>
        <div className="border m-6 max-lg:m-4">
          <div className='flex flex-col gap-6'>
            <h1 className="text-2xl">
              <strong>Contact Info</strong>
            </h1>
            <p><strong>email :</strong> louisjoseph131@gmail.com</p>
            <a className='text-yellow-600' href= "https://www.linkedin.com/in/louis-joseph-634558153/"><strong>linkedIn</strong></a>
            <a className='text-yellow-600' href= "https://web.facebook.com/louis.joseph.3597/"><strong>facebook</strong></a>
            <p><strong>whatsapp :</strong> +234-816-491-0957</p>
            <p><strong>Tel :</strong> +234-816-491-0957, +234-704-238-0116, +234-906-941-2463</p>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Contact
