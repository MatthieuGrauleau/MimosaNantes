// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "./assets/img/logo.png";
import "./sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Helmet>
      <title>Mimosa • Brunch</title>
      <link rel="icon" href={logo} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lustria&family=Montserrat:wght@100;300;400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </React.StrictMode>
);
