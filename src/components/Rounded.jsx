import React from "react";

const Rounded = () => {
  const data = [
    {
      number: "60000+",
      name: "Elders Empowered",
    },
    {
      number: "PAN India",
      name: "Operated",
    },
    {
      number: "500+",
      name: "Lives Saved",
    },
    {
      number: "4000+",
      name: "Events Organised",
    },
  ];

  return (
    <>
      <div className="w-full lg:w-9/12 bg-red-700 lg:rounded-full rounded-2xl lg:flex lg:mx-auto justify-around py-16 lg:px-9 relative bottom-28 grid grid-cols-2 lg:gap-y-2">
        {data.map((item, index) => (
          <div className="my-3 text-center" key={index}>
            <h1 className="text-2xl lg:text-4xl font-bold text-white px-2 py-2">
              {item.number}
            </h1>
            <h2 className="text-xl lg:text-2xl text-white font-normal lg:pt-4">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rounded;
