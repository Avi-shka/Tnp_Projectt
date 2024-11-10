import React from 'react';
import './nav.css'; // Import the Navbar-specific styles
import { Link } from 'react-router-dom';

function Navbar() {
  // This function is for handling redirection to an external URL
  const handleExternalLink = (url) => {
    window.location.href = url;
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Register</Link></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle">Login</a>
          <div className="dropdown-content">
            <Link to="/student-login">Student Login</Link> {/* Link for internal navigation */}
            <Link to="/admin-login">Admin Login</Link> {/* Link for internal navigation */}
          </div>
        </li>
        <li>
          {/* External link with valid href */}
          <a
            href="https://cumminscollege.org/placements/placement-statistics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Statistics
          </a>
        </li>
        <li><Link to="/aboutus">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
