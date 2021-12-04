import React from "react";

export default function Founder() {
  return (
    <section className="founder">
      <div className="anchor" id="founder"></div>
      <div className="smoke2">
        <div id="foglayer_011" className="fog2">
          <div className="image011"></div>
          <div className="image022"></div>
        </div>
        <div id="foglayer_022" className="fog2">
          <div className="image011"></div>
          <div className="image022"></div>
        </div>
        <div id="foglayer_033" className="fog2">
          <div className="image011"></div>
          <div className="image021"></div>
        </div>
      </div>
      <div className="auto__container">
        <div className="founder__inner">
          <div className="founder__inner-egg wow fadeInUpSmall"
            data-wow-duration=".6s"
            data-wow-delay=".2s">
            <img src="images/mint.png" alt="mint" />
            <div className="founder__inner-egg-content">
              <h4>Minting price is 50 USDC</h4>
              <h3>Minting is Live....</h3>
            </div>
          </div>
          <a href="/" className="button secondary wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".4s">
            <img src="images/icons/mintIcon.svg" alt="mint-icon" />
            Mint Now
          </a>
        </div>
      </div>
    </section>
  );
}
