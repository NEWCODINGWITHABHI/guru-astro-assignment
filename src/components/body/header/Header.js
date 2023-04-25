import React, { useEffect, useState } from "react";
import { sliders } from "../../utils/sliderImage";
import "./header.css";
import { color } from "framer-motion";
import MobileDrawer from "./MobileDrawer";
function Header() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (current == 2) {
        setCurrent(0);
      } else {
        setCurrent((prev) => prev + 1);
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  const backgroundStyle = {
    backgroundImage: `url(${sliders[current].image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  function goToNext(currState) {
    setCurrent(currState);
  }
  return (
    <header>
      <div className="home-cont" style={backgroundStyle}>
        <nav>
          <div className="guruji-icon drawer">
            <div className="mobile-drawer">
              <MobileDrawer />
            </div>
            <img className="guruji-img" src="/images/guruji.svg" alt="" />
          </div>

          <div className="link">
            <a href="" id="home-link">
              Home
            </a>
            <a href="">Call with Astrologer</a>
            <a href="">Live (Coming soon)</a>
          </div>
          <div className="girl-icon">
            <img src="./images/girlpic.svg" alt="" />
          </div>
        </nav>
        <div className="heading">
          <h1>" Astrology for Clarity "</h1>
        </div>
        <div className="some-desc">
          <p>
            Your Name is a Vedic Astrologer and has expertise in Vaastu and
            Mantra Theraphy
          </p>
        </div>
        <div className="consult">
          <button>Consult Now</button>
        </div>
        <div className="services-icon-g">
          <div className="icon-g">
            <img src="./images/customer.svg" alt="customer" />
            <span>24 X 7 Customer Support</span>
          </div>
          <div className="icon-g">
            <img src="./images/refund.svg" alt="refund" />
            <span> 100% Refund if Unsatisfied </span>
          </div>
          <div className="icon-g">
            <img src="./images/private.svg" alt="private-lock" />
            <span>Private & Confidential</span>
          </div>
          <div className="icon-g">
            <img src="./images/verified.svg" alt="verified" />
            <span>Verified Astrologer</span>
          </div>
          <div className="icon-g">
            <img src="./images/payment.svg" alt="" />
            <span>Secure Payment </span>
          </div>
        </div>
        <div className="dot">
          {sliders.map((currImg, index) => {
            return (
              <span
                className={index == current ? "active" : ""}
                style={{ color: "white" }}
                onClick={() => goToNext(index)}
              >
                <img src="./images/dot.svg" alt="" />
              </span>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
