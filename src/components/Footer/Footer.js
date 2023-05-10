import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><Link to="/terms-of-service">Terms of Service</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      <p>Copyright © 2023 Music Platform.
      All rights reserved.</p>
    </footer>
  );
};

export default Footer;
