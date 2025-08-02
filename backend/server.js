import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoute.js';
import authRoute from "./routes/authRoute.js";
import bookingRoutes from "./routes/bookings.js";
import userRoutes from "./routes/userRoute.js";
dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/contacts', contactRoutes);
app.use("/api/auth", authRoute);
app.use("/api", bookingRoutes);
app.use("/api/users", userRoutes); 

// MongoDB Connection and Server Start
const startServer = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/EventManagement');
    console.log('MongoDB connected successfully');

    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

startServer();
