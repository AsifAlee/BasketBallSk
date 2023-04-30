import React from "react";
import unknown from "../assets/images/unknown-user.png";
import levelIcon from "../assets/images/score-icon.png";
import bean from "../assets/images/bean.png";

export const FieldLeaderBoardItem = (props) => {
  return (
    <div className="fieldGoalLederBoarItem">
      <div className="leftDiv">
        <span className="rankIndex">1.</span>
        <img src={unknown} className="restUser" />
        <span className="name">Asif Ali Khan Asif Ali Khan</span>
        <img src={levelIcon} className="levelIcon" />
      </div>
      {props.showEst && (
        <div className="middle-div">
          <span className="title">Est. Rewards:</span>
          <img src={bean} />
          <span>00000</span>
        </div>
      )}

      <div className="rightDiv">
        <img src={props.showEst ? bean : levelIcon} className="basket" />
        <span>125</span>
      </div>
    </div>
  );
};
