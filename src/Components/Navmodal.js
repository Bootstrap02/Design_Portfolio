import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";


const Navmodal = ({ closeModals }) => {
  const modalStyle = {
    zIndex: "2000",
    position: "absolute",
    top: "0",
    left: "0",
  };

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent event propagation to parent elements
    closeModals(); // Close the modal
  };

  return (
    <div style={modalStyle} className=" w-[100%]">
      <nav className="flex flex-col   bg-slate-950 p-2 border-2 border-[#d4af37]">
        <button className="ml-auto m-2 p-2" onClick={handleCloseClick}>
        <MdClose size={30} color="white" />
        </button>
        <ul onClick={handleCloseClick} className="flex flex-col align-items-center justify-center gap-8 p-4  text-white">
          <li
            className="font-lg  font-bold my-4 text-center border-bottom border-white"
            style={{ borderBottom: "white solid 1px" }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="font-lg  font-bold my-4 text-center border-bottom border-white"
            style={{ borderBottom: "white solid 1px" }}
          >
            <Link to="/Frontend">Front-end</Link>
          </li>
          <li
            className="font-lg  font-bold my-4 text-center border-bottom border-white"
            style={{ borderBottom: "white solid 1px" }}
          >
            <Link to="/Backend">Back-end</Link>
          </li>
          <li
            className="font-lg  font-bold my-4 text-center border-bottom border-white"
            style={{ borderBottom: "white solid 1px" }}
          >
            <Link to="/UIUX">Apps</Link>
          </li>
          <li
            className="font-lg  font-bold my-4 text-center border-bottom border-white"
            style={{ borderBottom: "white solid 1px" }}
          >
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navmodal;
