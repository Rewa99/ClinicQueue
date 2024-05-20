import React from "react";

export const Team = (props) => {
  // Team data with names and job titles
  const teamData = [
    { name: "Sanchit Deshpande", job: "Director", img: "01.jpg" },
    { name: "Jay Nanda", job: "Senior Developer", img: "02.jpg" },
    { name: "Minal Deshpande", job: "Product Manager", img: "03.jpg" },
    { name: "Asmita Mehta", job: "Marketing Manager", img: "04.jpg" }
  ];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Meet the dedicated minds shaping your healthcare experience.
          </p>
        </div>
        <div id="row">
          {teamData.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
              <div className="thumbnail">
              <img src={`/img/team/${d.img}`} alt="..." className="team-img" />
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
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

// export const Team = (props) => {
//   return (
//     <div id="team" className="text-center">
//       <div className="container">
//         <div className="col-md-8 col-md-offset-2 section-title">
//           <h2>Meet the Team</h2>
//           <p>
//           Meet the dedicated minds shaping your healthcare experience.
//           </p>
//         </div>
//         <div id="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
//                   <div className="thumbnail">
//                     {" "}
//                     <img src={d.img} alt="..." className="team-img" />
//                     <div className="caption">
//                       <h4>{d.name}</h4>
//                       <p>{d.job}</p>
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
