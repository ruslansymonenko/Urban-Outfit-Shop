import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './RegisterPage.css';

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const inputHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const submitForm = async (event) => {
    try{
      await axios.post('http://localhost:3001/api/auth/registration', {...form})
      .then(response => console.log(response));

    } catch (err) {
      console.log(err)
    }
  }


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
                name='email'
                onChange={inputHandler}
                />
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
                name='password'
                onChange={inputHandler}
                />
            </div>
            <button 
              className='auth-form__submit'
              onClick={submitForm}>
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