import React, { Fragment } from "react";
import LandingPage from "./LandingPage";
import GalleryPage from "./GalleryPage";
import Details from "./Details";
import Cart from "./Cart";
import Nav from "./Nav";
import '../styles/main.css';

function App() {

  return (
    <Fragment>
      <Nav />
      <LandingPage />
      <GalleryPage />
    </Fragment>
  );
}
export default App;
