import React from "react";
import RecentItem from "./RecentItem";
import { RecentModule } from "./RecentModule";
export default function Recent() {
  return (
    <section className="recent">
      <div className="anchor" id="recent"></div>
      <div className="auto__container">
        <div className="recent__inner">
          <h2
            className=" wow fadeInUpSmall"
            data-wow-duration=".6s"
            data-wow-delay=".2s"
          >
            Recently Minted
          </h2>
          <p
            className=" wow fadeInUpSmall"
            data-wow-duration=".6s"
            data-wow-delay=".4s"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc
            nibh diam, libero aliquet senectus. Sit netus curabitur arcu,
            bibendum augue mi elit at. Dictum maecenas quisque volutpat
            facilisis. Eu magna a facilisis elit praesent sed adipiscing
            fermentum sodales.
          </p>
          <div className="recent__inner-row">
            {RecentModule.map((RecentItems, i) => {
              return (
                <RecentItem
                  alt={RecentItems.alt}
                  key={RecentItems.id}
                  image={RecentItems.image}
                  delay={`.${i}s`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
