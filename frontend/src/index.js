import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import './index.css';
import Homepage from './landingpage/home/Homepage';
import Pricingpage from './landingpage/pricing/Pricingpage';
import About from './landingpage/about/About';
import Productspage from './landingpage/products/Productspage';
import Signup from './landingpage/signup/Signup';
import Support from './landingpage/support/Support';
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 /* <React.StrictMode>
   <HomePage />
  </React.StrictMode>*/
  <BrowserRouter>
  <Navbar/>
    
  <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/about" element={<About />} />
  <Route path="/product" element={<Productspage />} />
  <Route path="/pricing" element={<Pricingpage />} />
  <Route path="/support" element={<Support />} />
  
  </Routes>
   
  <Footer/>
  </BrowserRouter>
  
);