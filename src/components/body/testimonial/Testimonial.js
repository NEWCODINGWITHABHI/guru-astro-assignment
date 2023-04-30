import React, { useEffect, useState } from "react";
import "./testimonial.css";
import { testimonialImage } from "../../utils/testimonialImage";
import { bannerImage } from "../../utils/banner";
import { transform } from "framer-motion";

function Testimonial() {
  const [imageData, setImageData] = useState([...testimonialImage]);
  const [currIndex,setCurrIndex]=useState(0);
  console.log(imageData);

  function forwardReverse() {
      const dummYimage = [...imageData];
      const temp = dummYimage[dummYimage.length - 1];
      for (let i = dummYimage.length - 1; i > 0; i--) {
        dummYimage[i] = dummYimage[i-1];
      }
      dummYimage[0] = temp;
      console.log(dummYimage);
      setImageData([...dummYimage]);

  }
  function backwardReverse() {
    const dummYimage = [...imageData];
    const temp = dummYimage[0];
    for (let i = 0; i < dummYimage.length - 1; i++) {
      dummYimage[i] = dummYimage[i + 1];
    }
    dummYimage[dummYimage.length - 1] = temp;
    setImageData([...dummYimage]);
  }

  function setEclipsePosition(idx){
    setCurrIndex(idx);
  }

  function timerFun(){
    console.log(currIndex,"nnnn")
    if(currIndex==5){
        setCurrIndex(-1)
    }
    setCurrIndex(prev=>prev+1);
  }
  useEffect(()=>{
let timer;
timer=setInterval(timerFun,2000)

return ()=>{
    clearInterval(timer);
}
  })
  return (
    <section className="testimonial-sec">
      <div className="testimonial-main-div">
        <div className="sun-icon-and-heading">
          <img id="sun" src="/images/sun.svg" alt="sun" />
          <div className="testimonial-heading">
            <img src="./images/star.svg" alt="" />
            <h2>User Testimonial</h2>
            <img src="./images/star.svg" alt="" />
          </div>
        </div>
        <div className="testimonial-img-wrapper">
          {imageData.map((curr, index) => {
            return (
              <img
                style={{
                  width:
                    index <= 2
                      ? `${(index + 1) * 5 + 10 + "%"}`
                      : `${(5 - index) * 5 + 10 + "%"}`,
                }}
                className={index <= 2 ? "margin-left" : "margin-right"}
                src={curr.image}
                alt="testimonial"
              />
            );
          })}
          <div className="prev-next">
            <img
              onClick={() => backwardReverse()}
              src="./images/prev.svg"
              alt="prev-icon"
            />
            <img
              onClick={() => forwardReverse()}
              src="./images/next.svg"
              alt="next-icon"
            />
          </div>
        </div>
        <div className="banner-wrapper">
          <div
            className="banner-cont"
            style={{ transform: `translate3d(${-currIndex*100}%, 0, 0)` }}
 
          >
            {bannerImage.map((curr, index) => {
              return (
                <div className="image-card">
                  <img
                    //   style={{ marginLeft: `${-currIndex}100%` }}
                    src={curr.image}
                    alt="banner"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="eclipse-div">
          {bannerImage.map((curr, idx) => {
            return (
              <img
                onClick={() => setEclipsePosition(idx)}
                className={currIndex == idx ? "active-eclipse" : ""}
                src="./images/eclipse.svg"
                alt="eclipse"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
