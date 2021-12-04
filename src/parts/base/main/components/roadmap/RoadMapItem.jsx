import React from "react";

export default function RoadMapItem(props) {
  return (
    <div className={`roadmap__body-card ${props.empty ? "empty" : ""}`}>
      {props.dots ? (
        <>
          <span className="out"></span>
          <span className="in"></span>
        </>
      ) : (
        ""
      )}
      {props.empty !== false ? (
        <>
          <div className="roadmap__body-card-inner">
            <div className="roadmap__body-card-frame">
              <img src="images/roadFrame.png" alt="" />
            </div>
            <div
              className="roadmap__body-card-title wow fadeIn"
              data-wow-duration=".6s"
              data-wow-delay=".2s"
            >
              {props.title}
            </div>
            <p
              className=" wow fadeIn"
              data-wow-duration=".6s"
              data-wow-delay=".4s"
            >
              {props.text}
            </p>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
