import React from "react";
import NftItem from "./NftItem";
import { NftModule } from "./NftModule";
export default function Nft() {
  return (
    <section className="nft">
      <div className="anchor" id="nft"></div>
      <div className="auto__container">
        <div className="nft__inner">
          <h2
            className=" wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".2s"
          >
            iNFT's
          </h2>
          <p
            className=" wow fadeInUpSmall"
            data-wow-duration=".6s"
            data-wow-delay=".2s"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc
            nibh diam, libero aliquet senectus. Sit netus curabitur arcu,
            bibendum augue mi elit at. Dictum maecenas quisque volutpat
            facilisis. Eu magna a facilisis elit praesent sed adipiscing
            fermentum sodales.
          </p>
          <div className="nft__inner-row">
            {NftModule.map((NftItems, i) => {
              return (
                <NftItem
                  delay={`.${i}s`}
                  key={NftItems.id}
                  image={NftItems.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
