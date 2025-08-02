import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../style/BookingForm.css";

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    event: "",
    place: "",
    date: "",
    contact: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", formData);
      toast.success("Booking successful!");
      onClose();
    } catch (err) {
      toast.error("Failed to submit booking");
    }
  };

  return (
    <div className="booking-form-overlay">
      <div className="booking-form-container">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Event Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" onChange={handleChange} required />
          <input name="event" type="text" placeholder="Event Type" onChange={handleChange} required />
          <input name="place" type="text" placeholder="Place of Event" onChange={handleChange} required />
          <input name="date" type="date" onChange={handleChange} required />
          <input name="contact" type="tel" placeholder="Contact Number" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
