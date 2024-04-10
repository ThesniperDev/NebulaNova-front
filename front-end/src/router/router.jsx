import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home/Home";
import Review from "../pages/Review/Review"
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Games from "../pages/Games/Games";
import Collection from "../pages/Collection/Collection";
import UserReview from "../pages/UserReview/UserReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      }, {
        path: "/reviews",
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
    element: <Login />,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return null
      } else {
        return redirect('/user')
      }
    },
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "collection",
        element: <Collection />
      },
      {
        path: "review/:idGame",
        element: <UserReview/>
      }
    ]
  }
]);

export default router;
