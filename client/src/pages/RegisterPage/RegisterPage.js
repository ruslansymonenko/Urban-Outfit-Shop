import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AlertMessage from '../../components/AlertMessage/AlertMessage';

import './RegisterPage.css';

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  
  const [resultMessage, setResultMessage] = useState({
    message: 'Server response',
    visibility: false
  });

  const inputHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const submitForm = async (event) => {
    try{
      await axios.post('http://localhost:3001/api/auth/registration', {...form})
      .then(response => {
        console.log(response.data.message);
        showServerResponse(response.data.message);

        setInterval(hideServerResponse, 2500);

        setForm({
          email: '',
          password: ''
        });
      });
    } catch (err) {
      console.log(err);
      showServerResponse(err.response.data.message);
      setInterval(hideServerResponse, 2500);
    }
  }

  const showServerResponse = (text) => {
    setResultMessage({
      message: text,
      visibility: true
    })
  }

  const hideServerResponse = () => {
    setResultMessage({
      message: 'Server response',
      visibility: false
    })
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
      <AlertMessage
        message={resultMessage.message}
        isActive={resultMessage.visibility}
      />
    </div>
  )
}

export {RegisterPage}