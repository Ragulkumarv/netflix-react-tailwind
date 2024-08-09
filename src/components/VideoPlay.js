import { useSelector } from "react-redux";
import MovieTrailer from "../hooks/movieTrailer";
import {
  Youtube_Embed_BasePath,
  Youtube_Embed_Controls,
} from "../utils/constants";

const VideoPlay = ({ movieId }) => {
  const trailerList = useSelector((store) => store.movies?.movieTrailer);
  MovieTrailer(movieId);

  return (
    <section className="w-screen">
      <iframe
        src={
          Youtube_Embed_BasePath +
          trailerList?.key +
          Youtube_Embed_Controls +
          "&playlist=" +
          trailerList?.key
        }
        title="Inside Out 2 | Official Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-screen h-screen scale-125"
      ></iframe>
    </section>
  );
};

export default VideoPlay;
