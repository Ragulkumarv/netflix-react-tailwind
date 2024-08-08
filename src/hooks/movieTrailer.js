import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const MovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    movieTrailer();
  }, []);
  const movieTrailer = async () => {
    const url = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_Options
    );
    const data = await url.json();
    console.log(data, "video");

    const filterTrailer = data?.results?.filter(
      (movie) => movie.type.toLowerCase() === "trailer"
    );
    const trailer =
      filterTrailer?.length > 0 ? filterTrailer[0] : data?.results[0];
    dispatch(addMovieTrailer(trailer));
  };
};

export default MovieTrailer;
