import React from "react";
import RoadMapItem from "./RoadMapItem";
import { RoadMapModule } from "./RoadMapModule";

export default function RoadMap(props) {
  return (
    <section className="roadmap">
      <div className="auto__container">
        <div className="roadmap__inner">
          <div className="roadmap__header">
            <div className="anchor" id="token"></div>
            <h2
              className=" wow fadeInUp"
              data-wow-duration=".6s"
              data-wow-delay=".2s"
            >
              Tokenomics
            </h2>
            <div
              className="roadmap__header-row wow fadeInUpSmall"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              <div className="roadmap__header-card">
                <div className="roadmap__header-card-frame">
                  <img src="images/frame.png" alt="" />
                </div>
                <div className="roadmap__header-card-icon">
                  <img src="images/icons/token.svg" alt="" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div className="roadmap__header-card">
                <div className="roadmap__header-card-frame">
                  <img src="images/frame.png" alt="" />
                </div>
                <div className="roadmap__header-card-icon">
                  <img src="images/icons/fire.svg" alt="" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="roadmap__body">
            <div className="anchor" id="roadmap"></div>
            <h2>Roadmap</h2>
            <div className="roadmap__body-row">
              <RoadMapItem empty={false} />
              <RoadMapItem
                dots={true}
                title={RoadMapModule[0].title}
                text={RoadMapModule[0].text}
              />
              <RoadMapItem
                title={RoadMapModule[1].title}
                text={RoadMapModule[1].text}
              />
              <RoadMapItem dots={true} empty={false} />
              <RoadMapItem empty={false} />
              <RoadMapItem
                dots={true}
                title={RoadMapModule[2].title}
                text={RoadMapModule[2].text}
              />
              <RoadMapItem
                title={RoadMapModule[3].title}
                text={RoadMapModule[3].text}
              />
              <RoadMapItem dots={true} empty={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
