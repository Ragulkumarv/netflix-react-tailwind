const VideoBackground = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 w-2/5 items-center flex flex-col justify-center  p-8">
      <h1 className="text-white text-5xl">{title}</h1>
      <h2 className="text-white text-lg">{overview}</h2>
      <img src="path/to/your/logo.png" alt="Logo" className="w-48 mb-8" />
      <div className="flex space-x-4">
        <button className="bg-white text-black flex items-center py-2 px-4 rounded hover:bg-gray-300 transition duration-300">
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 112 0v2a1 1 0 11-2 0V9zm1 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-50 text-white flex items-center py-2 px-4 rounded hover:bg-opacity-75 transition duration-300">
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 112 0v2a1 1 0 11-2 0V9zm1 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              clipRule="evenodd"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;
