import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";



export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-first-child">
      <span className="about-link">
        <Link to="/about us">ABOUT US</Link>
        </span>
  
        <span className="contact-link">
        <Link to="/contact us">CONTACT US</Link>
        </span>
        

      </div>
      <div className="footer-second-child">
      <span className="copyright-link">
        <Link to="/copyright"> COPYRIGHT</Link>
        </span>
      
        <span className="cookie-link">
        <Link to="/preference">COOKIE PREFERENCE</Link>
        </span>
      </div>
      <div className="footer-third-child">
      <span className="help-link">
        <Link to="/help">HELP</Link>
        </span>
        <span className="blog-link">
        <Link to="/blog">BLOG</Link>
        </span>
       
      </div>
    </div>
  );
}
