import GalleryImageDetails from '../components/GalleryImageDetails';
import DATA from '../models/mockdata';
import ImageContainer from './ImageContainer';

const GalleryContainer = () => {
  //decalare state using useState hooks

  //useEffect to fetch data from DB
  //update state after fetch
  //render components dynamically based off of received data 

  return (
    <div className="gallery-container-grid">
      {DATA.PHOTOS.map((photo) => {
        console.log(photo);
        return (
          <div className={`grid-item`} id={`photo-${photo.photoId}`}>
            < ImageContainer
              imgPath={photo.imgPath}
              photoName={photo.photoName}
              photoId={`${photo.photoId}`}
              componentName='gallery'
              key={photo.photoId} />
            < GalleryImageDetails
              photoName={photo.photoName}
              artistName={photo.artistName}
              price={photo.price}
              count={photo.count}
            />
          </div>
        )
      })
      }
    </div>
  )
}

export default GalleryContainer;