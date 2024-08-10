import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieResults = () => {
  const moviesFound = useSelector((store) => store.movies.searchedMovie);
  return (
    <>
      {moviesFound && (
        <section className=" pb-14">
          <MovieCard movies={moviesFound} title={""} marginTop={false} />
        </section>
      )}
    </>
  );
};

export default MovieResults;
