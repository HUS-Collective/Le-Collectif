import React from "react";
import Title from "../components/Title";
import DetailsContainer from "./DetailsContainer";
import ImageContainer from "./ImageContainer";
import DATA from '../models/mockdata';

// this will need props so it renders a specific image
function Details() {
    // make this dynamic
    const staticData = DATA.PHOTOS[0];
  return (
    <div className="image-and-details">
      <Title 
        photoName={staticData.photoName} 
        artistName={staticData.artistName} />
      <ImageContainer 
        imgPath={staticData.imgPath}
        photoName={staticData.photoName}
        photoId={`${staticData.photoId}`}
        key={staticData.photoId} />
      <DetailsContainer 
        imgPath={staticData.imgPath}
        photoName={staticData.photoName}
        price={staticData.price} />
    </div>
  );
}
export default Details;