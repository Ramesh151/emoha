import React from "react";

const CardOverview = ({
  heading = "Elder tech",
  img = "https://emoha.com/_next/image?url=https%3A%2F%2Fd2ts1vii79fe9b.cloudfront.net%2Faws_gallery%2F20ac13c9-4535-42b2-8cc6-f2b76cb880e4_Eldertech.webp&w=1920&q=75",
  text = "Security sensors, smart entertainment devices and more for a hassle-free life. Avail immediate tech assistance, wearable SOS button, and more. Get guidance on how to use the new devices.",
}) => {
  console.log(img);
  return (
    <div>
      <div className=" mx-auto px-6 flex flex-col lg:flex-row-reverse items-center justify-between cursor-pointer">
        <div>
          <img src={img}></img>
        </div>

        <div className=" w-full lg:w-3/5 flex flex-col gap-y-3 lg:gap-y-9 items-center">
          <h1 className="text-xl md:text-3xl pl-2 my-2   font-sans font-bold  text-black cursor-pointer">
            {heading}
          </h1>
          <p className="text-sm sm:text-base text-black ">{text}</p>
          <button className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-red-600 bg-red-500 hover:bg-red-400 rounded-lg">
            Book Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOverview;
