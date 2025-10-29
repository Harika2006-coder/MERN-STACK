import React, { useState } from "react";
import "../styles/CreateProject.css";

const CreateProject = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    budget: "",
    skills: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("projects")) || [];
    const updated = [...existing, project];
    localStorage.setItem("projects", JSON.stringify(updated));

    alert("🎉 Project added successfully!");
    setProject({ title: "", description: "", budget: "", skills: "" });
  };

  return (
    <div className="create-project-container">
      <div className="create-card">
        <h2>🚀 Create a New Project</h2>
        <p className="subtext">Post your project details below</p>

        <form onSubmit={handleSubmit} className="create-form">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget (₹)"
            value={project.budget}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="skills"
            placeholder="Required Skills (comma separated)"
            value={project.skills}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Post Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
