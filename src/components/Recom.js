import React from "react";
import "./Recom.scss";
import img1 from "../images/galaxyS2.jpg";
import img2 from "../images/galaxyS4.jpeg";
import img3 from "../images/galaxyS7.jpg";
import img4 from "../images/note9.jpeg";

const Recom = () => {
  return (
    <div className="recom-wrapper">
      <div className="column">
        <div className="recom-menu">
          <a href="/">우리집 가정</a>
          <a href="/" className="galaxy">
            새로운 갤럭시
          </a>
          <a href="/">추천 제품</a>
        </div>
        <div className="recom-items">
          <div className="recom-item">
            <img src={img1} alt="galaxyS2" />
            <a href="/">Galaxy S2</a>
          </div>
          <div className="recom-item">
            <img src={img2} alt="galaxyS2" />
            <a href="/">Galaxy S4</a>
          </div>
          <div className="recom-item">
            <img src={img3} alt="galaxyS2" />
            <a href="/">Galaxy S7</a>
          </div>
          <div className="recom-item">
            <img src={img4} alt="galaxyS2" />
            <a href="/">Galaxy Note9</a>
          </div>
          <div className="recom-item">
            <img src={img1} alt="galaxyS2" />
            <a href="/">Galaxy S2</a>
          </div>
          <div className="recom-item">
            <img src={img2} alt="galaxyS2" />
            <a href="/">Galaxy S4</a>
          </div>
          <div className="recom-item">
            <img src={img3} alt="galaxyS2" />
            <a href="/">Galaxy S7</a>
          </div>
          <div className="recom-item">
            <img src={img4} alt="galaxyS2" />
            <a href="/">Galaxy Note9</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recom;
