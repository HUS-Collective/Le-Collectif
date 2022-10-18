import React, { useEffect } from "react";
import image from '../images/DSC_8296.jpeg';
import DATA from '../models/mockdata';
import GalleryContainer from "./GalleryContainer";

const GalleryPage: React.FC = () => {
  return (
    <div className="page-container" id='gallery-page'>
      <GalleryContainer/>
    </div>
  );
}
export default GalleryPage;