import React from "react";
import "../Style/home.css";
import "animate.css";
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
              <a href="#about">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
