import React from "react";

const CardOverview = () => {
  return (
    <div>
      <div className=" mx-auto px-6 flex flex-col lg:flex-row-reverse items-center justify-between cursor-pointer">
        <div>
          <img src="https://emoha.com/_next/image?url=https%3A%2F%2Fd2ts1vii79fe9b.cloudfront.net%2Faws_gallery%2F9ac6371f-3eef-48b3-9548-470a07edd20e_Medicaldevices.webp&w=640&q=75"></img>
        </div>

        <div className=" w-full lg:w-3/5 flex flex-col gap-y-3 lg:gap-y-9 items-center">
          <h1 className="text-xl md:text-3xl pl-2 my-2   font-sans font-bold  text-black cursor-pointer">
            Medical equipment & devices
          </h1>
          <p className="text-sm sm:text-base text-black ">
            Access at-home medical equipment to make elders’ lives easier and
            safer. Cost-effective devices for on-time medical alerts. Choose
            from digital thermometers, oxygen cylinders, BP instruments, CPAP &
            more
          </p>
          <button className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-red-600 bg-red-500 hover:bg-red-400 rounded-lg">
            Book Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOverview;
