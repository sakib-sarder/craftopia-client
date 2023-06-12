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
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import DashboardHome from "../Components/Dashboard/DashboardHome";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass";
import MyEnrolledClasses from "../Pages/Dashboard/Student/MyEnrolledClasses";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard/Student/Payment";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";
import InstructorRoute from "./InstructorRoute";

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
        element: <Instructors />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/add-a-class",
        element: (
          <InstructorRoute>
            <AddAClass />
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/my-classes",
        element: <MyClasses />,
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/manage-classes",
        element: <ManageClasses />,
      },
      {
        path: "/dashboard/my-selected-class",
        element: <MySelectedClass />,
      },
      {
        path: "/dashboard/my-enrolled-class",
        element: <MyEnrolledClasses />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
