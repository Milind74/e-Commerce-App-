import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import "../../Style/Navbar.css";

import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(0);

  let componentMounted = true;
  console.log("data", data);
  const images = [
    "https://cdn.shopify.com/s/files/1/2028/6907/files/Ketnipz_Summer_Ad_2021_Banner_2048x.gif?v=1625867600",
    "https://cdn.shopify.com/s/files/1/2028/6907/files/Cosy_Banner_3_2048x.gif?v=1622572252",
    "https://cdn.shopify.com/s/files/1/2028/6907/files/Cozy_Banner_2_d988295a-7532-4616-a808-57cc0d91e14c_2048x.gif?v=1622572308",
  ];
  function handleImage(x) {
    let f = image + x;
    if (f === -1) {
      f = images.length - 1;
    } else if (f === images.length) {
      f = 0;
    }
    setImage(f);
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3001/data");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log("filter=", filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Mens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Womens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className=" productcard col-md-3 mb-4">
                <div
                  className="containerchild2 card h-100 text-center p-4"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className=" product_card__title card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className=" product_card__price card-text lead fw-bold">${product.price}</p>

                    <div className="size">
                      <span className="span1">s</span>
                      <span className="span1">m</span>
                      <span className="span1">l</span>
                      <span className="span1">xl</span>
                    </div>
                    <NavLink to={`/products/${product.id}`}>
                      <button className=" backbtn btn btn-dark ms-2 py-2">
                        buy now
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <Navbar />

      <div className="banner">
        <img src={images[image]} height="500" width="100%" alt="" />
        <p
          className="prev"
          onClick={() => {
            handleImage(-1);
          }}
        >
          <FaLessThan />
        </p>
        <p
          onClick={() => {
            handleImage(+1);
          }}
        >
          {" "}
          <FaGreaterThan />
        </p>
      </div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;