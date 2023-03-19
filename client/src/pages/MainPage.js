import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Slider} from '../components/Slider';
import { GoodsField } from '../components/GoodsField';

const MainPage = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/goods');
        console.log('Data received!');
        setGoods(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchGoods();
  }, []);

  return(
    <section className="main">
      <Slider/>
      {
        goods.length > 0 ? <GoodsField goods={goods}/> : ''
      }
    </section>
  )
}

export {MainPage}