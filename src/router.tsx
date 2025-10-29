import { createBrowserRouter } from "react-router";
import LoginExample1 from "./examples/auth/login-1";
import Layout from "./layout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [{ path: "login-1", Component: LoginExample1 }],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
