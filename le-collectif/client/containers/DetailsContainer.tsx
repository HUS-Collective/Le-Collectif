import React from 'react'
import PhotoProps from '../types/photoProps';

const DetailsContainer = (props: PhotoProps) => {
  return (
    <div className='details-name-price' id={`details-container-photo-${props.photoId}`}>
      <h2>{props.photoName}</h2>
      <h3>${props.price}</h3>
    </div>
  )
}

export default DetailsContainer;