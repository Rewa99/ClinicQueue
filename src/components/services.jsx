import React from "react";

export const Services = (props) => {
  // Data for the services
  const servicesData = [
    {
      name: "Online Appointment Scheduling",
      text: "Easily book your appointments online with our intuitive scheduling system.",
      icon: "fa fa-calendar"
    },
    {
      name: "Appointment Reminders",
      text: "Receive timely email and SMS reminders for all your upcoming appointments.",
      icon: "fa fa-bell"
    },
    // {
    //   name: "Ratings and Reviews",
    //   text: "Provide feedback and read reviews to choose the best healthcare provider for you.",
    //   icon: "fa fa-star"
    // },
    {
      name: "Virtual Consultations",
      text: "Consult with your doctor from the comfort of your home via secure video calls.",
      icon: "fa fa-video-camera"
    }
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          Seamless healthcare experiences, tailored just for you
          </p>
        </div>
        <div className="row">
          {servicesData.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              <i className={d.icon}></i>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
