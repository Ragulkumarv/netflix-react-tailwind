import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const CarouselContainer = () => {
  const topMovieList = useSelector((store) => store.movies.topRatedMovies);
  const popularMovieList = useSelector((store) => store.movies.popularMovies);
  const nowPlayingMovieList = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const upcomingMovieList = useSelector((store) => store.movies.upcomingMovies);
  return (
    <>
      {topMovieList !== null && popularMovieList !== null && (
        <>
          <MovieCard
            movies={nowPlayingMovieList}
            title={"Now Playing"}
            marginTop={true}
          />
          <MovieCard
            movies={popularMovieList}
            title={"Popular"}
            marginTop={false}
          />
          <MovieCard
            movies={topMovieList}
            title={"Top Rated"}
            marginTop={false}
          />
          <MovieCard
            movies={upcomingMovieList}
            title={"Upcoming"}
            marginTop={false}
          />
        </>
      )}
    </>
  );
};

export default CarouselContainer;
