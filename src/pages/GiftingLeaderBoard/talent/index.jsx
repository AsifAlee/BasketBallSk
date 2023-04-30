import React, { useState } from "react";
import { Pot } from "./Pot";
import "../../../styles/giftingboard.scss";
import { TabButton } from "../../../components/TabButton";
import { Daily } from "./LeaderBoard/Daily";
import { Overall } from "./LeaderBoard/Overall";
import dailyButton from "../../../assets/images/Daily.png";
import overallButton from "../../../assets/images/Overall.png";
export const TalentSection = () => {
  const [tabs, setTabs] = useState({
    daily: true,
    overall: false,
  });

  const toggleTabs = (text) => {
    if (text === "daily") {
      setTabs({ daily: true, overall: false });
    } else {
      setTabs({ daily: false, overall: true });
    }
  };
  return (
    <div className="talentSection">
      <Pot />
      <div className="userLeaderBoardTabs">
        <TabButton handleClick={toggleTabs} text="daily" isActive={tabs.daily}>
          <img src={dailyButton} />
        </TabButton>
        <TabButton
          handleClick={toggleTabs}
          text="overall"
          isActive={tabs.overall}
        >
          <img src={overallButton} />
        </TabButton>
      </div>
      {tabs.daily && <Daily />}
      {tabs.overall && <Overall />}
    </div>
  );
};
