import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './LoginPage.css';

const LoginPage = () => {
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
      await axios.post('http://localhost:3001/api/auth/login', {...form})
      .then(response => {
        console.log(response);
        
        setForm({
          email: '',
          password: ''
        });
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='login'>
      <div className="container">
        <div className="auth-content">
          <form 
            className="auth-form"
            onSubmit={e => e.preventDefault()}
            >
            <h3 className="auth-form__title">
              Authorization
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
                value={form.email}
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
                value={form.password}
                onChange={inputHandler}
                />
            </div>
            <button 
              className='auth-form__submit'
              onClick={submitForm}
              >
              Submit
            </button>
            <Link 
              className='auth-form__link'
              to="/registration">
              Don't have account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export {LoginPage}