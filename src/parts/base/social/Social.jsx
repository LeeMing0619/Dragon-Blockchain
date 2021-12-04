import React from "react";
import SocialItem from "./SocialItem";
import { SocialModule } from "./SocialModule";

export default function Social(props) {
  return (
    <div
      className="social wow fadeInUp"
      data-wow-duration=".6s"
      data-wow-delay=".4s"
    >
      {SocialModule.map((SocialItems) => {
        return (
          <SocialItem
            link={SocialItems.link}
            alt={SocialItems.alt}
            key={props.addClass + SocialItems.id}
            image={SocialItems.image}
          />
        );
      })}
    </div>
  );
}
