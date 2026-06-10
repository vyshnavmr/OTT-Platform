import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import WatchLater from "./WatchLater";
import History from "./History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/moviedetails/:id",
    element: <MovieDetails />,
  },
  {  path: "/watchlater",
    element: <WatchLater />,
  },
  {  path: "/history",
    element: <History />,
  },
  
]);

export default router;