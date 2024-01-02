import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostPage from "./pages/PostPage.jsx";
import SettingPage from "./pages/SettingPage.jsx";
import WritePage from "./pages/WritePage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/settings", element: <SettingPage /> },
  { path: "/write", element: <WritePage /> },
  { path: "posts/1", element: <PostPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
