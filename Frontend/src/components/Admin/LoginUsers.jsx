import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/AdminTable.css";

const LoginUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin-table">
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
             <td>{new Date(u.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoginUsers;
