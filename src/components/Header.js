import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="inner first">
        <img src="styles/images/samsung.png" alt="logo" />
        <a href="/">갤럭시 5G</a>
        <a href="/">가전</a>
        <a href="/">모바일</a>
        <a href="/">TV</a>
        <a href="/">IT</a>
        <a href="/">오디오</a>
        <a href="/">소모품</a>
      </div>
      <div className="inner third">
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
      <div className="inner second">
        <a href="/">스토리</a>
        <a href="/">멤버십</a>
        <a href="/">고객지원</a>
        <a href="/">비즈니스</a>
      </div>
    </header>
  );
};
export default Header;
