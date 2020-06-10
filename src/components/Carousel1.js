import React from "react";
import "./Carousel1.scss";
import img1 from "../images/note10.jpg";

const Carousel1 = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <img src={img1} alt="note10" />
        <div className="carousel-introduce">
          <div className="carousel-text">
            <div className="text-title">Galaxy Note 9</div>
            <div className="text-describe">자급제 Open</div>
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
      </div>

      <a href="/" className="prev">
        &#10094;
      </a>
      <a href="/" className="next">
        &#10095;
      </a>
      <div className="carousel-menu">
        <a href="/">Galaxy Note 9</a>
        <a href="/">Galaxy Note 10</a>
        <a href="/">Galaxy Fold</a>
      </div>
    </div>
  );
};

export default Carousel1;
