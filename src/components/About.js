import React, { useEffect } from "react";
import '../Style/about.css'
import Navbar from "./Navbar";
const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <>
      <div className="about">
        {/* <Navbar/> */}
        <div  id="about" className="service-section">
          {/* <h1>Welcome to Sandal Tree Soft</h1> */}
          {/* <p>Some text about who we are and what we do</p> */}
          <p>
            Our team members are expertise in 
            the technology. </p>
            <p>We can provide high performance ,
            low latency applications.</p>
            <p> We can provide software 
            solutions for any business
          </p>
        </div>
        <h2 style={{textAlign:"center"}} >
         Meet Our Team 
        </h2>
        <center>
          <div className="about-row">
            <div className="wrap-card">
              <div className="about-card">
                <div className="about-container">
                  <h2>Sabaresan</h2>
                  <p className="title">CEO &amp; Founder</p>
                  {/* <p>sabareesan@sandaltreesoft.com</p> */}
                  <a href="mailto:sabareesan@sandaltreesoft.com">Contact</a>

                </div>

            </div>
            <div className="about-card">
                <div className="about-container">
                  <h2>Priyanka Das</h2>
                  <p className="title">Software Developer</p>
                  {/* <p>priyanka.krishna.das@sandaltreesoft.com</p> */}
                  <a href="mailto:priyanka.krishna.das@sandaltreesoft.com">Contact</a>

                </div>
            </div>
            </div>
            <div className="wrap-card">
            <div className="about-card">
                <div className="about-container">
                  <h2>Neeraj</h2>
                  <p className="title">Software Developer</p>
                  {/* <p>neerajkumar.yadav@sandaltreesoft.com</p> */}
                  <a href="mailto:neerajkumar.yadav@sandaltreesoft.com">Contact</a>
                </div>
            </div>
            <div className="about-card">
                <div className="about-container">
                  <h2>Snehal</h2>
                  <p className="title">Software Developer</p>
                  {/* <p>snehal.bhale@sandaltreesoft.com</p> */}
                  <a href="mailto:snehal.bhale@sandaltreesoft.com">Contact</a>

                </div>
            </div>
            </div>
                {/* <div className="about-container">
                  <h2>Priyanka Das</h2>
                  <p className="title">Software Developer</p>
                  <p>priyanka.krishna.das@sandaltreesoft.com</p>
                  <p>
                    <button className="about-button">Contact</button>
                  </p>
              </div>
          </div>
              <div className="card">
                <div className="about-container">
                  <h2>Neeraj Kumar Yadav</h2>
                  <p className="title">Software Developer</p>
                  <p>neerajkumar.yadav@sandaltreesoft.com</p>
                  <p>
                    <button className="about-button">Contact</button>
                  </p>
                </div>
          </div>
          <div className="row">
                <div className="about-container">
                  <h2>Snehal</h2>
                  <p className="title">Software Developer</p>
                  <p>snehal.bhale@sandaltreesoft.com</p>
                  <p>
                    <button className="about-button">Contact</button>
                  </p>
                </div>
              </div> */}
          </div>
        </center>
      </div>
    </>
  );
};

export default About;
