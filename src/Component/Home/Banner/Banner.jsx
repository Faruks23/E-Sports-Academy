import React, { useEffect } from 'react';
import './Banner.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {

  useEffect(() => {
   
    AOS.init();
 },[])

  return (
    <div className="w-full md:h-[100vh] show_bg_2 h-[450px]">
      <div className=" flex justify-center flex-col  md:mt-20 mt-[48px]  items-center md:p-20 gap-2   cursor-pointer">
        <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="font-serif uppercase text-[50px] md:text-[150px] font-bold text-green-400 shadow-lg "
        >
          All in one{" "}
        </h1>
        <h1
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="text-2xl font-bold font-serif capitalize custom-f"
        >
          Let's make a new{" "}
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="font-bold font-serif text-xl uppercase border border-green-400  md:p-2 rounded-md w-[50%] text-center  mt-5"
        >
          world
        </h1>
      </div>
      <div className="slide mt-10 md:mt-0 w-full h-[100px] grid grid-cols-2 md:grid-cols-4 items-center gap-5 cursor-pointer">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="step-card uppercase p-5 shadow-md bg-transparent text-center border border-green-400 rounded-t-xl"
        >
          Play
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="step-card uppercase p-5 shadow-md bg-transparent text-center border border-green-400 rounded-t-xl"
        >
          Buy
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="step-card uppercase p-5 shadow-md bg-transparent text-center border border-green-400 rounded-t-xl"
        >
          Stream
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="step-card uppercase p-5 shadow-md bg-transparent text-center border border-green-400 rounded-t-xl"
        >
          Host
        </div>
      </div>
    </div>
  );
};

export default Banner;