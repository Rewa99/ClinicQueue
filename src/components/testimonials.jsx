import React from "react";

export const Testimonials = () => {
  // Testimonials data
  const testimonialsData = [
    {
      name: "Jane Smith",
      text: "Amazing service! Clinic Queue has completely changed the way I book medical appointments. It's so convenient and user-friendly. Highly recommend!",
      img: "img/testimonials/01.jpg"
    },
    {
      name: "Michael Johnson",
      text: "I've been using Clinic Queue for a while now, and I'm impressed with how efficient it is. The appointment reminders are a lifesaver!",
      img: "img/testimonials/02.jpg"
    },
    {
      name: "Sarah Williams",
      text: "Clinic Queue has made managing my healthcare appointments a breeze. The virtual consultations are especially helpful for someone like me with a busy schedule.",
      img: "img/testimonials/03.jpg"
    },
    {
      name: "Emily Brown",
      text: "I'm so glad I found Clinic Queue. The online scheduling feature is incredibly easy to use, and I love being able to leave reviews for the healthcare providers.",
      img: "img/testimonials/04.jpg"
    },
    {
      name: "David Rodriguez",
      text: "This service has been a game-changer for me. I can't imagine going back to the old way of booking appointments. Thank you, Clinic Queue!",
      img: "img/testimonials/05.jpg"
    },
    {
      name: "Jennifer Martinez",
      text: "I appreciate how Clinic Queue puts the patient first. The team is responsive, and the platform is intuitive. Keep up the great work!",
      img: "img/testimonials/06.jpg"
    }
  ];

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-image">
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                  <div className="testimonial-meta">- {testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



// import React from "react";

// export const Testimonials = (props) => {
//   return (
//     <div id="testimonials">
//       <div className="container">
//         <div className="section-title text-center">
//           <h2>What our clients say</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   <div className="testimonial">
//                     <div className="testimonial-image">
//                       {" "}
//                       <img src={d.img} alt="" />{" "}
//                     </div>
//                     <div className="testimonial-content">
//                       <p>"{d.text}"</p>
//                       <div className="testimonial-meta"> - {d.name} </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
