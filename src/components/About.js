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
          <p>Some text about who we are and what we do</p>
          <p>
            Our team members are expertise in 
            the technology. We can provide high performance ,
            low latency applications. We can provide software <br></br>
            solutions for any business
          </p>
        </div>
        <h2 style={{textAlign:"center"}} >
          Our Team Work in Software Development
        </h2>
        <center>
          <div className="about-row">
            <div className="wrap-card">
              <div className="card">
                <div className="about-container">
                  <h2>Sabaresan</h2>
                  <p className="title">CEO &amp; Founder</p>
                  <p>sabareesan@sandaltreesoft.com</p>
                  <p>
                  </p>
                </div>

            </div>
            <div className="card">
                <div className="about-container">
                  <h2>Priyanka Das</h2>
                  <p className="title">Software Developer</p>
                  <p>sabareesan@sandaltreesoft.com</p>
                  <p>
                  </p>
                </div>
            </div>
            </div>
            <div className="wrap-card">
            <div className="card">
                <div className="about-container">
                  <h2>Neeraj</h2>
                  <p className="title">Software Developer</p>
                  <p>neerajkumar.yadav@sandaltreesoft.com</p>
                  <p>
                  </p>
                </div>
            </div>
            <div className="card">
                <div className="about-container">
                  <h2>Snehal</h2>
                  <p className="title">Software Developer</p>
                  <p>snehal.bhale@sandaltreesoft.com</p>
                  <p>
                  </p>
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
