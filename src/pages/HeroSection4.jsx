import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card2 from "../components/Card2";
import im1 from "../assets/1.webp";
import im2 from "../assets/2.webp";
import im3 from "../assets/3.webp";
import im4 from "../assets/4.webp";
import im5 from "../assets/5.webp";
import im6 from "../assets/6.webp";
import CardOverview from "../components/CardOverview";

const HeroSection4 = () => {
  const data = [
    {
      ima: `${im1}`,
      heading: "tESTER IN ",
    },
    {
      ima: `${im2}`,
      heading: "Elder tech",
    },
    {
      ima: `${im3}`,
      heading: "Elder tech",
    },
    {
      ima: `${im4}`,
      heading: "Health support ",
    },
    {
      ima: `${im5}`,
      heading: "Home health care ",
    },
    {
      ima: `${im6}`,
      heading: "Tele consultation",
    },
  ];

  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 4.4 },
  };

  const items = data.map(({ ima, heading }) => (
    <Card2 ima={ima} heading={heading} />
  ));

  return (
    <div className=" w-10/12 mx-auto flex flex-col gap-y-5 mt-4">
      <div className=" flex justify-between">
        <h1 className=" text-3xl  font-bold leading-tight text-gray-900">
          How we help
        </h1>
        <button>
          vive all <span>&rarr;</span>
        </button>
      </div>

      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls
          disableButtonsControls
          autoPlay
        />
      </div>

      <div>
        <CardOverview />
      </div>
    </div>
  );
};

export default HeroSection4;
