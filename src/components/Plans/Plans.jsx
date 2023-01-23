import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData.js";
import whiteTick from "../../assets/whiteTick.png";
import ArrowRight from "../../assets/rightArrow.png";
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plan-blur1"></div>
      <div className="blur plan-blur2"></div>
      <div className=" program-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text"> now with us</span>
      </div>

      {/* plans card */}

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>see more benefits</span>
              <img src={ArrowRight} alt="" />
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
