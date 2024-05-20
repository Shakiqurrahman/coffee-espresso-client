import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage'
import ErrorPage from "../pages/ErrorPage";
import Layout from "./layout";
import AddCoffeePage from "../pages/AddCoffeePage";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffeePage />,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffeePage />,
        loader : ({params}) => fetch(`http://localhost:8000/coffee/${params.id}`),
      },
      {
        path: "/about",
        element: <div>Hello From About Page</div>,
      },
      {
        path: "/contact",
        element: <div>Hello From Contact Page</div>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
