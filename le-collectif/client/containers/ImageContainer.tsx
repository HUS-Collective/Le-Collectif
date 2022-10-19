import { FC } from 'react';
import React from 'react';
import photoProps from '../types/photoProps';
import { Link } from "react-router-dom";


const ImageContainer: React.FC<photoProps> = (props: photoProps) => {

  return (
    <Link to="/details" state={props}><img src={props.imgPath} id={`${props.photoId}`} alt="coming-soon"></img></Link>
  )
}

export default ImageContainer;