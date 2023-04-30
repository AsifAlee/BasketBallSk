import React from "react";
import "./fieldGoal.scss";
import beansBanner from "../../assets/images/beans-pot-banner.png";
import bean from "../../assets/images/bean.png";
const BeansPot = () => {
  return (
    <div className="beans-pot">
      <img src={beansBanner} className="title" />
      <div className="potInfo">
        <p>
          BEANS POT WILL BE REWARDED TO TOP 3 USERS ON FIELD GOAL MILESTONE
          LEADERBOARD
        </p>
        <div className="beans-number">
          <img src={bean} className="bean" />
          <span>34000</span>
        </div>
      </div>
    </div>
  );
};
export default BeansPot;
