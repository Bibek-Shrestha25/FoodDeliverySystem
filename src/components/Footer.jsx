import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <div>
              <Link to="/Aboutus">
                <h5>About Us</h5>
              </Link>

              <p>
                Our shop provides high-quality delicious utility of products.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <div>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Phone: +977 9865214825</li>
                <li>Email: Foodie@gmail.com</li>
                <li>Address: Lagankhel, Lalitpur</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-between">
            <div>
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-facebook"></i>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <i className="bi bi-twitter"></i>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <i className="bi bi-instagram"></i>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
