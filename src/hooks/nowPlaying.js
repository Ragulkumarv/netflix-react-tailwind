import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options, NowPlaying_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const NowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    nowPlayingMovies();
  }, []);
  const nowPlayingMovies = async () => {
    const url = await fetch(NowPlaying_API_URL, API_Options);

    const data = await url.json();
    dispatch(addNowPlayingMovies(data.results));
    console.log(data, "NowPlayingMovies api data");
  };
};

export default NowPlayingMovies;
