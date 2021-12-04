import React from "react";
import Social from "./social/Social";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-logo">
            <img src="images/introLogo.png" alt="intro-Logo" />
          </div>
          <Social addClass="footer" />
          <div className="footer__inner-text">
            Copyright © 2021, All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
