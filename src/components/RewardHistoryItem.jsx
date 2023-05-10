import React, { useEffect, useState } from "react";
import ball from "../assets/images/completed.png";
import fieldGoal from "../assets/images/feild-goal-icon.png";
import beanBag from "../assets/images/beanbag.png";
import { rewGet } from "../imageContext.js";
import { formatNumbers } from "../functions";
export const RewardHistoryItem = (props) => {
  const { rewardItem } = props;
  const [currentRewdImg, setCurrentRewrdImg] = useState("");
  useEffect(() => {
    if (
      rewardItem.rewardType == "Basketball Game" ||
      rewardItem.rewardType == "Daily Leaderboard"
    ) {
      setCurrentRewrdImg(beanBag);
    } else if (rewardItem.rewardType == "Field Goal Milestone") {
      setCurrentRewrdImg(
        rewGet(rewardItem.gameRewardInfo.rewardDTOList[0].rewardDesc)
      );
    }
  }, [rewardItem]);

  return (
    <div className="historyItem">
      <div className="time">
        <p className="date">{rewardItem.time.split("T")[0]}</p>
        <p className="hours">{rewardItem.time.split("T")[1].split(".")[0]}</p>
      </div>
      <div className="rewardType">
        <img
          src={
            rewardItem.rewardType == "Basketball Game"
              ? ball
              : rewardItem.rewardType == "Field Goal Milestone"
              ? fieldGoal
              : ""
          }
        />
      </div>
      <div className="rewards">
        <img src={currentRewdImg} />
        <p className="text">
          {rewardItem.rewardType == "Basketball Game" ||
          rewardItem.rewardType == "Daily Leaderboard"
            ? `${rewardItem.gameRewardInfo.beans} beans`
            : `${rewardItem.gameRewardInfo?.rewardDTOList[0]?.rewardCount} ${rewardItem.gameRewardInfo?.rewardDTOList[0]?.rewardDesc}`}
        </p>
      </div>
    </div>
  );
};
