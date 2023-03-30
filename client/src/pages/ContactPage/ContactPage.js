import './ContactPage.css';

import locationImg from '../../assets/icons/location.svg';
import phoneImg from '../../assets/icons/phone.svg';
import mailImg from '../../assets/icons/mail.svg';

const ContactPage = () => {
  return(
    <section className="contact">
      <div className="contact-types">
        <div className="container">
          <div className="contact-types__content">
            <h2 className="contact-types__title">
              Get In Touch
            </h2>
            <ul className="contact-types__container">
              <li className='contact-types__type'>
                <img src={locationImg} alt="address" />
                <h3>Address</h3>
                <address>Kyiv, st. Khreschatyk 1, Ukraine</address>
              </li>
              <li className='contact-types__type'>
                <img src={phoneImg} alt="address" />
                <h3>Phone</h3>
                <a href='tel:+38012345678'>+38012345678</a>
              </li>
              <li className='contact-types__type'>
                <img src={mailImg} alt="address" />
                <h3>Mail</h3>
                <a href='mailto:urbanstore@info.shop'>urbanstore@info.shop</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="container">
          <h2 className='contact-form__title'>
            Or send us the messagge
          </h2>
          <div className="contact-form__content">
            <div className="contact-form__content-info">
              <p>
                Write to us if you have questions or suggestions.
              </p>
              <p>
                We are also ready to answer questions of cooperation and advertising.
              </p>
            </div>
            <form 
              className='contact-form__content-form'
              action="#"
              onSubmit={e => e.preventDefault()}
            >
              <h3>Contact form</h3>
              <input
                className='form-input'
                type="text" 
                name='name' 
                placeholder='Your name'/>
              <input
                className='form-input'
                type="mail" 
                name='mail' 
                placeholder='Your mail'/>
              <div className="form-btns">
                <button className='form-submit__btn form-btn'>
                  Send
                </button>
                <button className='form-cancel__btn form-btn'>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-form"></div>
    </section>
  )
}

export {ContactPage}