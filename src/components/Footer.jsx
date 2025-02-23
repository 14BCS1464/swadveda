// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms & Conditions</a>
      </div>
      <p>&copy; 2023 Spices World. All rights reserved.</p>
    </footer>
  );
};

export default Footer;