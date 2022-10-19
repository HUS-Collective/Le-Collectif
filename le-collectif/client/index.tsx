import React from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./containers/Details";
import SignupLoginPage from "./containers/SignupLoginPage";
import Cart from "./containers/Cart";


const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
// add the Browser Router and add Routes (a container for routes)
root.render(
    // BrowserRouter connects to the browser URL
<BrowserRouter>
        {/* Routes indicated that there are going to be multiple routes to look for */}
    <Routes>
      {/* now if we indicate / (the root component) we will go to the App component */}
        <Route path={"/"} element={<App/>}/>
        <Route path={"/details"} element={<Details />}/>
        <Route path={"/signUp"} element={<SignupLoginPage />}/>
        <Route path={"/cart"} element={<Cart />}/>
    </Routes>
</BrowserRouter>
);