import React, { useState } from "react";
import ContactSubmissions from "../components/Admin/ContactSubmissions";
import LoginUsers from "../components/Admin/LoginUsers";
import "../style/AdminTable.css";
const AdminPanel = () => {
  const [view, setView] = useState("contacts");

  return (
    <div className="admin-panel container">
      <h1>Admin Panel</h1>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setView("contacts")}>Contact Data</button>
        <button onClick={() => setView("users")}>Logged-in Users</button>
      </div>

      {view === "contacts" ? <ContactSubmissions /> : <LoginUsers />}
    </div>
  );
};

export default AdminPanel;
