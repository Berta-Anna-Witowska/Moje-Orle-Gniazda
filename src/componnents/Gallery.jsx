import "../styles/elements/_gallery.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";
import React, {useState, useEffect} from "react";
import {photos} from "../data/gallery_info";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [idx, setIdx] = useState(0);

  const carouselNext = () => {
    if (currentIndex === photos.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };
  const carouselPrev = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(photos.length - 1);
    }
    return setCurrentIndex(currentIndex - 1);
  };

  const showAlbum = (idx) => {
    setIdx(idx);
    console.log(idx);
  };

  return (
    <div className="gallery">
      <h1>Galeria zdjęć</h1>
      <div className="gallery-container">
        <div
          className="gallery-sidebar"
          style={{
            height: "100%",
            flexGrow: 1,
            borderRight: "1px solid rgba(181, 181, 198, 0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button className="prev circle-small" onClick={carouselPrev}>
            <i className="fa-solid fa-chevron-up"></i>
          </button>
          <div
            className="sidebar-carousel-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {photos.map((el) => (
              <div
                className="sidebar-carousel-item"
                key={el.ID}
                style={{
                  transform: `translate(-${currentIndex * 100}%)`,
                }}
                onClick={() => showAlbum(el.ID)}
              >
                {el.name}
              </div>
            ))}
          </div>
          <button className="next circle-small" onClick={carouselNext}>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
        {idx && <Gallery_Carousel idx={idx} currIdx={0} />}
      </div>
      <ButtonBackToTrail />
    </div>
  );
}
function Gallery_Carousel({idx}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselNext = () => {
    if (currentIndex === photos[idx - 1].img.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };
  const carouselPrev = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(photos[idx - 1].img.length - 1);
    }
    return setCurrentIndex(currentIndex - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      carouselNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImage = photos[idx - 1].img[currentIndex];

  return (
    <div className="carousel-container">
      <button className="prev circle-small" onClick={carouselPrev}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div className="carousel-wrapper">
        {photos[idx - 1].img.map((el, i) => (
          <div
            className="carousel-item"
            key={i}
            style={{
              transform: `translate(-${currentIndex * 100}%)`,
              backgroundImage,
            }}
          >
            <span
              className="photo-name"
              style={{
                backgroundColor: "#273539af",
                // border: "2px solid rgba(181, 181, 198, 0.25)",
                padding: "5px 10px ",
                borderRadius: "10px",
                textShadow: "0px 0px 5px #091008",
                textTransform: "uppercase",
              }}
            >
              {photos[idx - 1].name} - Zdjęcie {currentIndex + 1}
            </span>
          </div>
        ))}
      </div>

      <button className="next circle-small" onClick={carouselNext}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
