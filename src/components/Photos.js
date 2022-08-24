import React, { useState } from "react"
import { Button } from "react-bootstrap"
import beach from './myPhotos/beach.jpg'
import camping from './myPhotos/camping.jpg'
import christmas from './myPhotos/christmas.jpg'
import dc from './myPhotos/dc.jpg'
import desert from './myPhotos/desert.jpg'
import dog from './myPhotos/dog.jpg'
import dubai from './myPhotos/dubai.jpg'
import frederick from './myPhotos/frederick.jpg'
import fire from './myPhotos/fire.jpg'
import greatFalls from './myPhotos/greatFalls.jpg'
import hotel from './myPhotos/hotel.jpg'
import light from './myPhotos/light.jpg'
import metro from './myPhotos/metro.jpg'
import riffle from './myPhotos/riffle.jpg'
import spices from './myPhotos/spices.jpg'
import sunset from './myPhotos/sunset.jpg'
import taxi from './myPhotos/taxi.jpg'
import train from './myPhotos/train.jpg'
import umd from './myPhotos/umd.jpg'
import wizard from './myPhotos/wizard.jpg'
import '../styles/Photos.css';

function Photos() {
  let myPhotos = [
    {
      id: 1,
      imageSource: beach
    },
    {
      id: 2,
      imageSource: camping
    },
    {
      id: 3,
      imageSource: christmas
    },
    {
      id: 4,
      imageSource: dc
    },
    {
      id: 5,
      imageSource: desert
    },
    {
      id: 6,
      imageSource: dog
    },
    {
      id: 7,
      imageSource: dubai
    },
    {
      id: 8,
      imageSource: fire
    },
    {
      id: 9,
      imageSource: frederick
    },
    {
      id: 10,
      imageSource: greatFalls
    },
    {
      id: 11,
      imageSource: hotel
    },
    {
      id: 12,
      imageSource: light
    },
    {
      id: 13,
      imageSource: metro
    },
    {
      id: 14,
      imageSource: riffle
    },
    {
      id: 15,
      imageSource: spices
    },
    {
      id: 16,
      imageSource: sunset
    },
    {
      id: 17,
      imageSource: taxi
    },
    {
      id: 18,
      imageSource: train
    },
    {
      id: 29,
      imageSource: umd
    },
    {
      id: 20,
      imageSource: wizard
    },
  ]

  const [modal, setModal] = useState(false);
  const [tempImage, setTempImage] = useState('');

  const getImage = (imageSource) => {
    setTempImage(imageSource);
    setModal(true);
    document.body.style.overflow = 'hidden';
  }

  const handleModalClose = () => {
    setModal(false)
    document.body.style.overflow = 'unset';

  }
  return (
    <>
      <h1 className="photos-header">My Photo Gallery</h1>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImage} alt="Gallery"></img>
        <Button className="closeImageButton" variant="secondary" onClick={handleModalClose}><b>Close Image</b></Button>
      </div>
      <div className="marginBottomGallery">
        <div className="gallery">
          {myPhotos.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={() => getImage(item.imageSource)}>
                <img src={item.imageSource} style={{ width: '100%' }} alt="GalleryPhoto"></img>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Photos;