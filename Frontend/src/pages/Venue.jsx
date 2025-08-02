import React from "react";
import "../style/Venue.css";

const venueData = [
  {
    name: "Backwater Bliss Resort",
    location: "Alleppey",
    image: "/images/ven-1.avif",
  },
  {
    name: "Beachfront Mandap",
    location: "Kovalam",
    image: "/images/ven-2.jpg",
  },
  {
    name: "Traditional Kerala Hall",
    location: "Kochi",
    image: "/images/ven-3.jpg",
  },
   {
    name: "Kayyalas Courtyard",
    location: "Pazhuvil, Thrissur",
    image: "/images/ven-4.jpg",
  },
   {
    name: "Pariyadan's Royal Garden",
    location: "Kuttikad, Pariyaram, Thrissur",
    image: "/images/ven-5.jpg",
  },
   {
    name: "Orchard Sea View Resort",
    location: "Snehatheeram beach, Thalikulam, Thrissur",
    image: "/images/ven-6.jpg",
  },
   {
    name: "Rajavalsam",
    location: "Guruvayur, Thrissur",
    image: "/images/ven-7.jpg",
  },
   {
    name: "Devi Event Resort",
    location: "Mayilaadum Kunnu, Avanoor, Thrissur",
    image: "/images/ven-8.jpg",
  },

];

const VenuePage = () => {
  return (
    <div className="venue-page">
      {/* Hero Section */}
      <div className="venue-hero">
        <div className="venue-hero-content">
          <h1>Best Event & Wedding Venues in Kerala</h1>
          <p>
            Looking for a perfect venue in Kerala? Our updated list features the most stunning locations and venue types, from backwater and beach resorts to banquet halls and traditional local mandapas. Find your dream event venue in Kerala today!
          </p>
        </div>
      </div>

      {/* Venue Cards Section */}
      <div className="venue-list-section">
        <h2>Featured Venues</h2>
        <div className="venue-cards">
          {venueData.map((venue, index) => (
            <div key={index} className="venue-card">
              <img src={venue.image} alt={venue.name} />
              <div className="venue-card-details">
                <h3>{venue.name}</h3>
                <p>{venue.location}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Why Choose Melodia Section */}
<div className="why-melodia-section">
  <h2>Why Choose Planistry Event Management for Booking Your Event Venue in Kerala?</h2>
  <p className="why-intro">
    Choosing the perfect event and wedding venue in Kerala is important for a memorable celebration. Melodia Event Management professionals simplify the process with expert venue booking services in Kerala, offering exclusive access to Kerala’s top event venues, from luxurious event venues to normal or budget-friendly venues in Kerala.
  </p>
  <ul className="melodia-points">
    <li><strong>Exclusive Access</strong> to Top Event Venues in Kerala</li>
    <li><strong>Customized Selection</strong> for Your Dream Event and Wedding Venues in Kerala</li>
    <li><strong>Hassle-Free Booking</strong> services & Negotiation</li>
    <li><strong>All-inclusive Wedding Venue Services</strong> in Kerala & Wedding Packages</li>
    <li><strong>Expert Wedding Planning</strong> services</li>
    <li><strong>Exclusive Discounts:</strong> Get Better Rates on Event & Wedding Venues in Kerala Compared to Direct Booking</li>
  </ul>
</div>

    </div>
  );
};

export default VenuePage;
