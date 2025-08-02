import React, { useState } from "react";
import BookingForm from "../pages/BookingForm.jsx";
import "../style/BookNowButton.css";

const BookNowButton = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="book-now-wrapper">
      <button className="book-now-btn" onClick={() => setShowForm(true)}>Book Now</button>
      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default BookNowButton;