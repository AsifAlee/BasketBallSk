import React, { useState } from "react";
import { Pot } from "./Pot";
import "../../../styles/giftingboard.scss";
import { TabButton } from "../../../components/TabButton";
import dailyButtton from "../../../assets/images/Daily.png";
import overallButton from "../../../assets/images/Overall.png";
import { Daily } from "./LeaderBoard/Daily";
import { Overall } from "./LeaderBoard/Overall";
export const UserSection = () => {
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
    <div>
      <Pot />
      <div className="beansNote">
        <div className="content">
          <p className="note">Note</p>
          <ul>
            <li>
              initally 100 beans recieved will be considered as 1 ENERGY POINT.
            </li>
            <li>The conversion will change based on your acceleration rate</li>
          </ul>
        </div>
      </div>
      <div className="userLeaderBoardTabs">
        <TabButton handleClick={toggleTabs} text="daily" isActive={tabs.daily}>
          <img src={dailyButtton} />
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
