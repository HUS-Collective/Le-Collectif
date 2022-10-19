import React from 'react'
import DetailsContainer from '../containers/DetailsContainer';
import ImageContainer from '../containers/ImageContainer';
import DATA from '../models/mockdata'

type Props = {}

const CartContainer = (props: Props) => {
  const fakeCartData = DATA.PHOTOS.slice(0,3);
  console.log(fakeCartData);
  return (
    <div className='cart-details-container'>
      {fakeCartData.map(photo => {
        return (
          <div className='cart-details' id={photo.photoName}>
            <ImageContainer 
              imgPath={photo.imgPath}
              photoId={`${photo.photoId}`}
              componentName='cart'
            />
            < DetailsContainer 
              photoName={photo.photoName}
              price={photo.price}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CartContainer