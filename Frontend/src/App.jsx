import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import AdminPanel from "./pages/AdminPanel"; 
import "./App.css"
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
         
         {/*Protected ServiceDetails Route*/}
        <Route path="/services/:slug" element={
          // <ProtectedRoute>
             <ServiceDetail />
          // </ProtectedRoute>
        }
        />
        <Route path="/about" element={<About />} />
        <Route path="/venue" element={<Venue/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel/>}/>
      </Routes>
      
      <Footer />
      </div>
    </>
  );
};

export default App;
