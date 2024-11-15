import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/home/Home";
import Browse from "./pages/browse/Browse";
import User from "./pages/user/User";
import Admin from "./pages/admin/Admin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { isAdmin, isLoggedIn } from "./lib/checkAcces";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    element: <App />,
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
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/users/:id",
        element: (
          <PrivateRoute accessRule={isLoggedIn}>
            <User />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute accessRule={isAdmin}>
            <Admin />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
