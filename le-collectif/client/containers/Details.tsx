import React from "react";
import Title from "../components/Title";
import DetailsContainer from "./DetailsContainer";
import ImageContainer from "./ImageContainer";
import DATA from '../models/mockdata';
import PhotoProps from "../types/photoProps";


// this will need props so it renders a specific image
function Details(props: PhotoProps) {
    // make this dynamic, replace staticData props
    const staticData = DATA.PHOTOS[0];
    console.log(staticData);  
  return (
    <div className="details-page-container">
      <Title 
        photoName={staticData.photoName} 
        artistName={staticData.artistName} />
      <div id='image-and-details-container'>
        <ImageContainer 
          imgPath={staticData.imgPath}
          photoName={staticData.photoName}
          photoId={`${staticData.photoId}`}
          key={staticData.photoId} 
          componentName={'details'} />
        <DetailsContainer 
          imgPath={staticData.imgPath}
          photoName={staticData.photoName}
          photoId={`${staticData.photoId}`}
          price={staticData.price} />
      </div>
    </div>
  );
}
export default Details;