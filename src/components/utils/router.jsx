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
        // loader: () => fetch("/service.json"),
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
      // {
      //   path: "/contribute",
      //   element: <Contribute></Contribute>
      // }
      // {
      //   path: "/details",
      //   element: <CheckOut></CheckOut>,
      // },
      // {
      //   path: "/appointmentModal",
      //   element:  <AppointmentModal></AppointmentModal>
      // },
      //   {
      //     path: "/details/:id",
      //     element: <Details></Details>,
      //     loader: async ({ params }) => {
      //       try {
      //         console.log("Received ID from URL:", params.id);

      //         const res = await fetch("/service.json"); // Fetch data
      //         if (!res.ok) {
      //           throw new Error("Failed to load data");
      //         }

      //         const data = await res.json();
      //         console.log("Fetched Data:", data);

      //         // Ensure id types match (string or number)
      //         const singleData = data.find((d) => String(d.id) === params.id);

      //         console.log("Found Data:", singleData);

      //         if (!singleData) {
      //           throw new Response("Data not found", { status: 404 });
      //         }

      //         return singleData;
      //       } catch (error) {
      //         console.error("Error:", error);
      //         throw new Response("Internal Server Error", { status: 500 });
      //       }
      //     }

      //   },
    ],
  },
]);
export default router;
