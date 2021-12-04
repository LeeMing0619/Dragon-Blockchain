import React, { useState, useEffect } from "react";
import { useMoralis } from 'react-moralis';

export default function Header() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  const start = 500;
  const onScroll = () => {
    if (window.scrollY > start) {
      document.getElementById("header").classList.add("sticky");
    } else {
      document.getElementById("header").classList.remove("sticky");
    }
  };

  const menuClose = React.useCallback((e) => {
    const target = e.target;
    if (target === document.querySelector(".nav")) {
      document.body.classList.remove("active");
      document.body.removeEventListener("click", menuClose);
      setMenu(false);
    }
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.addEventListener("click", menuClose);
      document.body.classList.add("active");
    }
  }, [menu]);
  const links = document.querySelectorAll(".nav__inner-link");
  var body = document.body;
  links.forEach((e) => {
    onLinkClick(e);
  });
  function onLinkClick(linkItem) {
    linkItem.addEventListener("click", function () {
      setMenu(false);
      body.classList.remove("active");
    });
  }

  //Moralis
  const { authenticate, isAuthenticated, logout } = useMoralis();

  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <div className="header__inner-logo">
            <img src="images/logo.png" alt="logo" />
          </div>
          <nav className={"nav " + (menu ? "active" : "")} id="menu">
            <div className="nav__inner">
              <a href="#home" className="nav__inner-link">
                Home
              </a>
              <a href="#founder" className="nav__inner-link">
                Founder’s Egg
              </a>
              <a href="#recent" className="nav__inner-link">
                Recent
              </a>
              <a href="#about" className="nav__inner-link">
                About
              </a>
              <a href="#story" className="nav__inner-link">
                Story
              </a>
              <a href="#nft" className="nav__inner-link">
                iNFTs
              </a>
              <a href="#token" className="nav__inner-link">
                Tokenomics
              </a>
              <a href="#roadmap" className="nav__inner-link">
                RoadMap
              </a>
              { isAuthenticated ? (
                <a className="button primary"
                    onClick={() => {
                      logout();
                    }}>
                  <img src="images/icons/wallet.svg" alt="wallet" />
                  Log out
                </a>
              ) : (
                <a className="button primary"
                  onClick={() => { console.log('111')
                    authenticate({ provider: "walletconnect", mobileLinks: [
                      "rainbow",
                      "metamask",
                      "argent",
                      "trust",
                      "imtoken",
                      "pillar",
                    ],
                    desktopLinks: [
                      "encrypted ink",
                      "metamask",
                      "argent",
                      "trust",
                      "imtoken",
                      "pillar",
                    ] });
                  }}>
                  <img src="images/icons/wallet.svg" alt="wallet" />
                  Connect Wallet
                </a>
              )}              
            </div>            
          </nav>
          <div
            className={"burger " + (menu ? "active" : "")}
            id="menuBtn"
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}
