import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Service from './components/Service';
import About from './components/About';
import Product from './components/Product';
import Blogs from './components/Blogs';
import Newslater from './components/Newslater';
import MyFooter from './components/Footer';





function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Service/>
      <About/>
      <Product/>
      <Blogs/>
      <Newslater/>
      <MyFooter/>
      
    </>
  );
};

export default App
