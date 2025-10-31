import { createBrowserRouter } from "react-router";
import LoginExample from "./examples/auth/login";
import RegisterExample from "./examples/auth/register";
import Layout from "./layout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { path: "login-1", Component: LoginExample },
        {
          path: "register",
          Component: RegisterExample,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
