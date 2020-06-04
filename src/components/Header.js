import React from "react";
import "./Header.scss";
import logo from "../images/samsung.png";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-inner">
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="header-product">
          <a href="/">
            <span>갤럭시 5G</span>
          </a>
          <a href="/">
            <span>모바일</span>
          </a>
          <a href="/">
            <span>모바일</span>
          </a>
          <a href="/">
            <span>가전</span>
          </a>
          <a href="/">
            <span>이벤트</span>
          </a>
          <a href="/">
            <span>소모품</span>
          </a>
          <a href="/">
            <span>오디오</span>
          </a>
          <a href="/">
            <span>it</span>
          </a>
          <a href="/">
            <span>닷컴핫딜</span>
          </a>
        </div>
        <div className="header-service">
          <a href="/">스토리</a>
          <a href="/">멤버십</a>
          <a href="/">고객지원</a>
          <a href="/">비즈니스</a>
        </div>
        <div className="header-icon">
          <a href="/">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/user--v1.png"
              alt="profile"
            />
          </a>
          <a href="/">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/shopping-cart.png"
              alt="cart"
            />
          </a>
          <a href="/">
            <img
              src="https://img.icons8.com/material-outlined/48/000000/search.png"
              alt="search"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
