import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // You can add filters or sort if needed
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

export default router;
