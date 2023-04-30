import React from "react";
import ball from "../assets/images/completed.png";
import beanBag from "../assets/images/beanbag.png";
export const RewardHistoryItem = () => {
  return (
    <div className="historyItem">
      <div className="time">
        <p className="date">23-03-05</p>
        <p className="hours">08:37AM</p>
      </div>
      <div className="rewardType">
        <img src={ball} />
      </div>
      <div className="rewards">
        <img src={beanBag} />
        <p className="text">Spaceship entrance 3 days</p>
      </div>
    </div>
  );
};
