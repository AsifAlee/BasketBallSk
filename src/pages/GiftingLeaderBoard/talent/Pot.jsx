import React, { useContext } from "react";
import "../../../styles/giftingboard.scss";
import bean from "../../../assets/images/bean.png";
import { AppContext } from "../../../App";
import titleBanner from "../../../assets/images/beans-pot-banner.png";
export const Pot = () => {
  const { userInfo } = useContext(AppContext);
  return (
    <div className="talentPot">
      <img src={titleBanner} className="title" />

      <div className="beansCount">
        <img src={bean} />
        <span>{userInfo.talentOverallBeansPot}</span>
      </div>
      <div className="potInfo">BEANS WILL BE REWARDED TO TOP 5 TALENTS</div>
    </div>
  );
};
