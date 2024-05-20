import React from "react";

export const Header = (props) => {
  const title = "Queue Swiftly, Care Deeply";
  const paragraph = "Clinic Queue is your trusted partner in revolutionizing medical appointments. We're committed to simplifying the process, reducing waiting times, and enhancing patient experience in healthcare facilities.";

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {title}
                  <span></span>
                </h1>
                <p>{paragraph}</p>
                <a
                  href="#About"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
