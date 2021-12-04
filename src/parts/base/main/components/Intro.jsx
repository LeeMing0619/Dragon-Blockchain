import React from "react";
import Social from "../../social/Social";

export default function Intro() {

  return (
    <section className="intro">
      <div className="anchor" id="home"></div>
      <div className="auto__container">
        <div className="intro__inner">
          <div
            className="intro__inner-image wow fadeInUpSmall"
            data-wow-duration=".6s"
            data-wow-delay=".2s"
          >
            <img src="images/introLogo.png" alt="logo" />
          </div>
          <Social addClass="intro" />
        </div>
      </div>
    </section>
  );
}
