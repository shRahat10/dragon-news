import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import NewsDetails from "../pages/News/NewsDetails";
import Login from "../pages/LoginRegister/Login";
import Register from "../pages/LoginRegister/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/news/:id',
          element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router