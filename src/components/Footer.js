import React from "react";
import "../Style/footer.css";
import {BsInstagram} from 'react-icons/bs'
import {ImFacebook2} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="padding_4x">
        <div className="footer-container">
          <div className="f-con-child-1">
            <h1 className="f-h1">Sandal Tree Soft</h1>
            <h3>
            <FaMapMarkerAlt className="map-icon-footer"/> 2a, 2nd floor Gat ko 1053 , Ganesh nagar Syder park 3,
              Awlahadu road, Wagholi, Pune - 412207
            </h3>
          </div>
          <div className="f-con-child-2">
            <span>About Us</span>
            <Link to={"/about"}>About</Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="f-con-child-3">
            <span>Follow US</span>
            <h3><BsInstagram className="insta-footer"/></h3>
            <h3><ImFacebook2 className="fb-footer"/></h3>
            <h3><BsLinkedin className="lin-footer"/></h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
