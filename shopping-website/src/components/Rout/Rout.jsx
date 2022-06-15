import React from "react";
import Home from "../Auth/Home";
import Login from "../Auth/Login";
import Errror from "../Auth/Errror";
import { Routes, Route } from "react-router-dom";
import Products from "../product/Products";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import Checkout from "../payment/Checkout";
import Contact from "../contact/Contact";
import About from "../About";
import Pay from "../payment/Pay";
import Navbar from "../Navbar/Navbar";

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/billing" element={<Pay />} />

        <Route path="*" element={<Errror />} />
      </Routes>
    </>
  );
};

export default Rout;
