import {FC} from 'react';
import React from 'react';
import PhotoProps from '../types/photoProps';
import { Link } from 'react-router-dom';
// import the link
// wrap the link around whatever you're clicking on
// add "to" then where you are going
// add "state" so you can add props

const ImageContainer: React.FC <PhotoProps> = (props) => {

  return (
    <div className={`img-container-${props.componentName}`} id={`${props.componentName}-photo-${props.photoId}`}>
      <Link to={"/details"} state={props}><img src={props.imgPath} id={`${props.photoId}`}></img></Link>
    </div>
  )
}

export default ImageContainer;