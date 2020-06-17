import React, { Component } from "react";
import "./NavBar.scss";

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
            <span
              className="logo"
              style={{ color: "#fff", fontStyle: "italic", fontWeight: "400" }}
            >
              React Navigaton
            </span>
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
              <span />
              <span />
              <span />
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
