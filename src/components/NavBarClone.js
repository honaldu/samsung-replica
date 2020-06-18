import React, { Component } from "react";
import logo from "../images/samsung.png";
import "./NavBarClone.scss";

class NavBar extends Component {
  state = {
    sideBar: false,
  };
  handleSideBar = () => {
    this.setState({
      sideBar: !this.state.sideBar,
    });
  };
  render() {
    const { sideBar } = this.state;
    const { handleSideBar } = this;
    return (
      <div>
        <header className="header">
          <div className="navContainer">
            <div className="header-logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <nav>
              <ul
                className={`mainNav ${sideBar ? "open" : ""}`}
                style={sideBar ? { transforn: "translateX(0)" } : null}
              >
                <li>
                  <a className="mainNavLink" href="/">
                    Dummy 1
                  </a>
                </li>
                <li>
                  <a className="mainNavLink" href="/">
                    Dummy 2
                  </a>
                </li>
                <li>
                  <a className="mainNavLink" href="/">
                    Dummy 3
                  </a>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => {
                handleSideBar();
              }}
              className={`navToggle ${sideBar ? "open" : null}`}
            >
              <img
                src="https://img.icons8.com/material-outlined/24/000000/menu.png"
                alt="nav"
              />
            </button>
            <div
              onClick={() => {
                handleSideBar();
              }}
              className={`overlay ${sideBar ? "open" : ""}`}
            ></div>
          </div>
        </header>
        <div className="wrapper"></div>
      </div>
    );
  }
}

export default NavBar;
