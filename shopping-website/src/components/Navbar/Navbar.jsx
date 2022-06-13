import React,{useState} from "react";
import Details from "../Auth/Details";
import { NavLink } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"

import "../../Style/Navbar.css";
import { searchData } from "../redux/action";

const Navbar = () => {
  const [timer, setTimer] = useState(undefined);//state for debouncing
  const dispatch = useDispatch();//dispath used to triger an action

  const state=useSelector((state)=>state.handleCart)

  const handlesearch = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        dispatch(searchData(e.target.value));
        console.log("debounce=", e.target.value);
      }, 300)
    );
  };


  if (state.length === 0) {
console.log("card not added ");
} else {
    console.log("card added succesfulyy");

    localStorage.setItem("mycart", JSON.stringify(state))

}
  console.log("state",state);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light
     bg-white py-3 shadow-sm
    "
    >
      <div className="container">
      <NavLink className="navbar-brand fw-bold fs-4" to="/">
        <img src="./logo.gif" alt="" height="100" width="100px" />
          </NavLink>
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
         
        </li>
        <li className="nav-item">
          <NavLink className="navbar-brand fw-bold fs-4" to="/products">
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
            onKeyUp={handlesearch}
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
          <NavLink to="/products/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
          </NavLink>

          </div>
          <Details />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
