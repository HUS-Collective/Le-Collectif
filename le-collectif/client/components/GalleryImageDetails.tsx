import React from 'react'
import PhotoProps from '../types/photoProps'


const GalleryImageDetails = (props: PhotoProps) => {
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