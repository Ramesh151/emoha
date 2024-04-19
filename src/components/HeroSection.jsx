import React, { useRef, useState } from "react";
import volueon from "../assets/volume_up.webp";
import volueoff from "../assets/volume_off.webp";

const HeroSection = ({ videoRef }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  return (
    <>
      <div className="  w-full lg:w-9/12 mx-auto lg:flex">
        <div className="w-1/2">
          <h1 className="text-7xl text-white font-semibold">
            Engage <br></br> Empower <br />
            Enhance
          </h1>
          <p className=" text-white text-3xl my-10">
            Because those who made us deserve to age magnificently from the
            comfort of their own homes.
          </p>
        </div>

        <div className="w-1/2 relative flex">
          <div className="absolute right-0 bottom-6 flex justify-end items-end">
            <button
              className=" bg-inherit  px-2 py-2 mx-4 rounded-full border hover:bg-current"
              onClick={toggleMute}
            >
              <img src={isMuted ? volueoff : volueon} alt="Volume" />
            </button>
            <div>
              <button className="bg-red-500 hover:bg-red-900  mt-8 inline-flex items-center justify-center   py-3 px-6 font-dm text-base font-medium text-white shadow-xl  rounded-full">
                Connect with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
