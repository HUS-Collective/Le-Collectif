import React from 'react'

type Props = {
  photoName: string,
  artistName: string
}

const Title = (props: Props) => {
  return (
    <div className='details-title'>
      <h1>{props.photoName}</h1>
      {/* <h3>{props.artistName}</h3> */}
    </div>
  )
}

export default Title;