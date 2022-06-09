import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'

const Product = () => {
  const[data,setData]=useState([])
  const[filter,setFilter]=useState(data)
  const[loading,setLoading]=useState(false)
  let componentMounted=true

  useEffect(()=>{
const getProducts=async()=>{
setLoading(true)
const response=await fetch("https://fakestoreapi.com/products")
if(componentMounted){
  setData(await response.clone().json())
  setFilter(await response.json())
  setLoading(false)
  console.log("filter=",filter)


}
return()=>{
  componentMounted=false
}
} 
getProducts()     
  },[])
  

  return (
    <div>
        
        <Navbar/>

    </div>
  )
}

export default Product