import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./router";
import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
