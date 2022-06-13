import {
  ADDITEM,
  DELITEM,
  SEARCHDATA_FAILURE,
  SEARCHDATA_REQUEST,
  SEARCHDATA_SUCCESS,
  
} from "./actiontype";
import axios from 'axios'

//for add item to cart
export const addCart = (product) => {
  return {
    type: ADDITEM,
    payload: product,
  };
};

//for delete item from cart
export const delCart = (product) => {
  return {
    type: DELITEM,
    payload: product,
  };
};

//action describing search requestdata

export const searchDataRequest = () => {

  return {
      type: SEARCHDATA_REQUEST,
  }
}
//action describing search successtdata

export const searchDataSuccess = (payload) => {

  return {
      type: SEARCHDATA_SUCCESS,
      payload
  }
}
//action describing search failuree data

export const searchDataFailure = (err) => {

  return {
      type: SEARCHDATA_FAILURE,
      payload: err
  }
}

export const searchData=(payload)=> dispatch=>{
  
  dispatch (searchDataRequest()) 
  return axios.get(`http://localhost:3001/data?category=${payload}`)
  .then((res)=>{
  console.log("search data",res.data)
  dispatch(searchDataSuccess(res.data))
      })
      .catch((err)=>{
          dispatch(searchDataFailure(err))
      })

  }
