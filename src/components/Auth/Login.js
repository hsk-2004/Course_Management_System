import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/Auth.css';
import loginImage from '../../images/use.png'; // Make sure this path is correct

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      if (storedUser.role === "student") navigate("/student-dashboard");
      else if (storedUser.role === "teacher") navigate("/teacher-dashboard");
      else if (storedUser.role === "admin") navigate("/admin-dashboard");
    } else {
      alert("Invalid email or password! Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>LOGIN</h2>
      <div className="auth-form">
        {/* Add Image Here */}
        <div className="login-image">
          <img src={loginImage} alt="User Icon" />
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>EMAIL</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>PASSWORD</label>
          </div>

          <button type="submit" className="auth-btn">LOGIN</button>
          <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
