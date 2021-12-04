import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="anchor" id="about"></div>
      <div className="auto__container">
        <div className="about__inner">
          <div
            className="about__inner-image wow fadeIn"
            data-wow-duration=".6s"
            data-wow-delay=".6s"
          >
            <img src="images/aboutDragon.png" alt="about-dragon" />
          </div>
          <div className="about__inner-content">
            <h2
              className=" wow fadeInUp"
              data-wow-duration=".6s"
              data-wow-delay=".2s"
            >
              About Us
            </h2>
            <p
              className=" wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting. It has survived not only five centuries,
              but also the leap into electronic typesetting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
