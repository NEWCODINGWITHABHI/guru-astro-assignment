import React from 'react'

import rashi from "../../../assets/images/rashigroup.png"
import sun from "../../../assets/images/sun.svg"

import { problemImage1,problemImage2 } from '../../utils/problemImage';
import "./problemSection.css";
function ProblemSection() {
  return (
    <section className='problem-section'>
            <h2>Many Problem one Solution</h2>
      <div className="problem-inner-cont">
        <div className="problem-g-1">
          <div className="problem-img-g-1">
          {
            problemImage1.map((curr,index)=>{
                return(
            <img className='pob-img' src={curr.image} alt={curr.name} key={index} />

                )
            })
          }
          </div>
        </div>
        <div className="rashi-g">
            <div className='rashi-img-cont'>
                <img id='rashi' src={rashi} alt="rashi" />
                <img id='sun' src={sun} alt="sun" />
            </div>
        </div>
        <div className="problem-2">
          <div className="problem-img-g-2">
          {
            problemImage2.map((curr,index)=>{
              return  <img className='pob-img' src={curr.image} alt={curr.name} key={index}/>
            })
          }
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection
