import { createBrowserRouter } from "react-router";
import DynamicRegisterExample from "./examples/auth/dynamic-register-example";
import ForgetPasswordExample from "./examples/auth/forget-password";
import LoginExample from "./examples/auth/login";
import ProfileExample from "./examples/auth/profile";
import RegisterExample from "./examples/auth/register";
import ResetPasswordExample from "./examples/auth/reset-password";
import Layout from "./layout";

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
        {
          path: "dynamic-register",
          Component: DynamicRegisterExample,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
