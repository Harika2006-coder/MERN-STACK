import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const projects = [
    { title: "E-commerce Website", status: "Ongoing", budget: 800 },
    { title: "Portfolio Website", status: "Completed", budget: 400 },
    { title: "Mobile App UI", status: "Pending", budget: 600 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your projects and track progress here 🚀</p>
      </div>

      <div className="project-list">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>Status: <span className={`status ${proj.status.toLowerCase()}`}>{proj.status}</span></p>
            <p>Budget: ${proj.budget}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
