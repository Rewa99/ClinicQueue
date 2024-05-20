import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>At Clinic Queue, we're dedicated to reimagining the way you access healthcare. Our mission is to empower patients by providing a seamless platform for booking appointments, receiving timely reminders, and engaging with healthcare providers. We believe in making healthcare accessible, convenient, and patient-centered.</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Streamlined Appointment Scheduling</li>
                    <li>Timely Appointment Reminders</li>
                    <li>Comprehensive Ratings and Reviews</li>
                    <li>Convenient Virtual Consultations</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Seamless Patient Experience</li>
                    <li>Access to Health Records</li>
                    <li>Secure Payment Options</li>
                    <li>Dedicated Customer Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
