import NowPlayingMovies from "../hooks/nowPlaying";
import PopularMovies from "../hooks/popularMovies";
import TopRatedMovies from "../hooks/topRatedMovies";
import UpcomingMovies from "../hooks/upcoming";
import Header from "./Header";
import VideoContainer from "./VideoContainer";
import CarouselContainer from "./CarouselContainer";

const Browse = () => {
  NowPlayingMovies();
  PopularMovies();
  TopRatedMovies();
  UpcomingMovies();
  return (
    <>
      <Header />
      <VideoContainer />
      <CarouselContainer />
    </>
  );
};

export default Browse;
