import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Review from "../components/Review/Review"
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Games from "../pages/Games/Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      }, {
        path: "/review",
        element: <Review />,
      },
      {
        path: "games",
        element: <Games />
      }
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  }, 
  {
    path: "/login",
    element: <Login />
  }
]);

export default router;
