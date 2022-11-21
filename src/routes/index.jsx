import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "../views/Home";
import Recommend from "../views/Recommend";
import Singers from "../views/Singers";
import Rank from "../views/Rank";
import Error from "../views/404";
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
        path: "/rank",
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
