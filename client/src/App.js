import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

import { Layout } from './components/Layout';

function App() {
  // const [goods, setGoods] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/goods')
  //     .then(response => {
  //       console.log('Data received!');
  //       setGoods(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<MainPage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='registration' element={<RegisterPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
