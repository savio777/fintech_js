import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const routerLoggedOut = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const routerLoggedIn = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function Routes() {
  const { token } = useSelector((state: RootState) => state.session);

  return <RouterProvider router={!token ? routerLoggedOut : routerLoggedIn} />;
}
