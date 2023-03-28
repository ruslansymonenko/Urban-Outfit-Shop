import socialInsta from '../../assets/icons/instagram.svg';
import socialTelgram from '../../assets/icons/telegram.svg';

import './Footer.css';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <h2 className="footer-contact__title">Urban Outfit</h2>
            <ul className="footer-contact__social">
              <li className="footer-contact__social-item">
                <a href="https://www.google.com/">
                  <img src={socialTelgram} alt="" />
                </a>
              </li>
              <li className="footer-contact__social-item">
                <a href="https://www.google.com/">
                  <img src={socialInsta} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h4 className="footer-newsletter__title">sign up to our newsletter</h4>
            <form className="footer-form" action="#">
              <input className="footer-form__input" type="text" placeholder="write your email"/>
              <button className="footer-form__btn">Send</button>
            </form>
          </div>
          <div className="footer-adress">
            <p>Ukraine</p>
            <p>st. Khreshchatyk, Kyiv, 02000</p>
          </div>
        </div>
        <h5 className="footer-subtitle">Multi-brand clothing store</h5>
      </div>
    </footer>
  )
}

export {Footer}