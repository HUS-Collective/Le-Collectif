import {FC} from 'react';
import React from 'react';
import PhotoProps from '../types/photoProps';


const ImageContainer: React.FC <PhotoProps> = (props) => {

  return (
    <div className={`img-container-${props.componentName}`} id={`${props.componentName}-photo-${props.photoId}`}>
      <img src={props.imgPath} id={`${props.photoId}`}></img>
    </div>
  )
}

export default ImageContainer;