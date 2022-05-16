import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ShowArticle from './components/ShowArticle/ShowArticle';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ActionPage from './components/ActionPage/ActionPage';

const App = () => {

  // state for showing signup or signin form
  const [show, setShow] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent setShow={setShow} />
        <ActionPage showActionPage={[show, setShow]} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path=':id' element={<ShowArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
