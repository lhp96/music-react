import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";
import Error from "../application/404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/recommend",
        element: <Recommend />,
      },
      {
        path: "/rand",
        element: <Rank />,
      },
      {
        path: "/singers",
        element: <Singers />,
      },
    ],
  },
]);

const routes = () => {
  return <RouterProvider router={router} />;
};

export default routes;
