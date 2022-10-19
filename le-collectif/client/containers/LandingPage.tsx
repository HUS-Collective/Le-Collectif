import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function LandingPage() {

    return (
        <div className="page-container" id='landing-page'>
            <Nav />
            < Carousel />
            <div id='landing-page-btn-container'>
                <Link to={"/gallery"}><button>Gallery</button></Link>
            </div>
        </div>
    );
}
export default LandingPage;