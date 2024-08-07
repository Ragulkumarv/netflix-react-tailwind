import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const VideoPlay = ({ movieId }) => {
  const dispatch = useDispatch();

  const trailerList = useSelector((store) => store.movies?.movieTrailer);
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

  return (
    <iframe
      src={"https://www.youtube.com/embed/" + trailerList?.key}
      title="Inside Out 2 | Official Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  );
};

export default VideoPlay;
