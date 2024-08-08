import { useSelector } from "react-redux";
import MovieTrailer from "../hooks/movieTrailer";

const VideoPlay = ({ movieId }) => {
  const trailerList = useSelector((store) => store.movies?.movieTrailer);
  MovieTrailer(movieId);

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
