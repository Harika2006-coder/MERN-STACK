
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">COLLAB WORKS</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-project">Create Project</Link>
        <Link to="/find-work">Find Work</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
