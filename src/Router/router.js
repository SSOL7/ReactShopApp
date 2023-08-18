import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import Products from "../Products";
import Test from "../Test";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/products',
      element: <Products />
    },
    {
      path: '/test',
      element: <Test />
    }
]);

export default router;