import Contact from "../models/contactModel.js";
import sendEmail from "../utils/sendEmail.js";
//import transporter from "../config/emailTransporter.js"

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Contact.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

 // Email content

    const welcomeSubject = "🎉 Welcome to Planistry!";
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #00bfa6;">Hi ${name},</h2>
        <p>Thank you for reaching out to <strong>Planistry</strong>. We're thrilled to have you with us!</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Meanwhile, feel free to explore our platform and services.</p>
        <br/>
        <p>Warm regards,</p>
        <p style="color: #00796b;"><strong>The Planistry Team</strong></p>
        <hr />
        <small>This is an automated email. Please do not reply to this message.</small>
      </div>
    `;

    await sendEmail(email, welcomeSubject, html);

    res.status(201).json({ message: "Message  subitted and welcome email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error. Try again later." });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact data" });
  }
};
