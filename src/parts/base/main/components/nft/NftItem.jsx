import React from "react";

export default function NftItem(props) {
  return (
    <div
      className="nft__inner-card wow fadeInUpSmall"
      data-wow-duration=".6s"
      data-wow-delay={props.delay}
      key={props.id}
    >
      <img src={props.image} alt={props.alt} />
    </div>
  );
}
