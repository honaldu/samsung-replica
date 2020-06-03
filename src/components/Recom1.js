import React from "react";
import "./Recom1.scss";
import img1 from "../images/galaxyTab.jpg";

const Recom1 = () => {
  return (
    <div className="recom1-wrapper">
      <div className="recom1-title">모바일</div>
      <div className="recom1-menu">
        <a href="/">Galaxy buds</a>
        <a href="/">Galaxy Tab 6</a>
        <a href="/">Galaxy Z Flip</a>
        <a href="/">Galaxy Watch</a>
      </div>
      <img src={img1} alt="Tab" className="row" />
      <div className="recom1-actionTitle">Galaxy Tab 6 런칭</div>
      <a href="/" className="recom1-buy">
        지금 구매하기
      </a>
    </div>
  );
};
export default Recom1;
