import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import WatchLater from "./WatchLater";
import History from "./History";
import ChangePassword from "./ChangePassword";
import SearchMovies from "./SearchMovies";

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
  {  path: "/search/:query",
    element: <SearchMovies />,
  },
  {  path: "/changepassword",
    element: <ChangePassword />,
  },
  
]);

export default router;