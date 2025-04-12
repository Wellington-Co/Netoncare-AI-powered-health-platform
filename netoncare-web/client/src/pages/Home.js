import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div>
        <img src="../public/NETONCARE.png" alt="logo"></img>
        <h1>NetonCare</h1>
        </div>        
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Your Health, Our Priority – AI-Powered Telemedicine at Your Fingertips</h1>
          <p>Instant consultations, medicine delivery, and emergency assistance.</p>
          <div className="cta-buttons">
            <button>Consult a Doctor</button>
            <button>Order Medicine</button>
            <button className="emergency">Emergency Help</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        {[
          { title: "AI Symptom Checker", desc: "Get quick, AI-powered health assessments.", img: "ai-checker.jpg" },
          { title: "Instant Doctor Consultation", desc: "Chat, voice, or video call certified doctors.", img: "doctor-chat.jpg" },
          { title: "Fast Medicine Delivery", desc: "Get prescriptions delivered to your doorstep.", img: "medicine-delivery.jpg" },
          { title: "Emergency Services", desc: "One-tap access to life-saving support.", img: "emergency.jpg" },
        ].map((feature, index) => (
          <motion.div 
            key={index} 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={`/images/${feature.img}`} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* How It Works Section */}
      <section className="timeline">
        {["Sign Up", "→","Select Service", "→","Get Care Instantly"].map((step, index) => (
          <motion.div 
            key={index} 
            className="timeline-step"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{step}</h3>
          </motion.div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
  <h2>What Our Users Say</h2>
  {[
    { name: "Dorcas J", feedback: "Amazing service! Helped me get medical help instantly." },
    { name: "Anne Njenga", feedback: "A lifesaver! Quick and reliable healthcare assistance." },
    { name: "Peter Yegon", feedback: "Highly recommended! Professional and efficient service." }
  ].map((user, index) => (
    <motion.div 
      key={index} 
      className="testimonial-card"
      whileHover={{ scale: 1.05 }}
    >
      <p>"{user.feedback}"</p>
      <h4>- {user.name}</h4>
    </motion.div>
  ))}
</section>




      {/* Sticky CTA Button */}
      <Link to="/register" className="sticky-cta">
      Join Now
    </Link>
      
      {/* Footer */}
      <footer>
        <p>© 2025 NetonCare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
