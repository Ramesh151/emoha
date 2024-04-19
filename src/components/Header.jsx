import React from "react";
import logo from "../assets/emoha_logo.webp";
import Whatsapp from "../assets/Whatsapp.webp";

const Header = () => {
  return (
    <div className=" bg-slate-800 lg:bg-inherit w-full h-full ">
      <div className=" w-full lg:w-9/12 mx-auto flex justify-between items-center h-24 ">
        <div className=" w-32 ml-2 ">
          <img src={logo} className="" alt="Logo" width={200} height={54} />
        </div>

        <ul className="lg:flex space-x-6 text-white hidden ">
          <li className=" font-medium text-xl ">Plans</li>
          <li className=" font-medium text-xl">Our Services</li>
          <li className=" font-medium text-xl">Moh TV</li>
          <li className=" font-medium text-xl">Blogs</li>
          <li className=" font-medium text-xl">Media</li>
        </ul>

        <div className="flex items-center space-x-6">
          <img
            src={Whatsapp}
            className=" h-11 px-5 py-2  border rounded-full"
            alt="WhatsApp"
          />
          <button className="text-white px-5 py-2  border rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
