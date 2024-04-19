import React from "react";
import Card from "../components/Card";

const HeroSection3 = () => {
  const data1 = [
    {
      imgpic:
        "https://emoha.com/_next/image?url=%2Fstatic%2Fimages%2Ffirst.png&w=1920&q=75",
      heading: "More Busy",
      subheading: "Engage Plan",
    },
    {
      imgpic:
        " https://emoha.com/_next/image?url=%2Fstatic%2Fimages%2Fsecond.png&w=1920&q=75",
      heading: "More Safty",
      subheading: "Empower Plan",
    },
    {
      imgpic:
        " https://emoha.com/_next/image?url=%2Fstatic%2Fimages%2Fthird.png&w=1920&q=75",
      heading: "More health",
      subheading: "Enchance Plan",
    },
  ];
  return (
    <>
      <div className="w-full bg-slate-100 flex flex-col ">
        <div className=" flex  justify-around lg:my-14">
          <h1 className=" text-4xl text-black font-medium ">
            Get the care plan your parents need{" "}
          </h1>
          <p className=" text-lg font-normal">
            We have all their needs covered.
          </p>
        </div>
        <div className=" w-10/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {data1.map(({ imgpic, heading, subheading }, index) => (
              <Card
                key={index}
                imgpic={imgpic}
                heading={heading}
                subheading={subheading}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection3;
