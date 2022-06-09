import React from 'react'
import Header from '../Navbar/Header';
import Home from '../Auth/Home';
import Login from '../Auth/Login';
import Errror from '../Auth/Errror';
import {Routes,Route} from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import Product from '../product/Product';


const Rout = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
    <Route path='/' element={<Header />} />

      <Route path='/signup' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product' element={<Product />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>  )
}

export default Rout