// import React from "react";
// import "../style/Services.css"

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       url: "/birthday.jpeg",
//       title: "Birthday Planning",
//     },
//     {
//       id: 2,
//       url: "/anniversary.jpeg",
//       title: "Anniversary Planning",
//     },
//     {
//       id: 3,
//       url: "/campaign.jpeg",
//       title: "Camping Trip Planning",
//     },
//     {
//       id: 4,
//       url: "/corporate.jpeg",
//       title: "Corporate Events",
//     },
//     {
//       id: 5,
//       url: "/party.jpeg",
//       title: "Party Planning",
//     },
//     {
//       id: 6,
//       url: "/wedding.jpeg",
//       title: "Wedding Planning",
//     },
//   ];
//   return (
//     <>
//       <div className="services container">
//         <h2>OUR SERVICES</h2>
//         <div className="banner">
//           {services.map((element) => {
//             return (
//               <div className="item" key={element.id}>
//                 <h3>{element.title}</h3>
//                 <img src={element.url} alt={element.title} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;



import React from "react";
import { Link } from "react-router-dom";
import "../style/Services.css"

const Services = () => {
  const services = [
    { id: 1, slug: "birthday", url: "/birthday.jpeg", title: "Birthday Planning" },
    { id: 2, slug: "anniversary", url: "/anniversary.jpeg", title: "Anniversary Planning" },
    { id: 3, slug: "camping", url: "/campaign.jpeg", title: "Camping Trip Planning" },
    { id: 4, slug: "corporate", url: "/corporate.jpeg", title: "Corporate Events " },
    { id: 5, slug: "party", url: "/party.jpeg", title: "Party Planning" },
    { id: 6, slug: "wedding", url: "/wedding.jpeg", title: "Wedding Planning" },
  ];

  return (
    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {services.map((service) => (
          <div className="item" key={service.id}>
            <h3>{service.title}</h3>
            <img src={service.url} alt={service.title} />
            <Link to={`/services/${service.slug}`} className="learn-more-btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
