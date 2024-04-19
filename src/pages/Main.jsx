import React, { useRef, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import videoBackground from "../assets/video.mp4";

const Main = () => {
  const videoRef = useRef(null);

  return (
    <>
      <div className="relative w-screen h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={videoBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative z-10">
          <Header />
          <div className=" hidden lg:block ">
            <HeroSection videoRef={videoRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
