import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>
            Welcome to <span>COLLAB WORKS</span>
          </h1>
          <p>
            A platform where <b>clients</b> meet <b>freelancers</b> to turn
            ideas into reality. Collaborate, create, and succeed — all in one
            place.
          </p>
          <div className="hero-buttons">
            <Link to="/create-project" className="btn primary-btn">
              🚀 Post a Project
            </Link>
            <Link to="/find-work" className="btn secondary-btn">
  💼 Find Work
</Link>

          </div>
        </div>

        <div className="hero-image">
         <img
  src="/freelance.jpg"
  alt="Freelancing Illustration"
  className="hero-illustration"
/>

        </div>
      </section>

      <section className="features">
        <h2>Why Choose collab works ?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>💼 For Clients</h3>
            <p>
              Post projects, connect with verified freelancers, and get your
              ideas delivered on time.
            </p>
          </div>
          <div className="card">
            <h3>🚀 For Freelancers</h3>
            <p>
              Discover exciting opportunities, build your portfolio, and earn
              securely.
            </p>
          </div>
          <div className="card">
            <h3>🔒 Secure Payments</h3>
            <p>
              Your money and trust are protected through safe transactions and
              verified profiles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
