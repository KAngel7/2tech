import * as React from 'react';
import './style.css';

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="row align-items-center justify-content-between d-flex">
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#feature">Features</a>
                </li>
                <li>
                  <a href="#price">Price</a>
                </li>
                <li>
                  <a className="ticker-btn" href="#">Get Started</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
