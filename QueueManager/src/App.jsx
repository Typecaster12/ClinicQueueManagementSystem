import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RegPage from "./Components/RegPage";
import AppLayout from "./Layout/AppLayout";
import ErrorPage from "./UI/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RegPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
