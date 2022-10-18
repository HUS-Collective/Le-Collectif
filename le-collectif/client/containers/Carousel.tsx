import DATA from '../models/mockdata'
import { useEffect, useState } from 'react';



const Carousel = () => {
  // console.log(DATA.PHOTOS);
  const photos = DATA.PHOTOS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScrol = () => {
    if (currentIndex === DataTransfer.length -1) {
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
        return <h1 className='carousel-item' style={{transform: `translate(-${currentIndex *100}%)`}}
        key={index}>{photo.artistName}</h1>
      })
      }
    </div>
  )
}

export default Carousel;