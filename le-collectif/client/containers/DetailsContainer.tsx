import React from 'react'
import photoProps from '../types/photoProps';

const DetailsContainer = (props: photoProps) => {
  return (
    <div>
      <h2>{props.photoName}</h2>
      <h3>{props.price}</h3>
    </div>
  )
}

export default DetailsContainer;