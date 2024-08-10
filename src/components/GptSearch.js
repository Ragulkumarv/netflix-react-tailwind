import { useRef } from "react";
import {
  API_Options,
  baseBGImage,
  Search_Movies_API_BaseURL,
  Search_Movies_API_Params,
} from "../utils/constants";
import Header from "./Header";

const GptSearch = () => {
  const inputVal = useRef(null);
  const handleGPTSearch = (e) => {
    initGPT();
  };

  const initGPT = async () => {
    const url = await fetch(
      Search_Movies_API_BaseURL +
        inputVal.current?.value +
        Search_Movies_API_Params,
      API_Options
    );

    const resp = await url?.json();
    console.log(resp, "..............");
    console.log(inputVal.current?.value, "input");
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
        <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <form
            className="flex justify-center items-center text-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={inputVal}
              type="text"
              placeholder="What's in your mind"
              className="px-[49px] py-[20px] rounded-md w-[220px] md:w-[600px] focus:outline-none"
            />
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-md px-[49px] py-[20px]"
              onClick={() => handleGPTSearch()}
            >
              Search
            </button>
          </form>
        </section>
      </div>

      <div></div>
    </>
  );
};

export default GptSearch;
