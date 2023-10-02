import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-20 bg-[#1B234D] container mx-auto p-10">
      <h1 className="uppercase text-2xl md:4xl font-bold mb-5">
        Trusted Review
      </h1>

      {/* <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <SwiperSlide>
            <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
              <div className="bg-[#1B234D]  ">
                <div className="flex flex-col items-center justify-center  gap-3 ">
                  <img
                    className="w-16 h-16 mt-2 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                    alt=""
                  />
                  <p>4.5</p>
                </div>
                <div className=" bg-[#141B3D]">
                  <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore omnis, dolores, magnam nostrum{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
              <div className="bg-[#1B234D]  ">
                <div className="flex flex-col items-center justify-center  gap-3 ">
                  <img
                    className="w-16 h-16 mt-2 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                    alt=""
                  />
                  <p>4.5</p>
                </div>
                <div className=" bg-[#141B3D]">
                  <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore omnis, dolores, magnam nostrum{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
              <div className="bg-[#1B234D]  ">
                <div className="flex flex-col items-center justify-center  gap-3 ">
                  <img
                    className="w-16 h-16 mt-2 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                    alt=""
                  />
                  <p>4.5</p>
                </div>
                <div className=" bg-[#141B3D]">
                  <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore omnis, dolores, magnam nostrum{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
              <div className="bg-[#1B234D]  ">
                <div className="flex flex-col items-center justify-center  gap-3 ">
                  <img
                    className="w-16 h-16 mt-2 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                    alt=""
                  />
                  <p>4.5</p>
                </div>
                <div className=" bg-[#141B3D]">
                  <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore omnis, dolores, magnam nostrum{" "}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
            <div className="bg-[#1B234D]  ">
              <div className="flex flex-col items-center justify-center  gap-3 ">
                <img
                  className="w-16 h-16 mt-2 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                  alt=""
                />
                <p>4.5</p>
              </div>
              <div className=" bg-[#141B3D]">
                <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore omnis, dolores, magnam nostrum{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
            <div className="bg-[#1B234D]  ">
              <div className="flex flex-col items-center justify-center  gap-3 ">
                <img
                  className="w-16 h-16 mt-2 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                  alt=""
                />
                <p>4.5</p>
              </div>
              <div className=" bg-[#141B3D]">
                <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore omnis, dolores, magnam nostrum{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
            <div className="bg-[#1B234D]  ">
              <div className="flex flex-col items-center justify-center  gap-3 ">
                <img
                  className="w-16 h-16 mt-2 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                  alt=""
                />
                <p>4.5</p>
              </div>
              <div className=" bg-[#141B3D]">
                <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore omnis, dolores, magnam nostrum{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
            <div className="bg-[#1B234D]  ">
              <div className="flex flex-col items-center justify-center  gap-3 ">
                <img
                  className="w-16 h-16 mt-2 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                  alt=""
                />
                <p>4.5</p>
              </div>
              <div className=" bg-[#141B3D]">
                <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore omnis, dolores, magnam nostrum{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
            <div className="bg-[#1B234D]  ">
              <div className="flex flex-col items-center justify-center  gap-3 ">
                <img
                  className="w-16 h-16 mt-2 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                  alt=""
                />
                <p>4.5</p>
              </div>
              <div className=" bg-[#141B3D]">
                <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore omnis, dolores, magnam nostrum{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        
        <div className="bg-[#141B3D] rounded-lg shadow-lg p-4">
          <div className="bg-[#1B234D]  ">
            <div className="flex flex-col items-center justify-center  gap-3 ">
              <img
                className="w-16 h-16 mt-2 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZQ6jqt34s_JHjk935dfyQHEdtAuVeCMqCy3m2-XIjqmj-vsWljxqbmSeU3Ea7kAPKwk&usqp=CAU"
                alt=""
              />
              <p>4.5</p>
            </div>
            <div className=" bg-[#141B3D]">
              <p className=" text-sm mb-2 leading-7 mt-4 p-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                omnis, dolores, magnam nostrum{" "}
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Review;