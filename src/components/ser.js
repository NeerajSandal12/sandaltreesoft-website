import React from "react";
import Style from "../Style/ser.module.css";
const ser = () => {
  return (
    <div id="services">
      {" "}
        {/* <Navbar/> */}
        <div className="service-section">
          <h1>Innovative Software Solutions</h1>
          <p >We can provide the below services.</p>
          <p >Resize the browser window to see that this page is responsive by the way.</p>
        </div>
      <section>
        <div class={Style.row}>
          <h2 class={Style.sectionHeading}>Our Services</h2>
        </div>
        <div class={Style.row}>
          <div class={Style.column}>
            <div class={Style.card}>
              <div class={Style.iconwrapper}>
                <img src="service2.jpg"></img>
              </div>
              <h3>Web Site Development</h3>
              <p>
                We use React, Angular, Vaadin, HTML5, CSS3 for UI development.
                The web sites can be viewed in many devices like laptops, smart
                phones, tablets. The web sites will be developed with all
                innovative web components.
              </p>
            </div>
          </div>
          <div class={Style.column}>
            <div class={Style.card}>
              <div class={Style.iconwrapper}>
                <img src="service3.jpg"></img>
              </div>
              <h3>Web applications</h3>
              <p>
                We use Rest API or SOAP web services for back end development.
                Based on the requirement we use Postgre, Oracle, Mongo DB,
                Neo4J. oAuth and SAML can be integrated in to API's. We focus on
                less response time from the API calls.
              </p>
            </div>
          </div>
          <div class={Style.column}>
            <div class={Style.card}>
              <div class={Style.iconwrapper}>
                <img src="service1.jpg"></img>
              </div>
              <h3>Mobile Apps</h3>
              <p>
                The cross platform mobile apps which will run on Android and iOS
                can be developed. we use Flutter, Android and Swift for mobile
                app development.
              </p>
            </div>
          </div>
          <div class={Style.column}>
            <div class={Style.card}>
              <div class={Style.iconwrapper}>
                <img src="service5.jpg"></img>
              </div>
              <h3>IoT & Robotics</h3>
              <p>
                Our Electronics engineers are developing innovative devices
                which will communicate with internet. As per the business we are
                ready to innovative IoT devices and apps. We are interested in
                manufacturing Robots which will make human life easier.
              </p>
            </div>
          </div>
          <div class={Style.column}>
            <div class={Style.card}>
              <div class={Style.iconwrapper}>
                <img src="service8.jpg"></img>
              </div>
              <h3>Artificial Intelligence, Machine Learning</h3>
              <p>
                AI and ML can be used in all apps. They can make user
                interaction with apps better.
              </p>
            </div>
          </div>

          <div class={Style.column}>
            <div class={Style.card}>
              <div class={Style.iconwrapper}>
                <img src="service9.jpg"></img>
              </div>
              <h3>Augmented Reality & Virtual Reality</h3>
              <p>
                VR and AR are new technologies which can be integrated in to
                human life. We can develop VR apps for any business scenario.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ser;
