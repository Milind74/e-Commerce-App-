import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink,useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { addCart, delCart } from "../redux/action";


const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("state1", state);
  
const handlegoback=()=>{
  navigate(-1)
}

  const handleclose = (item) => {
    dispatch((delCart(item)));
  };

  const handleadd=(cartitem)=>{
dispatch(addCart(cartitem))
console.log("added increment");
  }
  const handlesub=(cartitem)=>{
    dispatch(delCart(cartitem))
console.log("added increment");

  }


  const cartitems = (cartitem) => {
    return (
      <div className="px-4 my-5 bg-light-rounded-3 " key={cartitem.id}>
        <div className="container py-4 ">
          <button
            onClick={() => handleclose(cartitem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="added-item col-md-4">
              <img
                src={cartitem.image}
                alt={cartitem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartitem.title}</h3>
              <p className="lead fw-bold">
                {cartitem.qty} X {cartitem.price}=$
                {cartitem.qty * cartitem.price}
              </p>
              <button className="btn btn-outline-dark me-4" onClick={(e)=>{handleadd(cartitem)}} ><i className="fa fa-plus"></i></button>

              <button className="btn btn-outline-dark me-4" onClick={(e)=>{handlesub(cartitem)}} ><i className="fa fa-minus"></i></button>


            </div>
          </div>
        </div>
        
      </div>
    );
  };

  const emptycart = () => {
    return (
      <div className="px-4 my-5 bg-light-rounded-3 py-5 ">
        <div className="container py-4 ">
          <div className="row">
            <h3>your cart is empty</h3>

          </div>
        </div>
      </div>
    );
  };
  const button=()=>{

    return(
      <div className="  container ">
        <div className="row">
          <NavLink to ="/checkout" className="payment btn btn-outline-primary
          mb-5 w-25">Proceed to checkout</NavLink>
        </div >
            <button  className="back backbtn btn btn-dark ms-2 py-2" onClick={handlegoback}>go back</button>
      </div>
    )
  }
  return (
    <>
      {state.length === 0 && emptycart()}
      {state.length !== 0 && state.map(cartitems)}
      {state.length !== 0 && button()}

    </>
  );
};

export default Cart;
