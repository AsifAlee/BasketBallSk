import React from "react";
import "../../../styles/giftingboard.scss";
import bean from "../../../assets/images/bean.png";
export const Pot = () => {
  return (
    <div className="talentPot">
      <div className="beansCount">
        <img src={bean} />
        <span>750000</span>
      </div>
      <div className="potInfo">BEANS WILL BE REWARDED TO TOP 5 USERS</div>
    </div>
  );
};
