import React, { useEffect, useState } from "react";
import ball from "../assets/images/completed.png";
import fieldGoal from "../assets/images/feild-goal-icon.png";
import { rewGet } from "../imageContext.js";
export const RewardHistoryItem = (props) => {
  const { rewardItem } = props;

  return (
    <div className="historyItem">
      <div className="time">
        <p className="date">{rewardItem?.time?.split("T")[0]}</p>
        <p className="hours">
          {rewardItem?.time?.split("T")[1]?.split(".")[0]}
        </p>
      </div>
      <div className="rewardType">
        <img
          src={
            rewardItem?.rewardType == "Basketball Game"
              ? ball
              : rewardItem?.rewardType == "Field Goal Milestone"
              ? fieldGoal
              : fieldGoal
          }
        />
      </div>
      <div className="rewards">
        <div className="rewards-item-images">
          {!rewardItem?.gameRewardInfo?.rewardDTOList?.length ? (
            <img src={rewGet("beansbag")} />
          ) : (
            rewardItem?.gameRewardInfo?.rewardDTOList?.map((item) => (
              <img src={rewGet(item.rewardDesc)} />
            ))
          )}
        </div>
        <p className="text">
          {rewardItem?.rewardType == "Basketball Game" &&
            `${rewardItem?.gameRewardInfo?.beans} beans`}
          {rewardItem?.rewardType == "Field Goal Milestone" &&
            `${rewardItem?.gameRewardInfo?.rewardDTOList[0]?.rewardCount} ${
              rewardItem?.gameRewardInfo?.rewardDTOList[0]?.rewardCount > 1
                ? "days"
                : "day"
            }  ${rewardItem?.gameRewardInfo?.rewardDTOList[0]?.rewardDesc}`}
          {rewardItem?.rewardType == "Daily Leaderboard" &&
            rewardItem?.gameRewardInfo?.rewardDTOList?.length > 0 &&
            `${rewardItem?.gameRewardInfo?.rewardDTOList[0]?.rewardCount}  ${
              rewardItem?.gameRewardInfo?.rewardDTOList[0]?.rewardCount > 1
                ? "days"
                : "day"
            }   ${
              rewardItem?.gameRewardInfo?.rewardDTOList[0]?.rewardDesc
            } and ${rewardItem?.gameRewardInfo?.rewardDTOList[1]?.rewardCount} 
            
            ${
              rewardItem?.gameRewardInfo?.rewardDTOList[1]?.rewardCount > 1
                ? "days"
                : "day"
            }
              ${rewardItem?.gameRewardInfo?.rewardDTOList[1]?.rewardDesc}`}
          {rewardItem?.rewardType == "Daily Leaderboard" &&
            rewardItem?.gameRewardInfo?.beans > 0 &&
            `${rewardItem?.gameRewardInfo?.beans} beans`}
        </p>
      </div>
    </div>
  );
};
