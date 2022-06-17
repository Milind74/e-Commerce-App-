import React,{useState} from "react";
import Details from "../Auth/Details";
import { NavLink } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import Products from "../product/Products";
import axios from 'axios';

import "../../Style/Navbar.css";
// import { searchData } from "../redux/action";

const Navbar = ({setSearchedData}) => {
  const [timer, setTimer] = useState(undefined);//state for debouncing
  // const dispatch = useDispatch();//dispath used to triger an action
  

  const state=useSelector((state)=>state.handleCart)



  const handlesearch = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        (searchData(e.target.value));
        console.log("debounce=", e.target.value);
        
      }, 300)
    );
  };

  const searchData = (payload)=>{  
    return axios.get(`http://localhost:3001/data?category=${payload}`)
    .then((res)=>{
    console.log("search data",res.data)
    setSearchedData(res.data)})
    }

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
     bg-white shadow-sm
    "
    >
      {/* <div className="container"> */}
      <NavLink className="navbar-brand fw-bold fs-4" to="/">
        <img src="./shoplogo.jpg" alt="" height="100" width="100px" />
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

        
        <div className="collapse navbar-collapse"
         id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input style={{width:"300px",marginLeft:"70px"}}
            onKeyUp={handlesearch}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
         
          </form>
          <div className="navright">
          <div className="buttons">
          <NavLink to="/products/cart" className=" btncart btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
          </NavLink>

          </div>
          <Details />
          </div>
        </div>
      {/* </div> */}
      


    </nav>
  );
};

export default Navbar;
