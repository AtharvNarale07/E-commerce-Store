import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from '../src/pages/Home';
import About from '../src/pages/About'
import Cart from '../src/pages/Cart'
import Collection from '../src/pages/Collection'
import Contact from '../src/pages/Contact'
import Login from '../src/pages/Login'
import Orders from '../src/pages/Orders'
import PlaceOrder from '../src/pages/PlaceOrder'
import Product from '../src/pages/Product'
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md: px-[7vw] lg: px-[9vw]">
      
      <Navbar/>
      <SearchBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/place-order" element={<PlaceOrder/>}/>
          <Route path="/orders" element={<Orders/>}/> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;

