import React, { Fragment } from "react";
import LandingPage from "./LandingPage";
import GalleryPage from "./GalleryPage";
import Details from "./Details";
import Cart from "./Cart";
// import Page from "./Page";

function App() {

  return (
    <Fragment>
      <LandingPage />
      <GalleryPage />
      <Details />
      <Cart />
    </Fragment>
  );
}
export default App;
