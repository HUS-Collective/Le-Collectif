import React from "react";
import Title from "../components/Title";
import DetailsContainer from "./DetailsContainer";
import ImageContainer from "./ImageContainer";
import PhotoProps from "../types/photoProps";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'
import Nav from "./Nav";
import { ReactFragment } from "react";

// in order to access the state passed down from the React Router link, we need useLocation

// this will need props so it renders a specific image
function Details(props: PhotoProps) {

    const location = useLocation();
    const state = location.state;
  
    useEffect(()=> {
    }, [location])

  return (
    <div className="details-page-container">
      < Nav />
      <Title 
        photoName={state.photoName} 
        artistName={state.artistName} />
      <div id='image-and-details-container'>
        <ImageContainer 
          imgPath={state.imgPath}
          photoName={state.photoName}
          photoId={`${state.photoId}`}
          key={state.photoId} 
          componentName={'details'} />
        <DetailsContainer 
          imgPath={state.imgPath}
          photoName={state.photoName}
          photoId={`${state.photoId}`}
          price={state.price} />
      </div>
    </div>
  );
}
export default Details;