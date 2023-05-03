import React, { useContext } from "react";
import "./fieldGoal.scss";
import beansBanner from "../../assets/images/beans-pot-banner.png";
import bean from "../../assets/images/bean.png";
import { AppContext } from "../../App";
const BeansPot = () => {
  const { userInfo } = useContext(AppContext);
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
          <span>{userInfo.milestoneBeansPot}</span>
        </div>
      </div>
    </div>
  );
};
export default BeansPot;
