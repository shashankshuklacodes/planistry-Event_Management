import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/AdminTable.css";

const ContactSubmissions = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts/all") // 👈 Add new route for GET
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin-table">
      <h2>Contact Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Subject</th><th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.subject}</td>
              <td>{c.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactSubmissions;
