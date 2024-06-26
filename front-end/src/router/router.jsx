import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Games from "../pages/Games/Games";
import Collection from "../pages/Collection/Collection";
import Lists from "../pages/Lists/Lists";
import GamesList from "../pages/GamesList/GamesList";
import UserReview from "../pages/UserReview/UserReview"
import Review from "../pages/Review/Review"
import MyReviews from "../pages/MyReviews/MyReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "/reviews",
        element: <Review />,
      },
      {
        path: "user/collection",
        element: <Collection />,
        loader: () => {
          if (localStorage.getItem("token")) {
            return null;
          } else {
            return redirect("/login");
          }
        },
      },
      {
        path: "/user/lists",
        loader: () => {
          if (localStorage.getItem("token")) {
            return null;
          } else {
            return redirect("/login");
          }
        },
        children: [
          {
            path: "",
            element: <Lists />
          },
          {
            path: ":listId",
            element: <GamesList />,
          }
        ]
      },
      {
        path: "user/myreviews",
        element: <MyReviews />,
        loader: () => {
          if (localStorage.getItem("token")) {
            return null;
          } else {
            return redirect("/reviews");
          }
        },
      },
      {
        path: "user/review/:idGame",
        loader: () => {
          if (localStorage.getItem("token")) {
            return null;
          } else {
            return redirect("/login");
          }
        },
        element: <UserReview />
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
      if (!localStorage.getItem("token")) {
        return null;
      } else {
        return redirect("/home");
      }
    },
  },
]);

export default router;
