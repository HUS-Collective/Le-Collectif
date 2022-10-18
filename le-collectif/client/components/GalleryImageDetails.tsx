import React from 'react'

type Props = {
  photoName: string,
  price: number,
  artistName: string,
  count: number,
}

const GalleryImageDetails = (props: Props) => {
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