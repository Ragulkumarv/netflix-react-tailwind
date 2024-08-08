import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options, Upcoming_API_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    upcomingMovies();
  }, []);
  const upcomingMovies = async () => {
    const url = await fetch(Upcoming_API_URL, API_Options);

    const data = await url.json();
    dispatch(addUpcomingMovies(data.results));
    console.log(data, "UpcomingMovies api data");
  };
};

export default UpcomingMovies;
