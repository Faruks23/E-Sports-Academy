import React from 'react';
import './Banner.css'
const Banner = () => {
  return (
    <div className="w-full md:h-[100vh] show_bg_2 h-[400px]">
      <div className=" flex justify-center flex-col  mt-20  items-center md:p-20 gap-2  pt-10">
        <h1 className="font-serif uppercase text-5xl md:text-[150px] font-bold text-green-400 shadow-lg ">
          All in one{" "}
        </h1>
        <h1 className="text-2xl font-bold font-serif capitalize custom-f">Let's make a new </h1>
        <h1 className='font-bold font-serif text-xl uppercase bg-green-400 p-2 rounded-md text-black w-full text-center'>world</h1>
      </div>
      <div className="slide w-full h-[200px] bg-black">

      </div>
    </div>
  );
};

export default Banner;