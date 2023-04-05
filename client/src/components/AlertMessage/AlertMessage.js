import { useState, useEffect } from 'react';

import './AlertMessage.css';

const AlertMessage = ({message, isActive = false}) => {
  const [alertVisibility, setAlertVisibility] = useState(isActive);

  const visibilityHandler = () => {
    setAlertVisibility(false);
  }

  useEffect(() => {
    setAlertVisibility(isActive);
  }, [isActive]);

  return (
    <div className={
      `alert ${alertVisibility ? 'alert--active' : ''}`
      // alertVisibility === false ? 'alert' : 'alert alert--active'
    }>
      <div className="alert-message">
        {
          message ? message : 'Alert'
        }
      </div>
      <button 
        className='alert-btn'
        onClick={visibilityHandler}>
        X
      </button>
    </div>
  )
}

export default AlertMessage