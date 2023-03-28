import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className='registration'>
      <div className="container">
        <div className="auth-content">
          <form 
            className="auth-form"
            onSubmit={e => e.preventDefault()}
            >
            <h3 className="auth-form__title">
              Registration
            </h3>
            <div className="auth-form__input-container">
              <label 
                className='auth-form__input-name' htmlFor="email">
                  Email
              </label>
              <input
                className='auth-form__input'
                type="emai" 
                placeholder='E-mail' 
                name='email'/>
            </div>
            <div className="auth-form__input-container">
              <label 
                className='auth-form__input-name' htmlFor="email">
                  Password
              </label>
              <input
                className='auth-form__input'
                type="password" 
                placeholder='Password' 
                name='password'/>
            </div>
            <button className='auth-form__submit'>
              Submit
            </button>
            <Link 
              className='auth-form__link'
              to="/login">
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export {RegisterPage}