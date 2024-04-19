import React from "react";

const TvShowCard = ({ imgpic, heading, subheading }) => {
  return (
    <div className=" rounded-lg h-[28rem]  lg:h-[38rem] lg:py-4">
      <div className="lg:max-w-sm overflow-hidden h-full bg-white rounded-lg shadow-lg hover:shadow-blue-400 p-5">
        <div className="relative">
          <img
            className="w-full  object-cover"
            src={imgpic}
            alt="Profile Image"
          />
          <button className=" absolute top-5 left-4 font-normal px-2 py-1 rounded-lg bg-white">
            {heading}
          </button>
        </div>
        <div className="px-6 py-4">
          <div className="text-xl font-semibold text-gray-800">
            {subheading}
          </div>
        </div>

        <div className="px-6 py-4">
          <button className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-red-600 bg-red-500 hover:bg-red-400 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TvShowCard;
