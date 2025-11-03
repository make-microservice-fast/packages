import { createBrowserRouter } from "react-router";
import LoginExample from "./examples/auth/login";
import ProfileExample from "./examples/auth/profile";
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
        {
          path: "profile",
          Component: ProfileExample,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
