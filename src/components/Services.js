import React from 'react'
import '../Style/services.css'

const Services = () => {
  return (
      <>
        <div className="service-section">
          <h1>Welcome to Sandal Tree Soft</h1>
          <h1>Innovative Software Solutions</h1>
          <p >We can provide the below services.</p>
          <p >Resize the browser window to see that this page is responsive by the way.</p>
        </div>
        <h2 style={{textAlign:"center"}} >Our Services</h2>

        <div className="ser-main-con">
          <div className="card">
            <img src="service2.jpg" alt="Jane"   />
            <div className="ser-container">
              <h2 >Web site development</h2>
            </div>
        </div>
          <div className="card">
            <img src="service3.jpg" alt="Jane"  />
            <div className="ser-container">
              <h2 >Web applications</h2>
          </div>
        </div>
          <div className="card">
            <img src="service1.jpg" alt="Jane"  />
            <div className="ser-container">
              <h2 >Mobile apps ( Android &amp; iOS)</h2>
            </div>
          </div>
        </div>
        <div className="ser-main-con">
          <div className="card">
            <img src="service5.jpg" alt="Jane" />
            <div className="ser-container">
              <h2 >IoT &amp; Robotics</h2>
            </div>
        </div>
          <div className="card">
            <img src="service8.jpg" alt="Jane"  />
            <div className="ser-container">
              <h2 >Artificial Intelligence, Machine Learning</h2>
            </div>
        </div>
          <div className="card">
            <img src="service9.jpg" alt="Jane" />
            <div className="ser-container">
              <h2 >Augmented Reality, Virtual Reality</h2>
            </div>
        </div>
        </div>
      </>
    

  )
}

export default Services