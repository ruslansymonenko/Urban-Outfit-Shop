import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">
            Urban Outfit
          </h1>
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
            <div className="header-login"></div>
            <div className="header-cart"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export {Header}