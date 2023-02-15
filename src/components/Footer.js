import React from "react";
import "../Style/footer.css";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const changeOcc = (e) => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <footer className="padding_4x">
        <div className="footer-container">
          <div className="f-con-child-1">
            <h1 className="f-h1">Sandal Tree Soft</h1>
            <h3>
              <FaMapMarkerAlt className="map-icon-footer" /> 2a, 2nd floor, Gat
              ko 1053, Ganesh nagar, Sairaj park 3, Awlahadi road, Wagholi, Pune
              - 412207, Maharastra, India
            </h3>
          </div>
          <div className="f-con-child-2">
            <span>About Us</span>
            <Link onClick={changeOcc} to={"/"}>
              Home
            </Link>
            <Link onClick={changeOcc} to={"/about"}>
              About
            </Link>
            <Link onClick={changeOcc} to={"/contact"}>
              Contact
            </Link>
            <Link onClick={changeOcc} to={"/services"}>
              Services
            </Link>
          </div>
          <div className="f-con-child-3">
            <span>Follow US</span>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/sandal-tree-soft"
            >
              <BsLinkedin
                href="https://www.linkedin.com/company/sandal-tree-soft"
                className="lin-footer"
              />
            </a>
            <a>
              <BsInstagram className="insta-footer" />
            </a>
            <a>
              <ImFacebook2 className="fb-footer" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
