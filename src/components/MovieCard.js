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
      <div className="">
        <section
          className={`${
            marginTop ? "mt-[-200px] relative z-0" : "relative z-0 pt-8"
          }`}
        >
          <h3 className="text-white mb-3 px-[60px]">{title}</h3>
          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              767: {
                slidesPerView: 4,
                spaceBetween: 10,
                slidesPerGroup: 3,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
                slidesPerGroup: 4,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 10,
                slidesPerGroup: 5,
              },
            }}
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
      </div>
    </>
  );
};

export default MovieCard;
