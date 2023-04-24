import React, { useState } from "react";
import "./userReview.css";
import { userReviewImage } from "../../utils/userReviewImage";
function UserReview() {
  const [index, setIndex] = useState(0);

  function goToNext() {
    if (index < userReviewImage.length - 1) {
      setIndex(index + 1);
      console.log("object");
    }
  }
  function goToPrev() {
    if (index > 0) {
      setIndex(index - 1);
      console.log("object");
    }
  }
  return (
    <section className="user-review-section">
      <div className="user-review-cont">
        <div className="review-star">
          <img src="./images/star.svg" alt="" />
          <span>User Review </span>
          <img src="./images/star.svg" alt="" />
        </div>
        <div className="wrapper-of-wrapper">
          <div className="slide-wrapper-cont">
            <div
              className="review-card-wrapper"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {userReviewImage.map((curr, index) => {
                return (
                  <div className="card" key={index}>
                    <div className="review-rating">
                      <img src="./images/star1.svg" alt="" />
                      <img src="./images/star2.svg" alt="" />
                      <img src="./images/star3.svg" alt="" />
                      <img src="./images/star4.svg" alt="" />
                      <img src="./images/star5.svg" alt="" />
                    </div>
                    <p className="review-text">
                      Explore the Mysteries of the Universe with Our Expert
                      Astrology Services Explore the Mysteries of the Universe
                      with Our Expert Astrology ServicesExplore the Mysteries of
                      the Universe with
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="user-img">
            {userReviewImage.map((curr, idx) => {
              return <img
              className={index==idx?"active":""}
               src={curr.image} alt="" />;
            })}
          </div>
          <button id="lt-btn" onClick={() => goToPrev()}>
            &lt;
          </button>
          <button id="gt-btn" onClick={() => goToNext()}>
            &gt;
          </button>
        </div>
      </div>
      <div className="curve-img-bottom">
        <img src="./images/curve.svg" alt="" />
      </div>
    </section>
  );
}

export default UserReview;
