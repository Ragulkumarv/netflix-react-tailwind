import { useSelector } from "react-redux";
import MovieTrailer from "../hooks/movieTrailer";

const VideoPlay = ({ movieId }) => {
  const trailerList = useSelector((store) => store.movies?.movieTrailer);
  MovieTrailer(movieId);

  return (
    <section className="w-screen">
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          trailerList?.key +
          "?autoplay=1&loop=1&mute=1"
        }
        title="Inside Out 2 | Official Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-screen aspect-video"
      ></iframe>
    </section>
  );
};

export default VideoPlay;
