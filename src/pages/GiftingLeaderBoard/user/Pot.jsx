import React, { useState } from "react";
import "../../../styles/giftingboard.scss";
import { SliderButton } from "../../../components/SliderButton";
import overall from "../../../assets/images/Overall.png";
import daily from "../../../assets/images/Daily.png";
import bg from "../../../assets/images/slide-button-bg-daily-overall.png";
import bean from "../../../assets/images/bean.png";
import { ButtonSlider } from "../../../components/ButtonSlider";
export const Pot = () => {
  const [tabs, setTabs] = useState({
    daily: true,
    overall: false,
  });
  const toggleTabs = () => {
    setTabs({ daily: !tabs.daily, overall: !tabs.overall });
  };
  return (
    <div className="userPot">
      <div className="tabs">
        <div
          className="pot-tabs"
          // onClick={toggleTabs}
        >
          {/* {tabs.daily && (
            <SliderButton className="daily">
              <img src={daily} />
            </SliderButton>
          )}

          {tabs.overall && (
            <div style={{ position: "relative", left: "20vw" }}>
              <SliderButton className="daily">
                <img src={overall} />
              </SliderButton>
            </div>
          )} */}
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
          <span>750000</span>
        </div>
      ) : (
        <div className="beansCount">
          <img src={bean} />
          <span>850000</span>
        </div>
      )}

      <div className="potInfo">BEANS WILL BE REWARDED TO TOP 5 USERS</div>
    </div>
  );
};
