import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Countries from './Components/Countries';
import CountryInfo from './Components/CountryInfo';
import BaseLayout from './Components/BaseLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="countries" element={<Countries />} />
          <Route path="country/:code" element={<CountryInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
