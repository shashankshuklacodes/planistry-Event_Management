import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../style/Navbar.css"

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.name); // make sure your user object has a 'name' field
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserName(""); // reset user state
    window.location.reload(); // reload to reflect changes
  };

  return (
    <nav className="navbar">
      <div className="logo">PLANISTRY</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="/" onClick={() => setShow(false)}>HOME</Link>
          <Link to="/services" onClick={() => setShow(false)}>SERVICES</Link>
          <Link to="/venue" onClick={() => setShow(false)}>VENUE</Link>
          <Link to="/about" onClick={() => setShow(false)}>ABOUT</Link>
          <Link to="/contact" onClick={() => setShow(false)}>CONTACT</Link>



          {userName ? (
            <>
              <span style={{ fontSize: "24px",letterSpacing:"1.4px", fontFamily:"Times New Roman",fontWeight: "300" ,textDecoration:"none",texttransform:"capitalize",}}>
                {userName}
              </span>
              <button 
                onClick={handleLogout}
                style={{
                  background: "none",
                  border: "none",
                  color: "#000",
                  fontSize: "24px",
                  fontWeight:300,
                  fontFamily:"Times New Roman",
                  cursor: "pointer",
                  marginLeft: "10px"
                }}
              >
                LOGOUT
              </button>
            </>
          ) : (
              <Link to="/login" onClick={() => setShow(false)}>LOGIN</Link>
          )}
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;