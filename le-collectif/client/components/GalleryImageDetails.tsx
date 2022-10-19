import React from 'react'
import photoProps from '../types/photoProps';

const GalleryImageDetails = (props: photoProps) => {
  return (
    <div className='gallery-photo-info'>
      <p>{props.photoName}</p>
      <p>${props.price}</p>
      <p>Artist: {props.artistName}</p>
      <p>Remaining: {props.count}</p>
    </div>
  )
}

export default GalleryImageDetails