import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options, TOP_Rated_API_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    topRatedMovies();
  }, []);
  const topRatedMovies = async () => {
    const url = await fetch(TOP_Rated_API_URL, API_Options);

    const data = await url.json();
    dispatch(addTopRatedMovies(data.results));
    console.log(data, "TopRatedMovies api data");
  };
};

export default TopRatedMovies;
