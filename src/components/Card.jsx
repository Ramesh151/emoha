import React from "react";

const Card = ({ imgpic, heading, subheading }) => {
  return (
    <>
      <div
        className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-start  justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
        style={{ backgroundImage: `url(${imgpic})` }}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-none bg-transparent text-gray-700 shadow-none">
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
        </div>

        <div className="relative p-6 px-6 py-8 md:px-12  ">
          <button className=" bg-inherit text-white font-normal text-lg border px-2 py-1 rounded-full">
            {heading}
          </button>
          {/* <button className="absolute top-0 bg-inherit text-white font-normal text-lg border px-2 py-1 rounded-full">
            {heading}
          </button> */}
        </div>

        <div className="relative p-6 px-6 py-14 md:px-12">
          <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            {subheading}
          </h2>

          <button className="relative  bg-white text-black px-2 py-1 border-2  rounded-2xl border-white">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
