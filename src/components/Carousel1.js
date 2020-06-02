import React from "react";
import "./Carousel1.scss";

const Carousel1 = () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  let plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  let currentSlide = (n) => {
    showSlides((slideIndex = n));
  };
  return (
    <div className="carousel-wrapper">
      <div class="slideshow-container">
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="/images/note9" alt="note9" />
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="/images/note10.jpg" alt="note10" />
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="/images/fold.jpg" alt="fold" />
          <div class="text">Caption Three</div>
        </div>
        <a class="prev" href="/">
          &#10094;
        </a>
        <a class="next" href="/">
          &#10095;
        </a>
      </div>
      <div className="dot-zone">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  );
};
export default Carousel1;
