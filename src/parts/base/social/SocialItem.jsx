import React from "react";

export default function SocialItem(props) {
  return (
    <a href={props.link} className="social__link" key={props.id}>
      <img src={props.image} alt={props.alt} />
    </a>
  );
}
