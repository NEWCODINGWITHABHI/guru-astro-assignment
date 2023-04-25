import React from "react";
import gurujiImg from "../../assets/images/guruji.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";
import razorpay from "../../assets/images/razorpay.svg";
import paytm from "../../assets/images/paytmsvg.svg";
import stripe from "../../assets/images/stripesvg.svg";

import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-inner-container">
        <div className="guruji-link-payment">
          <div className="guru-details">
            <div className="pic-heading">
              <img src={gurujiImg} alt="guruji image" />
            </div>
            <div className="about-guru">
              <p>
                About Guruji s2 to 3 lines what guruji do and how it works About
                Guruji s2 to 3 lines what guruji do and how it works
              </p>
            </div>
          </div>
          <div className="social-and-payment">
            <div className="guru-social-link">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
              <img src={youtube} alt="youtube" />
            </div>
            <div className="payment">
              <h3>Trusted & Seals</h3>
              <div className="payment-img">
                <img src={razorpay} alt="razorpay" />
                <img src={paytm} alt="paytm" />
                <img src={stripe} alt="stripe" />
              </div>
            </div>
          </div>
        </div>

        <div className="company-support">
          <div className="cmp-collaborate">
            <div className="cmp">
              <h3>Company</h3>
              <p>Home</p>
              <p>Privacy Policy</p>
              <p>T & C</p>
              <p>Varied Pament</p>
            </div>
            <div className="collaborate">
              <h3>Collaborate</h3>
              <p>Clever Tap</p>
              <p>Exotel</p>
              <p>Facebook</p>
              <p>Quora</p>
              <p>google</p>
              <p>Youtube</p>
            </div>
          </div>
          <div className="support-imp-link">
            <div className="support">
              <h3>Support</h3>
              <p>Home</p>
              <p>Privacy Policy</p>
              <p>T & C</p>
              <p>Varied Payment</p>
            </div>
            <div className="imp-link">
              <h3>Important Link</h3>
              <p>Tarot reader</p>
              <p>Vedic Astrology</p>
              <p>Palmistry</p>
              <p>Gemology</p>
              <p>VBastu</p>
              <p>Numerology</p>
            </div>
          </div>
        </div>
        <div className="footer-form">
          <form action="">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Mail ID" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Write Query"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
