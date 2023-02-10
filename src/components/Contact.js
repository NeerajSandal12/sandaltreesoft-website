import React, { useEffect, useState } from "react";
import "../Style/contact.css";
import {FiPhoneCall} from 'react-icons/fi'
import {CgMail} from 'react-icons/cg'
import {FaMapMarkerAlt} from 'react-icons/fa'
import { HiOutlineLogin } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { BiLock } from "react-icons/bi";
// import firebaseDB from '../firebase'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
// import '../Style/login.css'
const Contact = () => {

const[data,setdata]=useState({
  uname:"",
  email:"",
  number:"",
  msg:""
});
const {uname,email,number,msg}=data;
const handleChange = (e) => {
   let name=e.target.name;
   let value=e.target.value;
   setdata({...data,[name]:value})
}
const[password,setPassword]=useState('');

const handleSubmit =  (e)=>{
    e.preventDefault();
    const {uname,email,number,msg}=data;
    if( !uname||!email || !number || !msg)
    {
      toast.error("Please Enter Something")
      return
    }
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
      toast.error("Enter valid Email");
      return
    }
    if (!number.length===10) {
      toast.error("Enter valid number");
      return
    }
    const res=  fetch("https://neeraj-aac67-default-rtdb.firebaseio.com/contactDb.json",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        uname,
        email,
        number,
        msg
      })
    })
    // const resp=fetch("https://neeraj-aac67-default-rtdb.firebaseio.com")
    if(res){
      setdata({uname:"",
      email:"",
      number:"",
      msg:""})
      toast.success("Data Sent Successfully")
    }
    else{
      toast.success("Sorry, Some Error Occured")
    }

}
  return (
    
    <div id="contact">
      <div className="con-img_fi">
        <div className="black_opacity">
      </div>
      <h2> Contact With Us</h2>
      </div>
      <ToastContainer position="top-center"/>
      {/* <div className="map-con"> */}
        {/* -----------------------------------------------Contact and input field container start  -------------------------------- */}
      
      <div className="c-container">
        <div className="con-main-df">
        <div className="contact-details">
        <div className="add_icons">
        <FiPhoneCall className="phone-icon"/>   
        <CgMail className="gmail-icon"/>
        <FaMapMarkerAlt className="map-icon"/>
        </div>
        <div className="address_txt">
        <a href="tel:7305694672"> +91 73056 94672</a>
        <a href={`mailto:info@sandaltreesoft.com`} target="_blank">info@sandaltreesoft.com</a>
        <a href={"#"}>2a, 2nd floor Gat ko 1053, Ganesh nagar Syder park 3,
          Awlahadu road, Wagholi, Pune - 412207</a>
        </div>
        {/* <div className="contact-box"> 
        <h3><FiPhoneCall className="phone-icon"/><a href="tel:7305694672"> +91 73056 94672</a> </h3>
        <h3><CgMail className="gmail-icon"/><a href={`mailto:info@sandaltreesoft.com`} target="_blank">info@sandaltreesoft.com</a></h3>
        <h3>
          <FaMapMarkerAlt href="mailto" className="map-icon"/> 2a, 2nd floor Gat ko 1053, Ganesh nagar Syder park 3,
          Awlahadu road, Wagholi, Pune - 412207
        </h3>
        </div> */}
         </div>
        <div className="hor-con"></div>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="con-input-field">
        <h1>Send us a message</h1>
          <div className="inputs-cont">
          <input type="text" name="uname" value={uname} onChange={handleChange} placeholder="Your Name"/>
          <input type="gmail" name="email" value={email}  onChange={handleChange}  placeholder="Your Email"/>
          <input type="text" name="number" value={number}  onChange={handleChange}  placeholder="Your Mobile No"/>
          <textarea placeholder=" Your Message" name="msg" value={msg}  onChange={handleChange}  ></textarea>
          <button onClick={handleSubmit}>Send Message</button>
          
          </div>
        </div>
        {/* </form> */}
        </div>
        </div>
        {/* -----------------------------------------------Contact details Start -------------------------------- */}
       {/* <div className="contact-box"> <h1></h1>
        <h3><FiPhoneCall className="phone-icon"/> +91 73056 94672 </h3>
        <h3><CgMail className="gmail-icon"/>info@sandaltreesoft.com </h3>
        <h3>
          <FaMapMarkerAlt href="mailto" className="map-icon"/> 2a, 2nd floor Gat ko 1053, Ganesh nagar Syder park 3,
          Awlahadu road, Wagholi, Pune - 412207
        </h3>
        </div> */}
        {/* -----------------------------------------------Contact details End-------------------------------- */}

        {/* -----------------------------------------------Input Field Start-------------------------------- */}
        {/* <div className="con-input-forms">
        <div className="input-main">
        <div className="input-container">
          <section id="input-content">
            <form action="">
              <span className="login-icon">
                {" "}
              </span>
              <h1>Send MSG To US</h1>
              <div>
                <span className="user-icon">
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Name *"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="name"
                />
              
              </div>
              <div>
                <span className="lock-icon">
                  <BiLock />
                </span>
                <input
                  type="email"
                  placeholder="Email *"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  id="email"
                />
              </div>
              <div>
                <span className="lock-icon">
                  <BiLock />
                </span>
                <input
                  type="number"
                  placeholder="Mobile Number *"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  id="number"
                />
              </div>
              <div>
                <span className="lock-icon">
                  <BiLock />
                </span>
                <textarea
                  type="textarea"
                  placeholder="Messages *"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  id="message"
                />
              </div>
              <div>
                <input type="submit" value="Send Message" />
                <div className="links">
          
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
        </div> */}
        {/* -----------------------------------------------Input Field End-------------------------------- */}
      <div className="map-iframe">
      <iframe className="iframe"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3782.072952529445!2d73.98967911489352!3d18.570749487379803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM0JzE0LjciTiA3M8KwNTknMzAuNyJF!5e0!3m2!1sen!2sin!4v1675318563093!5m2!1sen!2sin"
          width="80%"
          height="700"
          style={{border:0}}
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      {/* </div> */}
      {/* </Wrapper> */}


      
    </div>
  );
};

export default Contact;
