import React from "react";

export default function RecentItem(props) {
  return (
    <div
      className="recent__inner-card wow fadeInUp"
      data-wow-duration=".6s"
      data-wow-delay={props.delay}
      key={props.id}
    >
      <img src="images/frame.png" alt="frame" />
      <div className="recent__inner-card-nft">
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  );
}
