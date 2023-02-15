import React from "react";
import "../Style/home.css";
import "animate.css";
import Carousel from 'react-bootstrap/Carousel'
import { Link, Route, Routes } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div id="home" className="home_con">
        <div className="home_con_img">
          <div className="home-txt-con">
            <div className="home-text-1 animate__animated animate__pulse animate__slow animate__infinite">
              Sandal Tree Soft
            </div>
            <div className=" home-text-2 ">
              Our team members are expertise in the technology.
            </div>
            <div className=" home-text-2 ">
              We can provide high performance , low latency applications.{" "}
            </div>
            <div className=" home-text-2 ">
              We can provide software solutions for any business
            </div>
            <div className=" home-text-3 ">
              {/* <Link to="/contact">Contact Us</Link> */}
            </div>
          </div>
        </div>
      </div>
    {/* <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="app_dev_c.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="text-white">First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="web_dev_c.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="text-white">Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="iot_c.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="text-white 5rem" >Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  */}
    </>
  );
};

export default Home;
