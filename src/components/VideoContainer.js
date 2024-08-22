import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoPlay from "./VideoPlay";
import { useMemo } from "react";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies?.topRatedMovies);

  const movie = useMemo(() => {
    if (movies === null) {
      return;
    }

    return movies[10];
  }, [movies]);

  if (!movie) {
    return;
  }

  const { id, original_title, overview, backdrop_path } = movie;

  return (
    <div className="relative h-[calc(100vh+100px)] overflow-hidden">
      {movie && (
        <>
          <VideoPlay movieId={id} />
          <VideoBackground
            title={original_title}
            overview={overview}
            titleLogo={backdrop_path}
          />
        </>
      )}
    </div>
  );
};

export default VideoContainer;
