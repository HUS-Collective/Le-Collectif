import React from "react";
import Title from "../components/Title";
import DetailsContainer from "./DetailsContainer";
import ImageContainer from "./ImageContainer";
import DATA from '../models/mockdata';
import PhotoProps from "../types/photoProps";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";


// this will need props so it renders a specific image
function Details(props: PhotoProps) {
  // make this dynamic
  const staticData = DATA.PHOTOS[0];

  const location = useLocation();
  const locationState = location.state;
  console.log(location.state);

  return (
    <div className="image-and-details">
      <div>
        <Nav />
      </div>
      <Title
        photoName={locationState ? locationState.photoName : staticData.photoName}
        artistName={locationState ? locationState.artistName : staticData.artistName} />
      <ImageContainer
        imgPath={locationState ? locationState.imgPath : staticData.imgPath}
        photoName={locationState ? locationState.photoName : staticData.photoName}
        photoId={locationState ? `${locationState.photoId}` : `${staticData.photoId}`}
        key={locationState ? locationState.photoId : staticData.photoId}
        componentName={'details'} />
      <DetailsContainer
        imgPath={locationState ? locationState.imgPath : staticData.imgPath}
        photoName={locationState ? locationState.photoName : staticData.photoName}
        price={locationState ? locationState.price : staticData.price}
        photoId={locationState ? `${locationState.photoId}` : `${staticData.photoId}`} />
      <Link to="/cart" state={{
        photoName: locationState ? locationState.photoName : staticData.photoName,
        artistName: locationState ? locationState.artistName : staticData.artistName,
        imgPath: locationState ? locationState.imgPath : staticData.imgPath,
        price: locationState ? locationState.price : staticData.price,
      }}><button>Cart</button></Link>
    </div>
  );
}
export default Details;