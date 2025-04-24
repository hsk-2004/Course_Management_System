import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Auth.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    const userData = { email, username, password, role };
    
    // Store user details in localStorage (for simplicity)
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to login after signup
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <div className="input-group">
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>EMAIL</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>USERNAME</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>PASSWORD</label>
        </div>
        <div className="input-group">
          <label>ROLE</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="auth-btn">SIGN UP</button>
      </form>
    </div>
  );
};

export default Signup;
