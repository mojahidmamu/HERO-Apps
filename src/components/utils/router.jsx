import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Apps from "../../components/Apps/Apps";
import Installation from "../Installation/Installation";
import AppDetails from "../AppDetails/AppDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import ErrorPage from "../ErrorPage/ErrorPage ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/apps/:id",
        element: <AppDetails></AppDetails>
      },
      <ToastContainer position="top-right" />
      
    ],
  },
]);
export default router;
