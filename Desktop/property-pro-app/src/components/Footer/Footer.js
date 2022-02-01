import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-first-child">
        <span className="about">ABOUT US</span>
        <span className="contact">CONTACT US</span>
      </div>
      <div className="footer-second-child">
        <span className="copyright"> COPYRIGHT</span>
        <span className="preference"> COOKIE PREFERENCE</span>
      </div>
      <div className="footer-third-child">
        <span className="help"> HELP</span>
        <span className="blog">BLOG</span>
      </div>
    </div>
  );
}
