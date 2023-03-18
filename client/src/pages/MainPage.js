import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/goods');
        console.log('Data received!');
        setGoods(response.data);
        console.log(goods)
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchGoods();
  }, []);

  return(
    <section className="main">Main</section>
  )
}

export {MainPage}