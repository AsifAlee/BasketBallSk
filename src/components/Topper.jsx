import React from "react";
import "../pages/FieldGoalMilestone/fieldGoal.scss";
import rank1 from "../assets/images/gold.png";
import rank2 from "../assets/images/silver.png";
import rank3 from "../assets/images/bronze.png";
import bean from "../assets/images/bean.png";
import unknown from "../assets/images/unknown-user.png";
import ball from "../assets/images/score-icon.png";
import enerygyIcon from "../assets/images/energy-icon.png";
const Topper = (props) => {
  const { user, estRewards, showEst, isTalent, isToday } = props;
  return (
    <div className="topper">
      <div className="topper-images">
        <img
          src={props.index === 1 ? rank1 : props.index === 2 ? rank2 : rank3}
          // src={rank2}
          className="rank"
        />
        <img src={user.avatar ? user.avatar : unknown} className="user" />
      </div>

      <div className="name">{user.nickname}</div>
      {showEst ? (
        <div className="est-rewards">
          <span>
            {isToday
              ? `Est.rewards:${estRewards}`
              : `Rewards Sent${estRewards}`}
          </span>
          <img src={bean} className="bean" />
        </div>
      ) : (
        ""
      )}

      <div className="score">
        <img src={isTalent ? enerygyIcon : ball} />
        <span>{user.count}</span>
      </div>
    </div>
  );
};
export default Topper;
