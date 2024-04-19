import React from "react";

const VideoSection = ({ video, heading, subheading }) => {
  return (
    <>
      <div className=" relative h-96  mx-2 ">
        <div className="absolute inset-0 overflow-hidden  rounded-3xl">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className=" absolute bottom-0 z-10">
          <div className=" flex items-end ">
            <div className=" w-3/5 p-3">
              <h1 className=" text-white text-4xl font-bold text-center pb-3">
                {heading}
              </h1>
              <h2 className=" text-white text-lg font-medium pb-3">
                {subheading}
              </h2>
            </div>

            <div className=" top-0">
              <button className=" text-2xl bg-white rounded-full px-3 py-2 my-24 mx-11  ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
