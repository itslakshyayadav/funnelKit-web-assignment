import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ProductDetails from "./product-details";
import Home from "./home";
import Cart from "./cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;
