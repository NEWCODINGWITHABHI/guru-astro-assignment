import React from "react";
import "./astrologers.css";
import { astImg1, astImg2, astImg3 } from "../../utils/astrologersImg";
function Astrologers() {
  return (
    <section className="astro-section">
      <div className="astrologer-cont">
        <div className="star-astro">
          <img src="./images/star.svg" alt="star" />
          <span>Premium Astrologers</span>
          <img src="./images/star.svg" alt="star" />
        </div>
        <div className="astro-card-wraper">
          <div className="astro-col-1">
            {astImg1.map((curr, index) => {
              return (
                <div className="ast-card">
                  <img
                    className="profile-img"
                    src={curr.image}
                    alt={curr.name}
                  />
                  <img className="live-img" src="./images/live.svg" alt="" />

                  <img
                    className="years-img"
                    src="./images/iconImages/years.svg"
                    alt=""
                  />
                  <img
                    className="online-img"
                    src="./images/iconImages/online.svg"
                    alt=""
                  />
                  <div className="astro-details">
                    <h2>Astrologer Ramraj</h2>
                    <p id="special">Specialties</p>
                    <p>Love , Business , Life</p>
                    <p id="skills">Skills</p>
                    <p>Vedic Astrology Kundali</p>
                  </div>
                  <div className="price">
                    <span>Price</span>
                    <span>₹10</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="astro-col-2">
            {astImg2.map((curr, index) => {
              return (
                <div className="ast-card">
                  <img
                    className="profile-img"
                    src={curr.image}
                    alt={curr.name}
                  />
                  <img className="live-img" src="./images/live.svg" alt="" />

                  <img
                    className="years-img"
                    src="./images/iconImages/years.svg"
                    alt=""
                  />
                  <img
                    className="online-img"
                    src="./images/iconImages/online.svg"
                    alt=""
                  />
                  <div className="astro-details">
                    <h2>Astrologer Ramraj</h2>
                    <p id="special">Specialties</p>
                    <p>Love , Business , Life</p>
                    <p id="skills">Skills</p>
                    <p>Vedic Astrology Kundali</p>
                  </div>
                  <div className="price">
                    <span>Price</span>
                    <span>₹10</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="astro-col-3">
            {astImg3.map((curr, index) => {
              return (
                <div className="ast-card">
                  <img
                    className="profile-img"
                    src={curr.image}
                    alt={curr.name}
                  />
                  <img className="live-img" src="./images/live.svg" alt="" />
                  <img
                    className="years-img"
                    src="./images/iconImages/years.svg"
                    alt=""
                  />
                  <img
                    className="online-img"
                    src="./images/iconImages/online.svg"
                    alt=""
                  />
                  <div className="astro-details">
                    <h2>Astrologer Ramraj</h2>
                    <p id="special">Specialties</p>
                    <p>Love , Business , Life</p>
                    <p id="skills">Skills</p>
                    <p>Vedic Astrology Kundali</p>
                  </div>
                  <div className="price">
                    <span>Price</span>
                    <span>₹10</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Astrologers;
