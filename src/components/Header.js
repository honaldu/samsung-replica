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
    const { product, service, icon } = this.props;
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
          <div className={`header-group ${sideBar ? "open" : ""}`}>
            <ul className="header-product">
              <button
                className={`${sideBar ? "open" : "close"}`}
                onClick={() => {
                  sideBarHandler();
                }}
              >
                <img
                  src="https://img.icons8.com/material-outlined/50/000000/delete-sign.png"
                  alt="nav"
                />
              </button>
              {product.map((element, index) => {
                return (
                  <li key={index}>
                    <a href="/">{element}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="header-service">
              {service.map((element, index) => {
                return (
                  <li key={index}>
                    <a href="/">{element}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="header-icon">
            {icon.map((element, index) => {
              return (
                <a href="/" key={index}>
                  <img src={element} alt="icon" />
                </a>
              );
            })}
          </div>
          <div className="header-menu">
            <button
              className={`${sideBar ? "close" : "open"}`}
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
        <div
          onClick={sideBarHandler}
          className={`overlay ${sideBar ? "open" : ""}`}
        ></div>
      </header>
    );
  }
}

export default Header;
