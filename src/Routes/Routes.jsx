import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AddAClass from "../Pages/Dashboard/Instructor/AddAClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/instructors",
        element: <Instructors/>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/add-a-class",
        element: <AddAClass />,
      },
      {
        path: "/dashboard/my-classes",
        element: <MyClasses />,
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default router;
