import React, { useContext } from "react";
import PopUp from "../components/PopUp";
import titleBanner from "../assets/images/reward records.png";
import bg from "../assets/images/task-game-bg2.png";
import { AppContext } from "../App";
import "../styles/popup.scss";
import { RewardHistoryItem } from "../components/RewardHistoryItem";

export const RewardHistory = () => {
  const { toggleRewardsHistory } = useContext(AppContext);

  return (
    <PopUp
      title={titleBanner}
      bg={bg}
      popUpHandler={toggleRewardsHistory}
      isRewards={true}
    >
      <div className="rewardHistoryPopUp">
        <div className="rewardsTitle">
          <span className="time">Time</span>
          <span className="type">Reward Type</span>
          <span className="rewards">Rewards</span>
        </div>
        <div>
          <RewardHistoryItem />
        </div>
      </div>
    </PopUp>
  );
};
