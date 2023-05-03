import React from "react";
import unknown from "../assets/images/unknown-user.png";
import levelIcon from "../assets/images/score-icon.png";
import bean from "../assets/images/bean.png";

export const FieldLeaderBoardItem = (props) => {
  const { user, index, estRewards } = props;

  return (
    <div className="fieldGoalLederBoarItem">
      <div className="leftDiv">
        <span className="rankIndex">{index}</span>
        <img src={user.avatar} className="restUser" />
        <span className="name">{user.nickname}</span>
        <img src={levelIcon} className="levelIcon" />
      </div>
      {props.showEst && (
        <div className="middle-div">
          <span className="title">Est. Rewards:</span>
          <img src={bean} />
          <span>{estRewards}</span>
        </div>
      )}

      <div className="rightDiv">
        <img src={props.showEst ? bean : levelIcon} className="basket" />
        <span>{user.count}</span>
      </div>
    </div>
  );
};
