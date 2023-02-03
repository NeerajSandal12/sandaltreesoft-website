import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import "../Style/Navbar.css";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [click, setClick] = useState(false);
  const [top, setTop] = useState("");

  const changeOcc = (e) => {
    setClick(false);
    // if(window.scrollY>=0){
    //     alert
    // }
    // else{
    //   window.screenTop(0)
    // }
    // console.log(e.target.text)
    setTop(e.target.text);
  };

  useEffect(() => {
    if(top == "Home"){
    window.scrollTo(0,0);}
    if(top == "Services"){
      window.scrollTo(0,0);}
      if(top == "About"){
        window.scrollTo(0,0);}
        if(top == "Contact"){
          window.scrollTo(0,0);}
  }, [top]);
  useEffect(() => {
    const navBar = () => {
      if (window.scrollY >= 3) {
        setIsScroll(true);
        setTop("")
      } else if (window.scrollY < 3) {
        setIsScroll(false);
        setTop("")
      }
    };
    window.addEventListener("scroll", navBar);
    return () => {
      window.removeEventListener("scroll", navBar);
    };
  }, []);
  console.log(isScroll);

  return (
    <>
      <div className={isScroll ? "nav-main active" : "nav-main"}>
        <div className="nav-container">
          <div className="main-logo">
            <Link to={"/"}>
              <img className="logo" src="logo.png" />
            </Link>
            <span className="txt-org">Sandal Tree Soft</span>
          </div>
          <div className={click ? " main-menu-n-active n-active" : "main-menu"}>
            <Link onClick={changeOcc} to={"/"}>
              Home
            </Link>
            {/* <Link onClick={changeOcc} to={"/services"}>
              Services
            </Link> */}
            <Link onClick={changeOcc} to={"/About"}>
              About
            </Link>
            <Link onClick={changeOcc} to={"/contact"}>
              Contact
            </Link>
          </div>
          <div onClick={() => setClick(!click)} className="right-side">
            {click ? <RxCross1 /> : <RxHamburgerMenu />}
            {/* <Link to={"/"}>Login</Link>
            <Link to={"/"}>SignUp</Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
