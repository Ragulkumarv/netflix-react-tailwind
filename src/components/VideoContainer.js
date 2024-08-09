import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoPlay from "./VideoPlay";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies?.topRatedMovies);

  if (movies === null) {
    return;
  }

  const movieId = movies[12];

  const { id, original_title, overview, backdrop_path } = movieId;

  return (
    <div className="relative h-screen overflow-hidden">
      <VideoPlay movieId={id} />
      <VideoBackground
        title={original_title}
        overview={overview}
        titleLogo={backdrop_path}
      />
    </div>
  );
};

export default VideoContainer;
