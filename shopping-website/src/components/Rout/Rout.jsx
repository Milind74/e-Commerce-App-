import React from 'react'
import Header from '../Auth/Header';
import Home from '../Auth/Home';
import Login from '../Auth/Login';
import Details from '../Auth/Details';
import Errror from '../Auth/Errror';
import {Routes,Route} from "react-router-dom"


const Rout = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>  )
}

export default Rout