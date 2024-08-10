import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options, Popular_API_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const PopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    popularMovies();
  }, []);
  const popularMovies = async () => {
    const url = await fetch(Popular_API_URL, API_Options);

    const data = await url.json();
    dispatch(addPopularMovies(data.results));
  };
};

export default PopularMovies;
