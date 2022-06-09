import React from "react";
import Details from "../Auth/Details";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../../Style/Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light
     bg-white py-3 shadow-sm
    "
    >
      <div className="container">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Eshop{" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="navbar-brand fw-bold fs-4" to="/product">
            Products{" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="navbar-brand fw-bold fs-4" to="/about">
            About{" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="navbar-brand fw-bold fs-4" to="/contact">
            Contact{" "}
          </NavLink>
        </li>
        </ul>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"
         id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="buttons">
          <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i>Cart(0)
          </NavLink>
          </div>
          {/* <Details /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
