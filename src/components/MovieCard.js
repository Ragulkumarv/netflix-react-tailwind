import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { TMDB_IMG_Path } from "../utils/constants";

const MovieCard = ({ movies, title, marginTop }) => {
  return (
    <>
      <div className=" bg-black">
        <section className={`${marginTop && "mt-[-200px] relative z-20"}`}>
          <h3 className="text-white mb-3 px-[60px]">{title}</h3>
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={8}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper  !px-[60px] "
          >
            {movies?.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={TMDB_IMG_Path + item.poster_path}
                  alt={item.title}
                  className="!h-[294px] !w-[294px] rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* <section className="bg-black">
          <h3 className="text-white mb-3 px-[60px] pt-[55px]">
            Top Rated Movies
          </h3>
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={8}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper bg-black !px-[60px]"
          >
            {movies?.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={TMDB_IMG_Path + item.poster_path}
                  alt={item.title}
                  className="!h-[294px] !w-[294px] rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section> */}
      </div>
    </>
  );
};

export default MovieCard;
