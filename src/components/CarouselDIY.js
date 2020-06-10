import React from "react";
import "./CarouselDIY.scss";

const CarouselDIY = ({ images, titles, describes }) => {
  const carouselImage = images.map((item, index) => {
    return <img src={item} key={index} alt="images" />;
  });
  const carouselTitles = titles.map((item, index) => {
    return (
      <div className="text-title" key={index}>
        {item}
      </div>
    );
  });
  const carouselDescribe = describes.map((item, index) => {
    return (
      <div className="text-describe" key={index}>
        {item}
      </div>
    );
  });
  return (
    <div className="carousel-wrapper">
      <div className="carousel-image">{carouselImage}</div>
      <div className="carousel-introduce">
        <div className="carousel-text">
          <div className="text-title">Galaxy Note 10</div>
          <div className="text-describe">더욱 새로워진 노트</div>
          <div className="carousel-button">
            <a href="/" className="more">
              더 알아보기
            </a>
            <a href="/" className="benefit">
              구매 혜택 보기
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-menu">
        <a href="/">Galaxy Note 9</a>
        <a href="/">Galaxy Note 10</a>
        <a href="/">Galaxy Fold</a>
      </div>
      <a href="/" className="prev">
        &#10094;
      </a>
      <a href="/" className="next">
        &#10095;
      </a>
    </div>
  );
};
export default CarouselDIY;
