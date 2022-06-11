import React from 'react'
import Header from '../Navbar/Header';
import Home from '../Auth/Home';
import Login from '../Auth/Login';
import Errror from '../Auth/Errror';
import {Routes,Route} from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import Products from '../product/Products';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import Checkout from '../payment/Checkout';



const Rout = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Header />} />

      <Route path='/signup' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<Product/>} />
      <Route path='/products/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />




      <Route path='*' element={<Errror />} />
    </Routes>
  </>  )
}

export default Rout