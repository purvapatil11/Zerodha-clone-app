import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Landing_page/home/HomePage.js';
import Signup from './Landing_page/Signup/Signup.js';
import About from './Landing_page/about/AboutPage.js';
import Product from './Landing_page/products/products.js';
import Support from './Landing_page/support/Support.js';
import Navbar from './Landing_page/Navbar.js';
import NotFound from './Landing_page/NotFounding.js';
import Footer from './Landing_page/Footer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/support" element={<Support/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);


