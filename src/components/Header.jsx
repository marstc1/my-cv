import React, { Component } from "react";

export default class Header extends Component {
  render() {
    let headerData = this.props.headerData;

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap">
            Show navigation
          </a>
          <a className="mobile-btn" href="#nav-clear">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                CV
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hi, I'm {headerData.name}</h1>
            <h2 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              {headerData.role}
            </h2>
            <h3>{headerData.roleDescription}</h3>
            <hr />
            <ul className="social" />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <span className="sr-only">Skip to About Me</span>
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}
