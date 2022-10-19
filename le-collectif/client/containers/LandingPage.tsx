import React from "react";
import Carousel from "./Carousel";

function LandingPage() {

  return (
    <div className="page-container" id='landing-page'>
      < Carousel />
      <div id='landing-page-btn-container'>
        <p>browse btn</p>
      </div>
    </div>
  );
}
export default LandingPage;