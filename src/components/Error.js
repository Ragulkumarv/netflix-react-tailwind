import { errorBGImage } from "../utils/constants";
import Header from "./Header";

const Error = () => {
  return (
    <>
      <Header />
      <div className="relative h-screen bg-cover bg-center">
        <div className="absolute ">
          <img src={errorBGImage} alt="logo" className="w-dvw h-dvh" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4 w-screen h-screen">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lost your way?
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <a
            href="/browse"
            className="bg-white text-black text-lg font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
          >
            Netflix Home
          </a>
        </div>
      </div>
    </>
  );
};

export default Error;
