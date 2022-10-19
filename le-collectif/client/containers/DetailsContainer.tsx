import React from 'react'

type imageDetailProps = {
  imgPath: string,
  photoName: string,
  price: number,
}

const DetailsContainer = (props: imageDetailProps) => {
  return (
    <div>
      <h2>{props.photoName}</h2>
      <h3>{props.price}</h3>
    </div>
  )
}

export default DetailsContainer;