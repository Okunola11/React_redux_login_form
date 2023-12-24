import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
