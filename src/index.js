import { rootShouldForwardProp } from "@mui/material/styles/styled";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import TodoList from "./Pages/TodoList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "todoList",
        element: <TodoList />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={router} />);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
