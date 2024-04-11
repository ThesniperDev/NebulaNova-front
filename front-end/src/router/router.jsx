import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Games from "../pages/Games/Games";
import Collection from "../pages/Collection/Collection";
import Lists from "../pages/Lists/Lists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "user/collection",
        element: <Collection />,
      },
      {
        path: "/user/lists",
        element: <Lists />,
        children: [
          {
            path: ":listId"
          }
        ]
      },
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
        return redirect("/");
      }
    },
  },
]);

export default router;
