import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const About = () => {
  return (
      <>
      <Navbar/>
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              convallis, nisl ultrices commodo sollicitudin, sem orci laoreet
              metus, vel dictum purus metus vitae diam. Vestibulum nec nibh
              congue, maximus ante sit amet, vestibulum est. Donec arcu massa,
              condimentum ac nunc sit amet, varius luctus mi. Etiam convallis
              ligula nec ante ullamcorper molestie. Nulla porttitor arcu vitae
              ipsum sodales, vitae volutpat lacus auctor. Quisque viverra sit
              amet metus nec scelerisque. Sed rhoncus euismod quam, ut pretium
              metus varius ut. Nulla urna arcu, dignissim ut tellus sed,
              vestibulum mollis arcu. Cras et molestie nulla. Aliquam non lectus
              velit. 
              
            </p>
            <NavLink to="/contact" 
            className="btn btn-outline-primary px-3"> Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex  justify-content-center">
              <img src="./desk1.gif" alt="About Us" height="400px"width="400px" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
