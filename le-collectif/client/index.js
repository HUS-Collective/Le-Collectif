import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.js";
//import "./style.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
