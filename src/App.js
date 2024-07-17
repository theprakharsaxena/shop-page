import "./App.css";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
