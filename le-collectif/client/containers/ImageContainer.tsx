import { FC } from 'react';
import React from 'react';
import PhotoProps from '../types/photoProps';
import { Link } from "react-router-dom";


const ImageContainer: React.FC<PhotoProps> = (props) => {

  return (
    <div className={`img-container-${props.componentName}`} id={`${props.componentName}-photo-${props.photoId}`}>
      <Link to={"/details"} state={props}><img src={props.imgPath} id={`${props.photoId}`} alt="coming-soon"></img></Link>
    </div>
  )
}

export default ImageContainer;