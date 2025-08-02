import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../style/Auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      }  ,{ headers: { "Content-Type": "application/json" } });
      toast.success(res.data.message);
      setName(""); // Clear name after successful registration
      setEmail(""); // Clear email after successful registration
      setPassword(""); // Clear password after successful registration
      navigate("/login"); // Redirect after registration
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off" 
        />
        <input
          type="email"
          placeholder=" Enter your working E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off" 
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off" 
        />
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
