import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import GptSearch from "./GptSearch";

const Body = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <Error />,
    },
    {
      path: "/gpt-search",
      element: <GptSearch />,
      errorElement: <Error />,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default Body;
