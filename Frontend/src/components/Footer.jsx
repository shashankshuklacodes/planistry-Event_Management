import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdOutlineCopyright } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <div className="footer-title">
          <h1>PLANISTRY</h1>
          <p>Events and Weddings</p>
        </div>
        <p className="footer-description">
          Planistry Event Management Company based in Kanpur, India offers a wide range of
          services to make your events stress-free and memorable. From weddings and
          corporate events to private gatherings — we've got it all covered!
        </p>
      </div>

      <div className="footer-grid">
        <div className="footer-column">
          <h6>QUICK LINKS</h6>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-column">
          <h6>SERVICES</h6>
          <p>Birthday Planning</p>
          <p>Anniversary Planning</p>
          <p>Corporate Events</p>
          <p>Wedding Planner</p>
          <p>Party Planning</p>
          <p>Campaign Trips</p>
        </div>

        <div className="footer-column contact-info">
          <h6>CONTACT</h6>
          <p><IoLogoWhatsapp /> +91 6392431661</p>
          <p><MdEmail /> planistry04@gmail.com</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://wa.me/916392431661" target="_blank" rel="noreferrer"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <MdOutlineCopyright />
        <span>2025 Planistry Event Management. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
