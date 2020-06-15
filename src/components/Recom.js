import React from "react";
import "./Recom.scss";

const Recom = ({ images, images2, describes }) => {
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
          {images.map((element, index) => {
            return (
              <div className="recom-item" key={index}>
                <img src={element} alt="galaxyS2" />
                <a href="/">{describes[0]}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recom;
