import React from "react";
import unknown from "../assets/images/unknown-user.png";
import levelIcon from "../assets/images/score-icon.png";
import bean from "../assets/images/bean.png";
import basketball from "../assets/images/score-icon.png";
import energyIcon from "../assets/images/energy-icon.png";
import { formatNumbers, getLevelImage, gotoProfile } from "../functions";
export const FieldLeaderBoardItem = (props) => {
  const { user, index, estRewards, isTalent, isToday, isUser } = props;

  return (
    <div className="fieldGoalLederBoarItem">
      <div className="leftDiv">
        <span className="rankIndex">{index}</span>
        <img
          src={user.avatar ? user.avatar : unknown}
          className="restUser"
          onClick={() => gotoProfile(user.userId)}
        />
        <span className="name">{user.nickname}</span>
        <img
          src={getLevelImage(
            isTalent ? user.actorLevel : user.userLevel,
            isTalent
          )}
          className="levelIcon"
        />
      </div>
      {props.showEst && (
        <div className="middle-div">
          <span className="title">
            {isToday ? "Est. Rewards" : "Rewards Won"}
          </span>
          <div className="d-flex jc-center al-center">
            <img src={bean} />
            <span>{estRewards}</span>
          </div>
        </div>
      )}

      <div className="rightDiv">
        <img
          src={isTalent ? energyIcon : isUser ? bean : basketball}
          className="basket"
        />
        <span>{user.count}</span>
      </div>
    </div>
  );
};
