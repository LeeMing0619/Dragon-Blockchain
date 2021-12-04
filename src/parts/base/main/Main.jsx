import React from "react";
import Founder from "./components/Founder";
import Intro from "./components/Intro";
import Recent from "./components/recent/Recent";
import About from "./components/About";
import Story from "./components/Story";
import Nft from "./components/nft/Nft";
import RoadMap from "./components/roadmap/RoadMap";
export default function Main() {
  return (
    <>
      <Intro />
      <Founder />
      <div className="smokeWrapper">
        <div className="smoke">
          <div id="foglayer_01" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
          <div id="foglayer_02" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
          <div id="foglayer_03" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
        </div>
        <Recent />
        <About />
      </div>
      <Story />
      <div className="smokeWrapper">
        <div className="smoke">
          <div id="foglayer_01" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
          <div id="foglayer_02" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
          <div id="foglayer_03" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
          </div>
        </div>
        <Nft />
        <RoadMap />
      </div>
    </>
  );
}
