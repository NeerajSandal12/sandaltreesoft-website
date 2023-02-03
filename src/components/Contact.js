import React from "react";
import "../Style/contact.css";
import {FiPhoneCall} from 'react-icons/fi'
import {CgMail} from 'react-icons/cg'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      {/* <> */}
      <h2 style={{textAlign:"center"}} >Feel Free to Contact us</h2>

      <div className="map-con">

        <iframe className="iframe"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3782.072952529445!2d73.98967911489352!3d18.570749487379803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM0JzE0LjciTiA3M8KwNTknMzAuNyJF!5e0!3m2!1sen!2sin!4v1675318563093!5m2!1sen!2sin"
          width="50%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      
      <div className="c-container">
       <div className="contact-box"> <h1></h1>
        <h3><FiPhoneCall className="phone-icon"/> +91 81248 91454 </h3>
        <h3><CgMail className="gmail-icon"/> info@sandaltreesoft.com </h3>
        <h3>
          <FaMapMarkerAlt className="map-icon"/> 2a, 2nd floor Gat ko 1053, Ganesh nagar Syder park 3,
          Awlahadu road, Wagholi, Pune - 412207
        </h3></div>
      </div>
      </div>
      {/* </Wrapper> */}
    </>
  );
};

export default Contact;
