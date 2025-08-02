// backend/controllers/bookingController.js
import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully" });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ message: "Booking failed" });
  }
};
