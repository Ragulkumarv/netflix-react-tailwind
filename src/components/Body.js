import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Search from "./Search";

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
      path: "/movie-search",
      element: <Search />,
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
