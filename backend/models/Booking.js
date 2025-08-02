// models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  event: { type: String, required: true },
  place: { type: String, required: true },
  date: { type: Date, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
