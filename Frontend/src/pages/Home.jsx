import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import BookNowButton from "../components/BookNowButton";


const backgroundImages = [
  "/restaurant.jpeg",
  "/restaurant3.jpg",
  "/restaurant2.jpg",
];

const faqs = [
  {
    question:
      "Can I contact your past clients or references? Can I attend one of your upcoming events nearby",
    answer:
      "Yes, absolutely! Planistry Event Management provides an opportunity for clients to attend our live event management work in your nearby city. If you’re interested in our catering services, you can also sample our delicious food and review the menu. Our company is currently offering a free option for anyone who wishes to book our services anywhere in India. Additionally, if you would like, you can request reference numbers from our past clients.",
  },
  {
    question: "How far in advance should I book an event?",
    answer:
      "Its best to book at least 1-2 months in advance, especially for large or seasonal events. However, we also handle last-minute bookings based on availability.",
  },
  {
    question: "Can I customize the event packages?",
    answer:
      "Absolutely! All our packages are fully customizable based on your preferences, budget, theme, and guest list.",
  },
  {
    question: "Does Planistry handle vendor coordination?",
    answer:
      "Yes, we take care of all vendor coordination including caterers, decorators, entertainers, transport providers, and more.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide services across multiple cities and are open to destination event planning both nationally and internationally.",
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);// slight delay for effect


    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3000); // change every 3seconds

    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="hero  carousel-hero" 
      style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
      >
        <div className={`item ${animate ? "animate-box" : ""}`}>
          <h3>Dream Maker</h3>
          <div>
            <h1>Your Personal Dream Maker</h1>
            <p>
              We believe that it is all about the BIG DREAMS and the small
              details!
            </p>
            <Link to="/contact" className="cta-btn">
              BOOK NOW
            </Link>
            {/* <BookNowButton/> */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h6 className="faq-heading-o">Do you have any questions ?</h6>
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className="faq-item"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
