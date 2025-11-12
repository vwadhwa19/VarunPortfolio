import { useState } from "react";
import { Button } from "react-bootstrap";
import beach from './myPhotos/beach.jpg';
import camping from './myPhotos/camping.jpg';
import christmas from './myPhotos/christmas.jpg';
import dc from './myPhotos/dc.jpg';
import desert from './myPhotos/desert.jpg';
import dog from './myPhotos/dog.jpg';
import dubai from './myPhotos/dubai.jpg';
import frederick from './myPhotos/frederick.jpg';
import fire from './myPhotos/fire.jpg';
import greatFalls from './myPhotos/greatFalls.jpg';
import hotel from './myPhotos/hotel.jpg';
import light from './myPhotos/light.jpg';
import metro from './myPhotos/metro.jpg';
import riffle from './myPhotos/riffle.jpg';
import spices from './myPhotos/spices.jpg';
import sunset from './myPhotos/sunset.jpg';
import taxi from './myPhotos/taxi.jpg';
import train from './myPhotos/train.jpg';
import umd from './myPhotos/umd.jpg';
import wizard from './myPhotos/wizard.jpg';

function Photos() {
  const myPhotos = [
    { id: 1, imageSource: beach },
    { id: 2, imageSource: camping },
    { id: 3, imageSource: christmas },
    { id: 4, imageSource: dc },
    { id: 5, imageSource: desert },
    { id: 6, imageSource: dog },
    { id: 7, imageSource: dubai },
    { id: 8, imageSource: fire },
    { id: 9, imageSource: frederick },
    { id: 10, imageSource: greatFalls },
    { id: 11, imageSource: hotel },
    { id: 12, imageSource: light },
    { id: 13, imageSource: metro },
    { id: 14, imageSource: riffle },
    { id: 15, imageSource: spices },
    { id: 16, imageSource: sunset },
    { id: 17, imageSource: taxi },
    { id: 18, imageSource: train },
    { id: 19, imageSource: umd },
    { id: 20, imageSource: wizard },
  ];

  const [modal, setModal] = useState(false);
  const [tempImage, setTempImage] = useState("");

  const getImage = (imageSource) => {
    setTempImage(imageSource);
    setModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "30px 0", fontWeight: "bold" }}>
        My Photo Gallery
      </h1>

      {modal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            flexDirection: "column",
          }}
        >
          <img
            src={tempImage}
            alt="Large view"
            style={{
              maxHeight: "70vh",
              maxWidth: "70vw", 
              borderRadius: "10px",
              marginBottom: "20px",
              objectFit: "contain",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
            }}
          />
          <Button variant="secondary" onClick={handleModalClose}>
            <b>Close Image</b>
          </Button>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          padding: "10px 20px 60px",
        }}
      >
        {myPhotos.map((item) => (
          <div
            key={item.id}
            onClick={() => getImage(item.imageSource)}
            style={{
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "8px",
              width: "250px",
              height: "250px",
              flex: "0 0 auto",
              transition: "transform 0.3s ease",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={item.imageSource}
              alt="Gallery"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Photos;