import TopRatedMovies from "../hooks/topRatedMovies";
import Header from "./Header";
import VideoContainer from "./VideoContainer";

const Browse = () => {
  TopRatedMovies();
  return (
    <>
      <Header />
      <VideoContainer />;
    </>
  );
};

export default Browse;
