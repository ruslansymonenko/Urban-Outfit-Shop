import { Link } from "react-router-dom";

import accountImg from '../assets/icons/account.svg';
import cartImg from '../assets/icons/cart.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/">
            <h1 className="header-title">
              Urban Outfit
            </h1>
          </Link>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__list-item">
                <Link className="header-nav__list-link" to="/">
                  Shop
                </Link>
              </li>
              <li className="header-nav__list-item">
                <Link className="header-nav__list-link" to="about">
                  About us
                </Link>
              </li>
              <li className="header-nav__list-item">
                <Link className="header-nav__list-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-user">
            <div className="header-login">
              <Link className="header-login__link" to="login">
                <img 
                  className="header-login__link-img" 
                  src={accountImg} 
                  alt="account" />
              </Link>
            </div>
            <div className="header-cart">
              <Link className="header-cart__link" to="cart">
                  <img 
                    className="header-cart__link-img" 
                    src={cartImg} 
                    alt="cart" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export {Header}