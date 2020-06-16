import "./Header.scss";
import logo from "../images/samsung.png";
import React, { Component } from "react";

class Header extends Component {
  state = {
    sideBar: false,
  };
  sideBarHandler = () => {
    this.setState({
      sideBar: !this.state.sideBar,
    });
  };
  render() {
    const { sideBar } = this.state;
    const { sideBarHandler } = this;
    return (
      <header className="header-wrapper">
        <div className="header-inner">
          <div className="header-logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={`header-group${sideBar ? "-open" : ""}`}>
            <div className="header-product">
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
            <div className="header-service">
              <a href="/">스토리</a>
              <a href="/">멤버십</a>
              <a href="/">고객지원</a>
              <a href="/">비즈니스</a>
            </div>
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
          <div className="header-menu">
            <button
              onClick={() => {
                sideBarHandler();
              }}
            >
              <img
                src="https://img.icons8.com/material-outlined/24/000000/menu.png"
                alt="nav"
              />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
