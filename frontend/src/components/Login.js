import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    // TODO: connect to backend authentication later
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p>Login to continue your freelancing journey 🚀</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
