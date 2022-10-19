import DATA from '../models/mockdata'
import { useEffect, useState } from 'react';
import ImageContainer from './ImageContainer';


const Carousel = () => {
  // console.log(DATA.PHOTOS);
  const photos = DATA.PHOTOS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScrol = () => {
    if (currentIndex === photos.length -1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex+1)
  }

  useEffect(() => {
    const interval = setInterval(() => { carouselInfiniteScrol()}, 3000)
    return () => clearInterval(interval)
  })

  return (
    <div className='carousel-container'>
      { photos.map((photo, index) => {
        return <div className='carousel-item' style={{transform: `translate(-${currentIndex *100}%)`}}
        key={index}>
          < ImageContainer 
            imgPath={photo.imgPath}
            photoId={`${photo.photoId}`}
          />
        </div>
      })
      }
    </div>
  )
}

export default Carousel;