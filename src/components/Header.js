import React from "react";
import "./Header.scss";
import logo from "../images/samsung.png";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="inner logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="inner product">
        <a href="/" className="galaxy">
          갤럭시 5G
        </a>
        <a href="/" className="electro">
          가전
        </a>
        <a href="/" className="mobile">
          모바일
        </a>
        <a href="/" className="tv">
          TV
        </a>
        <a href="/" className="it">
          IT
        </a>
        <a href="/" className="audio">
          오디오
        </a>
        <a href="/" className="consume">
          소모품
        </a>
        <a href="/" className="event">
          이벤트
        </a>
        <a href="/" className="dot">
          닷컴핫딜
        </a>
      </div>

      <div className="inner service">
        <a href="/" className="story">
          스토리
        </a>
        <a href="/" className="member">
          멤버십
        </a>
        <a href="/" className="after">
          고객지원
        </a>
        <a href="/" className="business">
          비즈니스
        </a>
      </div>
      <div className="inner info">
        <a href="/">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/user--v1.png"
            alt="profile"
          />
        </a>
        <a href="/">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png"
            alt="cart"
          />
        </a>
        <a href="/">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/search.png"
            alt="search"
          />
        </a>
      </div>
    </header>
  );
};
export default Header;
