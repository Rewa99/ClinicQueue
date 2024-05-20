// import { useState } from "react";
// import emailjs from "emailjs-com";

// const initialState = {
//   fullName: "",
//   email: "",
//   phoneNumber: "",
//   appointmentDate: "",
//   message: "",
// };

// export const BookAppointment = (props) => {
//   const [{ fullName, email, phoneNumber, appointmentDate, message }, setState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const clearState = () => setState({ ...initialState });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(fullName, email, phoneNumber, appointmentDate, message);

//     // Replace with your own Service ID, Template ID, and Public Key from your EmailJS account
//     emailjs
//       .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
//       .then(
//         (result) => {
//           console.log(result.text);
//           clearState();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div id="book-appointment">
//       <div className="container">
//         <div className="col-md-8">
//           <div className="row">
//             <div className="section-title">
//               <h2>Book Appointment</h2>
//               <p>Please fill out the form below to book your appointment.</p>
//             </div>
//             <form name="appointmentForm" validate onSubmit={handleSubmit}>
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       id="fullName"
//                       name="fullName"
//                       className="form-control"
//                       placeholder="Full Name"
//                       required
//                       value={fullName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       className="form-control"
//                       placeholder="Email"
//                       required
//                       value={email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="form-group">
//                     <input
//                       type="tel"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       className="form-control"
//                       placeholder="Phone Number"
//                       required
//                       value={phoneNumber}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="form-group">
//                     <input
//                       type="date"
//                       id="appointmentDate"
//                       name="appointmentDate"
//                       className="form-control"
//                       placeholder="Appointment Date"
//                       required
//                       value={appointmentDate}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="form-group">
//                     <textarea
//                       name="message"
//                       id="message"
//                       className="form-control"
//                       rows="4"
//                       placeholder="Additional Message"
//                       value={message}
//                       onChange={handleChange}
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-custom btn-lg">
//                 Book Appointment
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  appointmentDate: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, phoneNumber, appointmentDate, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phoneNumber, appointmentDate, message);
    
    // Replace with your own Service ID, Template ID, and Public Key from your EmailJS account
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Book an Appointment</h2>
                <p>
                  Please fill out the form below to book your appointment.
                </p>
              </div>
              <form name="appointmentForm" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        className="form-control"
                        placeholder="Appointment Date"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Additional Message"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                <li>
                  <a href="https://www.facebook.com/rewa.deshpande.54">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rewa-deshpande/">
                    <i className="fa fa-linkedin"></i>
                    </a>
                </li>
                <li>
                  <a href="https://github.com/Rewa99">
                    <i className="fa fa-github"></i>
                    </a>
                </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy;2023 Clinic Queue. Design by{" "}
            <a href="https://www.linkedin.com/in/rewa-deshpande/" rel="nofollow">
              Rewa Deshpande
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
