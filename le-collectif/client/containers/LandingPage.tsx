import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function LandingPage() {

    return (
        <div className="page-container" id='landing-page'>
            <Nav />
            <h1>Landing Page</h1>
            < Carousel />
            <Link to={"/gallery"}><button>See Gallery</button></Link>
        </div>
    );
}
export default LandingPage;