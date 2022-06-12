import React from "react";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
     < >
         <Navbar/>

    <div className="container mb-5">
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>Have Some Question?</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
          <img
            src="./message.gif"
            alt="Contact Us"
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-6">
          <form>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleform"
                  aria-describedby="emailHelp"
                  placeholder="John Smith"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  type="password"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  row="3"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-outline-primary">
                Send Message
              </button>
            </form>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
