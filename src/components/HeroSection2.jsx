import VideoSection from "./VideoSection";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const HeroSection2 = () => {
  const data = [
    {
      video:
        "https://videos.pexels.com/video-files/8381411/8381411-uhd_3840_2160_25fps.mp4",
      heading: "More Heath",
      subheading:
        "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha. ",
    },
    {
      video:
        "https://videos.pexels.com/video-files/3195444/3195444-uhd_3840_2160_25fps.mp4",
      heading: "More Busy",
      subheading:
        " 1 out of 4 elders in India experience fall.  We know crisis can strike anytime.  That's we're prepared 24*7!",
    },
    {
      video:
        "https://videos.pexels.com/video-files/9573573/9573573-uhd_4096_2160_25fps.mp4",
      heading: "More Heath",
      subheading:
        "3 out of 4 seniors suffer from a chronic condition. Give your parents access to better healthcare with Emoha. ",
    },
    {
      video:
        "http://res.cloudinary.com/dxbreulao/video/upload/v1712313359/ylccayvojbk4xdazxvfi.mp4",
      heading: "More Busy",
      subheading:
        " 1 out of 4 elders in India experience fall.  We know crisis can strike anytime.  That's we're prepared 24*7!",
    },
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1.5 },
  };
  const items = data.map(({ video, heading, subheading }) => (
    <VideoSection video={video} heading={heading} subheading={subheading} />
  ));

  return (
    <div className="   mx-auto flex flex-col">
      <div className=" -my-16">
        <h1 className=" lg:text-4xl text-xl text-start pl-2 lg:text-center text-black font-medium ">
          Help your parents age magnificently with <br /> India's most trusted
          senior care brand
        </h1>
      </div>

      <div className=" mt-16 flex w-full h-[600px] overflow-hidden">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls
        />
      </div>
    </div>
  );
};

export default HeroSection2;
