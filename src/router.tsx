import { createBrowserRouter } from "react-router";
import ForgetPasswordExample from "./examples/auth/forget-password";
import LoginExample from "./examples/auth/login";
import ProfileExample from "./examples/auth/profile";
import RegisterExample from "./examples/auth/register";
import Layout from "./layout";
import ResetPasswordExample from "./examples/auth/reset-password";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { path: "login", Component: LoginExample },
        {
          path: "register",
          Component: RegisterExample,
        },
        {
          path: "profile",
          Component: ProfileExample,
        },
        {
          path: "forget-password",
          Component: ForgetPasswordExample,
        },
        {
          path: "reset-password",
          Component: ResetPasswordExample,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
