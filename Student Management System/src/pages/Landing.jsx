import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import heroBg from '../assets/hero-bg.svg';

function Landing() {
  return (
    <div style={{ marginTop: '1rem' }}>
      <section className="landing-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-top">
          <img src={logo} alt="Student Management Logo" className="hero-logo" />
          <div>
            <p className="hero-badge">Student Management System</p>
          </div>
        </div>
        <h1 className="hero-title">Build better student records with a professional admin dashboard.</h1>
        <p className="hero-subtitle">
          A modern application for managing student profiles, attendance, marks, and performance reports in one polished interface.
        </p>
        <div className="button-group" style={{ marginTop: '2rem' }}>
          <Link to="/dashboard">
            <button className="primary">View Dashboard</button>
          </Link>
          <Link to="/students">
            <button className="ghost">Manage Students</button>
          </Link>
        </div>
      </section>

      <section className="important-section">
        <div className="section-card">
          <h2>Why choose this system?</h2>
          <p>
            It is designed for students, educators, and admin staff who need a lightweight, easy-to-use solution for student data management.
            The interface is styled for clarity and usability, with professional spacing and consistent grey tones.
          </p>
        </div>
        <div className="section-card">
          <h2>What you can do</h2>
          <ul>
            <li>• Add and edit student information quickly.</li>
            <li>• Track attendance and compute percentages.</li>
            <li>• Enter marks and generate grades automatically.</li>
            <li>• Search, sort, and review reports with ease.</li>
          </ul>
        </div>
      </section>

      <section className="feature-grid">
        <div className="feature-card">
          <h3>Organized student profiles</h3>
          <p>Maintain all important student details in a single place with clear labels and simple actions.</p>
        </div>
        <div className="feature-card">
          <h3>Attendance insights</h3>
          <p>View overall attendance percentage and track present, absent, and leave counts per student.</p>
        </div>
        <div className="feature-card">
          <h3>Marks & performance</h3>
          <p>Store marks for core subjects, calculate totals, and display grade summaries.</p>
        </div>
        <div className="feature-card">
          <h3>Report-ready</h3>
          <p>Quickly identify top performers and gain a snapshot of class performance at a glance.</p>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-inner">
          <p>Author: Akshita Aggarwal</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
