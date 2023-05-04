import React from "react";
import ball from "../assets/images/completed.png";
import beanBag from "../assets/images/beanbag.png";
import {rewGet} from "../imageContext.js";
export const RewardHistoryItem = (props) => {
  const{rewardItem} = props;
  return (
    <div className="historyItem">
      <div className="time">
        <p className="date">{rewardItem.time.split('T')[0]}</p>
        <p className="hours">{rewardItem.time.split('T')[1]}</p>
      </div>
      <div className="rewardType">
        <img src={ball} />
      </div>
      <div className="rewards">
        <img src={rewGet(rewardItem.rewardDescs)} />
        <p className="text">Spaceship entrance 3 days</p>
      </div>
    </div>
  );
};
