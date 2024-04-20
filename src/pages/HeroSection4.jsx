import React, { useState } from "react";
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
      ima: `${im2}`,
      heading: "Elder tech",
      img: "https://emoha.com/_next/image?url=https%3A%2F%2Fd2ts1vii79fe9b.cloudfront.net%2Faws_gallery%2F20ac13c9-4535-42b2-8cc6-f2b76cb880e4_Eldertech.webp&w=1920&q=75",
      text: "Security sensors, smart entertainment devices and more for a hassle-free life. Avail immediate tech assistance, wearable SOS button, and more. Get guidance on how to use the new devices.",
    },

    {
      ima: `${im4}`,
      heading: "Health support ",
      img: "https://emoha.com/_next/image?url=https%3A%2F%2Fd2ts1vii79fe9b.cloudfront.net%2Faws_gallery%2Fb9b67455-5798-4e16-8070-ab54e9582165_Healthsupport.webp&w=1920&q=75",
      text: "Get 24/7 emergency medical support. On-call emergency doctors. Help Desk designed for seniors.",
    },
    {
      heading: "Call Support ",
      ima: `${im5}`,
      img: "https://emoha.com/_next/image?url=https%3A%2F%2Fd2ts1vii79fe9b.cloudfront.net%2Faws_gallery%2Fdce84c97-a6db-4796-b91d-c35b973d9f5e_Vaccination.webp&w=1920&q=75",
      text: "Vaccination at home administered by trained staff. Nutrition programs by expert dieticians. Prompt ambulance & hospitalisation services..",
    },
    {
      ima: `${im1}`,
      heading: "Medical equipment",
      img: "https://emoha.com/_next/image?url=https%3A%2F%2Fd2ts1vii79fe9b.cloudfront.net%2Faws_gallery%2F9ac6371f-3eef-48b3-9548-470a07edd20e_Medicaldevices.webp&w=1920&q=75",
      text: "Access at-home medical equipment to make elders’ lives easier and safer. Cost-effective devices for on-time medical alerts. Choose from digital thermometers, oxygen cylinders, BP instruments, CPAP & more",
    },
    {
      ima: `${im6}`,
      heading: "Convenience",
      img: "https://emoha.com/_next/image?url=https%3A%2F%2Fd2ts1vii79fe9b.cloudfront.net%2Faws_gallery%2Fee722a02-e982-48d8-9bac-46df8bcb0d0c_Conveniences.webp&w=1920&q=75",
      text: "Simplify the lives of your elders so they can enjoy their golden years to the fullest. Get travel assistance, book cabs, hire drivers, care buddies, banking support & more. All the services are catered by trained and trustworthy professionals.",
    },
  ];

  const [dat, setDat] = useState({});
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const updateData = (heading, img, text, index) => {
    setDat({ heading, img, text });
    setActiveCardIndex(index);
  };

  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 4.4 },
  };

  const items = data.map((data, index) => (
    <Card2
      key={index}
      {...data}
      updateData={() => updateData(data.heading, data.img, data.text, index)}
      isActive={activeCardIndex === index} // Check if this card is active
    />
  ));

  return (
    <div className=" w-10/12 mx-auto flex flex-col gap-y-5 mt-4">
      <div className=" flex justify-between">
        <h1 className=" lg:text-3xl text-xl py-3 px-4 font-bold leading-tight text-gray-900">
          How we help
        </h1>
        <button className="text-xl py-3 px-4 bg-red-700 rounded-lg text-white hover:bg-red-900">
          Viwe all <span>&rarr;</span>
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
        <CardOverview heading={dat.heading} img={dat.img} text={dat.text} />
      </div>
    </div>
  );
};

export default HeroSection4;

HeroSection4.js;
