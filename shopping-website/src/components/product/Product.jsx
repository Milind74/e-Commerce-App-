import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart, searchData } from "../redux/action";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import "../../Style/Navbar.css";
import Footer from "../../Footer/Footer";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    console.log("milind", product);
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/data/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={75} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    const prodProps = { navigate, product };
    return (
      <>
        <div className="details col-md-6 my-5 py-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 my-5 py-5">
          <h4 className="text-uppercase text-black-50 ">{product.category}</h4>
          <h1 className="displaytitle">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-7 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/products/cart" className="btn btn-dark ms-2 py-2">
            Go to Cart
          </NavLink>
          <div>
            <Button {...prodProps} />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Product;
