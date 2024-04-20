import React from "react";

const Man = () => {
  return (
    <>
      <div className="relative mt-4 rounded-xl lg:hidden mb-10">
        <img
          className=" object-cover rounded-md lg:object-fill w-full "
          src="https://emoha.com/_next/image?url=%2Fstatic%2Fimages%2Fbanner1_mob.webp&w=640&q=75"
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold text-center">
            What else are <br></br>you getting
          </h2>
        </div>
      </div>

      <div className="hidden lg:block relative mt-4 rounded-xl">
        <img
          className="object-cover rounded-md lg:object-fill w-full "
          src="https://emoha.com/_next/image?url=%2Fstatic%2Fimages%2Fbanner1_web.webp&w=1200&q=75"
          alt="Random image"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold text-center">
            What else are you getting
          </h2>
        </div>
      </div>
    </>
  );
};

export default Man;
