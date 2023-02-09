import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import "../Style/Navbar.css";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [click, setClick] = useState(false);
  const [top, setTop] = useState(false);
    let {id}=useParams();
  const changeOcc = (e) => {
    setClick(false);
    console.log("sdkmsdmsd : "+id)
    // if(window.scrollY>=0){
    //     alert
    // }
    // else{
    //   window.screenTop(0)
    // }
    // Incre()

    // console.log(e.target.text)
    setTop(e.target.text);
  };
   function  Incre() {
  
    window.scrollBy(0, -80); 
  //  alert("cladl")
  }
// useEffect(()=>{
//   window.scrollTo(0, 00);
// },[top])
  useEffect(() => {
    if(top == "Home"){
    window.scrollTo(0,0);}
    // if(top == "Services"){
    //   window.scrollTo(0,500);}
    //   if(top == "About"){
    //     window.scrollTo(0,3000);}
    //     if(top == "Contact"){
    //       window.scrollTo(0,0);}
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
  // console.log(isScroll);

  return (
    <>
      <div id="navbar" className={isScroll ? "nav-main active" : "nav-main"}>
        <div className="nav-container">
          <div className="main-logo">
            <a href="#"><img className="logo" src="logo.png" /></a>
            <span className="txt-org">Sandal Tree Soft</span>
            </div>
            <div className={click ? " main-menu-n-active n-active" : "main-menu"}>
              <a href="#home" onClick={changeOcc} >Home</a>
              <a href="#services" onClick={changeOcc} >Services</a>
              <a href="#about" onClick={changeOcc} >About</a>
              <a href="#contact"onClick={changeOcc} >Contact</a>
              </div>
            {/* <Link to={"/"}>
              <img className="logo" src="logo.png" />
            </Link>
            <span className="txt-org">Sandal Tree Soft</span>
          </div>
          <div className={click ? " main-menu-n-active n-active" : "main-menu"}>
            <Link onClick={changeOcc} to="">
              Home
            </Link>
            <Link onClick={changeOcc} to="About">
              About
            </Link>
            <Link onClick={changeOcc} to="contact">
              Contact
            </Link>
            <Link onClick={changeOcc} to="services">
              Services
            </Link>
          </div> */}
          <div onClick={() => setClick(!click)} className="right-side">
            {click ? <RxCross1 /> : <RxHamburgerMenu />}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
