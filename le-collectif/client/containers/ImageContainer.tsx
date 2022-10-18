import {FC} from 'react';
import React from 'react';

type GalleryProps = {
  imgPath: string,
  photoName: string,
  photoId: string,
  key: number,
}


const ImageContainer: React.FC <GalleryProps> = (props) => {

  return (
    <img src={props.imgPath} id={`${props.photoId}`}></img>
  )
}

export default ImageContainer;