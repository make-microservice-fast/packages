import { createBrowserRouter } from "react-router";
import LoginExample1 from "./examples/auth/login";
import Register from "./examples/auth/register";
import Layout from "./layout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { path: "login-1", Component: LoginExample1 },
        {
          path: "register",
          Component: Register,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
