import express from "express";
import { sendMessage, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", sendMessage);
router.get("/all", getAllContacts); // ✅ Add this line

export default router;
