import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoodsList } from './components/GoodsList';

import styles from './App.module.scss';

function App() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/goods')
      .then(response => {
        setGoods(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>Hello this is online store</h1>
      <GoodsList goods={goods}/>
    </div>
  );
}

export default App;
