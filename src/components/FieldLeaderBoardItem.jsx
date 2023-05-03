import React from "react";
import unknown from "../assets/images/unknown-user.png";
import levelIcon from "../assets/images/score-icon.png";
import bean from "../assets/images/bean.png";
import energyIcon from "../assets/images/energy-icon.png";

export const FieldLeaderBoardItem = (props) => {
  const { user, index, estRewards, isTalent, isToday } = props;

  return (
    <div className="fieldGoalLederBoarItem">
      <div className="leftDiv">
        <span className="rankIndex">{index}</span>
        <img src={user.avatar ? user.avatar : unknown} className="restUser" />
        <span className="name">{user.nickname}</span>
        <img src={levelIcon} className="levelIcon" />
      </div>
      {props.showEst && (
        <div className="middle-div">
          <span className="title">
            {isToday ? "Est. Rewards" : "Rewards Sent"}:
          </span>
          <img src={bean} />
          <span>{estRewards}</span>
        </div>
      )}

      <div className="rightDiv">
        <img src={isTalent ? energyIcon : bean} className="basket" />
        <span>{user.count}</span>
      </div>
    </div>
  );
};
