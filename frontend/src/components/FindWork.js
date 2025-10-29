import React, { useState } from "react";
import "../styles/FindWork.css";

function FindWork() {
  const [projects] = useState([
    {
      id: 1,
      title: "🌐 Website Development",
      description: "Build a modern portfolio website using React and Node.js.",
      budget: "₹15,000",
      skills: ["React", "CSS", "Node.js"],
    },
    {
      id: 2,
      title: "🎨 Logo Design",
      description: "Design a creative logo for a fashion startup.",
      budget: "₹5,000",
      skills: ["Photoshop", "Illustrator"],
    },
    {
      id: 3,
      title: "🛒 E-commerce Platform",
      description: "Develop a full-featured MERN stack e-commerce app.",
      budget: "₹30,000",
      skills: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      id: 4,
      title: "📱 App UI Design",
      description: "Design a clean and attractive mobile app interface.",
      budget: "₹12,000",
      skills: ["Figma", "UX", "Mobile Design"],
    },
    {
      id: 5,
      title: "📢 Social Media Marketing",
      description: "Grow brand reach and engagement through campaigns.",
      budget: "₹8,000",
      skills: ["Instagram", "Branding", "Marketing"],
    },
  ]);

  return (
    <div className="findwork-page">
      <header className="findwork-header">
        <h1>💼 Explore Freelance Projects</h1>
        <p>Find your next opportunity — work with amazing clients and grow!</p>
      </header>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-box">
            <h2>{project.title}</h2>
            <p className="desc">{project.description}</p>

            <div className="skills">
              {project.skills.map((skill, index) => (
                <span key={index} className="tag">{skill}</span>
              ))}
            </div>

            <div className="bottom">
              <span className="price">💰 {project.budget}</span>
              <button className="apply">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindWork;
