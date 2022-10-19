import React from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./containers/Details";
import LandingPage from "./containers/LandingPage";
import Cart from "./containers/Cart";
import GalleryPage from "./containers/GalleryPage";
import Credential from "./containers/Credential";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/details" element={<Details />}></Route>
            <Route path="/landing" element={<LandingPage />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/gallery" element={<GalleryPage />}></Route>
            <Route path="/credentials" element={<Credential />}></Route>
        </Routes>
    </BrowserRouter>
);