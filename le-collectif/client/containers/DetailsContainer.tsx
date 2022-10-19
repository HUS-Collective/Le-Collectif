import React from 'react'
import PhotoProps from '../types/photoProps';

const DetailsContainer = (props: PhotoProps) => {
  return (
    <div className='details-name-price' id={`details-container-photo-${props.photoId}`}>
      <h2>{props.photoName}</h2>
      <h3>${props.price}</h3>
      <h4>Year: 2022</h4>
      <button className="button-57" role="button"><span className="text">add to cart</span><span>added to cart</span></button>
    </div>
  )
}

export default DetailsContainer;