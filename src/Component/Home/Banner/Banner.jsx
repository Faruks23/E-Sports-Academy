import React, { useEffect } from 'react';
import './Banner.css'
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FreeFireImage from '../../../assets/wallpapersden.com_garena-free-fire-4k-season-2023_1920x1080.jpg'
import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ReferFriend from '../ReferFriend/ReferFriend';



const Banner = () => {

  useEffect(() => {
   
    AOS.init();
 },[])

  return (
    <div className="w-full md:h-[100vh] show_bg_2 h-[450px]">
      <div className=" flex justify-center flex-col  md:mt-10 mt-[48px]  items-center md:p-20 gap-2  cursor-pointer ">
        <div className="main bg-[#1B234D] w-full h-[350px] md:h-[500px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="banner-img" src={FreeFireImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner-img" src={FreeFireImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner-img" src={FreeFireImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner-img" src={FreeFireImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner-img" src={FreeFireImage} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="refer ">
          <ReferFriend></ReferFriend>
        </div>
      </div>
    </div>
  );
};

export default Banner;