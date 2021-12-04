import React from "react";

export default function Story() {
  return (
    <section className="story">
      <div className="anchor" id="story"></div>
      <div className="story__bg">
        <img src="images/storyMap.png" alt="" />
      </div>
      <div className="auto__container">
        <div
          className="story__dragon wow fadeInUp"
          data-wow-duration=".6s"
          data-wow-delay=".2s"
        >
          <img src="images/storyDragon.png" alt="" />
        </div>
        <div className="story__inner">
          <div className="story__inner-frame">
            <img src="images/storyFrame.png" alt="" />
          </div>
          <h2
            className=" wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".4s"
          >
            Story
          </h2>
          <p
            className=" wow fadeInUpSmall"
            data-wow-duration=".6s"
            data-wow-delay=".6s"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc
            nibh diam, libero aliquet senectus. Sit netus curabitur arcu,
            bibendum augue mi elit at. Dictum maecenas quisque volutpat
            facilisis. Eu magna a facilisis elit praesent sed adipiscing
            fermentum sodales. Mauris pharetra non et sed est lectus. Congue
            aenean nulla quis tortor nisi. Tristique malesuada congue viverra
            vitae donec. Neque nulla nulla fusce mauris
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc
            nibh diam, libero aliquet senectus. Sit netus curabitur arcu,
            bibendum augue mi elit at. Dictum maecenas quisque volutpat
            facilisis. Eu magna a facilisis elit praesent sed adipiscing
            fermentum sodales. Mauris pharetra non et sed est lectus. Congue
            aenean nulla quis tortor nisi. Tristique malesuada congue viverra
            vitae donec. Neque nulla nulla fusce mauris Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut nunc nibh diam, libero aliquet
            senectus. Sit netus curabitur arcu, bibendum augue mi elit at.
            Dictum maecenas quisque volutpat facilisis. Eu magna a facilisis
            elit praesent sed adipiscing fermentum sodales. Mauris pharetra non
            et sed est lectus. Congue aenean nulla quis tortor nisi. Tristique
            malesuada congue viverra vitae donec. Neque nulla nulla fusce
            mauris.
          </p>
        </div>
      </div>
    </section>
  );
}
