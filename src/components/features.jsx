import React from "react";

export const Features = (props) => {
  // Data for the features
  const featuresData = [
    {
      title: "Online Appointment Scheduling",
      text: "Easily book your appointments online with our intuitive scheduling system.",
      icon: "fa fa-calendar"
    },
    {
      title: "Appointment Reminders",
      text: "Receive timely email and SMS reminders for all your upcoming appointments.",
      icon: "fa fa-bell"
    },
    {
      title: "Virtual Consultations",
      text: "Consult with your doctor from the comfort of your home via secure video calls.",
      icon: "fa fa-video-camera"
    },
    {
      title: "Ratings and Reviews",
      text: "Provide feedback and read reviews to choose the best healthcare provider for you.",
      icon: "fa fa-star"
    }
  ];

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {featuresData.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



// import React from "react";

// export const Features = (props) => {
//   return (
//     <div id="features" className="text-center">
//       <div className="container">
//         <div className="col-md-10 col-md-offset-1 section-title">
//           <h2>Features</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
//                   {" "}
//                   <i className={d.icon}></i>
//                   <h3>{d.title}</h3>
//                   <p>{d.text}</p>
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };
