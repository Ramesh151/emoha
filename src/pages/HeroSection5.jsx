import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TvShowCard from "../components/TvShowCard";

const HeroSection5 = () => {
  const data = [
    {
      imgpic:
        "https://d2ts1vii79fe9b.cloudfront.net/s3_gallery/images/meeting/d44df208-8e4e-4756-b95f-757fda6844e1.webp",
      heading: "As Your Docotor",
      subheading: "Facing health issues? Don't worry and ask all your ...",
    },
    {
      imgpic:
        " https://d2ts1vii79fe9b.cloudfront.net/s3_gallery/images/meeting/3ead1ca3-d20e-4ed8-b7ff-1f94e673cd41.webp",
      heading: "Celerbarity Seniors",
      subheading: "The day of World Senior Citizen's Day is here,let...",
    },
    {
      imgpic:
        " https://d2ts1vii79fe9b.cloudfront.net/s3_gallery/images/meeting/a626f54f-c7d7-4f92-933f-afb765d7a7d9.webp",
      heading: "Birthday Celerabation",
      subheading: "Let's congratulate all our Elders who had Birthdays...",
    },
    {
      imgpic:
        " https://d2ts1vii79fe9b.cloudfront.net/s3_gallery/images/meeting/0c753797-bb9d-4b88-9a3f-e02e01c54d80.webp",
      heading: "Bollywood or Masti",
      subheading: "Bollywood club sessions are all about fun, drama, songs...",
    },
  ];
  const responsive = {
    0: { items: 1.2 },
    568: { items: 1.5 },
    1024: { items: 3 },
  };
  const items = data.map(({ imgpic, heading, subheading }, index) => (
    <TvShowCard
      key={index}
      imgpic={imgpic}
      heading={heading}
      subheading={subheading}
    />
  ));
  return (
    <div className=" w-10/12 mx-auto flex flex-col lg:gap-y-5 lg:mt-4">
      <div className=" flex justify-between">
        <h1 className=" lg:text-3xl text-xl py-3 px-4 font-bold leading-tight text-gray-900">
          Read our latest blogs
        </h1>

        <button className="lg:text-xl py-1 px-4 bg-red-700 rounded-lg text-white hover:bg-red-900">
          View all <span>&rarr;</span>
        </button>
      </div>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls
        />
      </div>
    </div>
  );
};

export default HeroSection5;
