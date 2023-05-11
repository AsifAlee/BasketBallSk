import React, { useContext, useState } from "react";
import "../../../styles/giftingboard.scss";
import { SliderButton } from "../../../components/SliderButton";
import overall from "../../../assets/images/Overall.png";
import daily from "../../../assets/images/Daily.png";
import titleBanner from "../../../assets/images/beans-pot-banner.png";
import bg from "../../../assets/images/slide-button-bg-daily-overall.png";
import bean from "../../../assets/images/bean.png";
import { ButtonSlider } from "../../../components/ButtonSlider";
import { AppContext } from "../../../App";
export const Pot = () => {
  const { userInfo } = useContext(AppContext);

  const [tabs, setTabs] = useState({
    daily: true,
    overall: false,
  });
  const toggleTabs = () => {
    setTabs({ daily: !tabs.daily, overall: !tabs.overall });
  };
  return (
    <div className="userPot">
      <img src={titleBanner} className="title" />
      <div className="tabs">
        <div className="pot-tabs">
          <ButtonSlider
            texts={["Daily", "Overall"]}
            bg={bg}
            isPot={1}
            onToggle={toggleTabs}
          />
        </div>
      </div>
      {tabs.daily ? (
        <div className="beansCount">
          <img src={bean} />
          <span>{userInfo.userDailyBeansPot}</span>
        </div>
      ) : (
        <div className="beansCount">
          <img src={bean} />
          <span>{userInfo.userOverallBeansPot}</span>
        </div>
      )}

      <div className="potInfo">BEANS WILL BE REWARDED TO TOP 5 USERS</div>
    </div>
  );
};
