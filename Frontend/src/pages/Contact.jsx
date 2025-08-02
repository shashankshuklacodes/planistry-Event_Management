import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../style/Contact.css"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
  
    // ✅ Frontend validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
  
    // ✅ Log for debugging
    console.log({ name, email, subject, message });
  
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contacts", // ✅ make sure there is NO space
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
  
      toast.success(res.data.message ||"Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong!"
      );
    }
  };
  

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Kanpur, UttarPradesh</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91 6392431661</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>planistry04@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14357.581907434863!2d80.3209202!3d26.4499234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3868d0a53b37%3A0x46abed038e7024d4!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1646046123456"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Enter your working E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;