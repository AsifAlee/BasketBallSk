import React, { useContext } from "react";
import "../../../styles/giftingboard.scss";
import bean from "../../../assets/images/bean.png";
import { AppContext } from "../../../App";
export const Pot = () => {
  const { userInfo } = useContext(AppContext);
  return (
    <div className="talentPot">
      <div className="beansCount">
        <img src={bean} />
        <span>{userInfo.talentOverallBeansPot}</span>
      </div>
      <div className="potInfo">BEANS WILL BE REWARDED TO TOP 5 USERS</div>
    </div>
  );
};
