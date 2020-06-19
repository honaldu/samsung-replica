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
      <div>
        <header className="header-wrapper">
          <div className="header-inner">
            <div className="header-logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="header-group">
              <div className="header-product">
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
                    <a href="/" key={index}>
                      {element}
                    </a>
                  );
                })}
              </div>
              <div className="header-service">
                {service.map((element, index) => {
                  return (
                    <a href="/" key={index}>
                      {element}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="header-icon">
              {icon.map((element, index) => {
                return (
                  <a href="/" key={index}>
                    <img src={element} alt="icon" />
                  </a>
                );
              })}
              <button
                className={`menu ${sideBar ? "close" : "open"}`}
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
        <div
          onClick={sideBarHandler}
          className={`wrapper ${sideBar ? "open" : ""}`}
        ></div>
        <div className={`header-group-side${sideBar ? " open" : ""}`}>
          <div className={`side-wrapper-top${sideBar ? " open" : ""}`}>
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
          </div>
          <div className={`side-wrapper-1${sideBar ? " open" : ""}`}>
            <div className="header-product">
              {product.map((element, index) => {
                return (
                  <a href="/" key={index}>
                    {element}
                  </a>
                );
              })}
            </div>
            <div className="header-service">
              {service.map((element, index) => {
                return (
                  <a href="/" key={index}>
                    {element}
                  </a>
                );
              })}
            </div>
          </div>
          <div className={`side-wrapper-2${sideBar ? " open" : ""}`}></div>
        </div>
      </div>
    );
  }
}

export default Header;
