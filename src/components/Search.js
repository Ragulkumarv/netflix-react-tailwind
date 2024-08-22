import { useRef, useState } from "react";
import {
  API_Options,
  baseBGImage,
  Search_Movies_API_BaseURL,
  Search_Movies_API_Params,
} from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addSearchedMovie } from "../utils/moviesSlice";
import MovieResults from "./MovieResults";

const Search = () => {
  const inputVal = useRef(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleGPTSearch = async () => {
    const url = await fetch(
      Search_Movies_API_BaseURL +
        inputVal.current?.value +
        Search_Movies_API_Params,
      API_Options
    );

    const resp = await url.json();
    dispatch(addSearchedMovie(resp?.results));
    setDataFetched(true);
    setSearchTerm(inputVal.current?.value);
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-cover bg-center overflow-hidden">
        <div className="absolute">
          <img
            src={baseBGImage}
            alt="logo"
            className="w-screen h-screen xl:w-auto xl:h-auto"
          />
        </div>
        <section className="relative z-[3] p-10">
          <form
            className="flex justify-center items-center text-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={inputVal}
              type="text"
              placeholder="What's in your mind"
              className="px-[30px] py-[10px] rounded-md w-[220px] md:w-[600px] focus:outline-none"
              onChange={debounce(handleGPTSearch, 500)}
            />
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-md px-[30px] py-[10px]"
              onClick={() => handleGPTSearch()}
            >
              Search
            </button>
          </form>
        </section>
        {dataFetched && (
          <section className="relative z-[3]">
            <div className="font-semibold text-white text-4xl pl-[60px]">
              Results based on {searchTerm}
            </div>
            <MovieResults />
          </section>
        )}
      </div>
    </>
  );
};

export default Search;
