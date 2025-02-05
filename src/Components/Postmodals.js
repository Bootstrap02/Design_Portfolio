import React, { useState } from "react";
import { MdClose } from "react-icons/md";


const Postmodals = ({ closeModals, openSuccessMessage, language }) => {
    const modalStyle = {
      zIndex: "2000",
      position: "fixed",
      top: "15%",
      border: "2px solid #FFD700",
    };
  
    const [formData, setFormData] = useState({
      Name: "",
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
          closeModals(); // Close the modal after form submission
          openSuccessMessage();
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
      <div
        className="bg-black py-4 px-4 m-4 input max-lg:absolute top-0 left-0 modal"
        style={modalStyle}
      >
        <div className="flex flex-row py2  text-white ">
          <div>
            <h2 className="text-center">{language === "English" ? "Send me a Message" : "Schick mir eine Nachricht"}</h2>
          </div>
          <div className="ml-auto">
            <button className="" onClick={closeModals}>
               <MdClose size={30} color="white" />
            </button>
          </div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="my-2">
            <label className=" text-white" htmlFor="Name">
            {language === "English" ? "Name" : "Name"} 
            </label>
            <input
              type="text"
              id="Name"
              placeholder="input your Name"
              className="w-full py-2 px-4 my-2 rounded-lg  text-black"
              value={formData.Name}
              onChange={(e) =>
                setFormData({ ...formData, Name: e.target.value })
              }
              required
            />
          </div>
          <div className="my-2">
            <label className=" text-white" htmlFor="email">
            {language === "English" ? "Email Address" : "E-Mail-Adresse"}
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              className="w-full py-2 px-4 my-2 rounded-lg  text-black"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="my-2">
            <label className=" text-white" htmlFor="phoneNumber">
            {language === "English" ? "Phone Number" : "Telefonnummer"} 
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              className="w-full py-2 rounded-lg px-4 my-2  text-black"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              required
            />
          </div>
          <div>
              <label className="text-white" htmlFor="message">
              {language === "English" ? "Your Message" : "Deine Nachricht"}
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
             {language === "English" ? "Send Message" : "Nachricht senden"}  
          </button>
        </form>
      
      </div>
    );
  };

  export default Postmodals