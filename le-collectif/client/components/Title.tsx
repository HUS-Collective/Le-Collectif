import React from 'react'
import photoProps from '../types/photoProps';

const Title = (props: photoProps) => {
  return (
    <div className='details-title'>
      <h1>{props.photoName}</h1>
      {/* <h3>{props.artistName}</h3> */}
    </div>
  )
}

export default Title;