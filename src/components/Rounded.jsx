import React, { useEffect, useState } from "react";

const Rounded = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const counter = (id, start, end, duration) => {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const step = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      switch (id) {
        case "count1":
          setCount1(current);
          break;
        case "count2":
          setCount2(current);
          break;
        case "count3":
          setCount3(current);
          break;
        case "count4":
          setCount4(current);
          break;
        default:
          break;
      }
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  };

  useEffect(() => {
    counter("count1", 5000, 6000, 2000);
    counter("count2", 1500, 2000, 3000);
    counter("count3", 100, 500, 3000);
    counter("count4", 3800, 4000, 3000);
  }, []);

  return (
    <>
      <div className="w-full lg:w-9/12 bg-red-700 lg:rounded-full rounded-2xl lg:flex lg:mx-auto justify-around py-16 lg:px-9 relative bottom-28 grid grid-cols-2 lg:gap-y-2 text-white">
        <div className="single_counter text-center">
          <div className="p-3">
            <div className="lg:text-5xl text-2xl font-bold mb-3">{count1}+</div>
            <h5 className="text-xl font-semibold">Elders Empowered</h5>
          </div>
        </div>
        <div className="single_counter text-center">
          <div className="p-3">
            <div className="lg:text-5xl text-2xl font-bold mb-3">Pan India</div>
            <h5 className="text-xl font-semibold">Operated</h5>
          </div>
        </div>
        <div className="single_counter text-center">
          <div className="p-3">
            <div className="lg:text-5xl text-2xl font-bold mb-3">{count3}+</div>
            <h5 className="text-xl font-semibold">Lives Saved</h5>
          </div>
        </div>
        <div className="single_counter text-center">
          <div className="p-3">
            <div className="lg:text-5xl text-2xl font-bold mb-3">{count4}+</div>
            <h5 className="text-xl font-semibold">Events Organised</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rounded;
