import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li>
          <Link to="/terms-of-service">Terms of Service</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <p className="footer__copyright">
        © 2023 Music Platform. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
