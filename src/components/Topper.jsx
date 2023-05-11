import React from "react";
import "../pages/FieldGoalMilestone/fieldGoal.scss";
import rank1 from "../assets/images/gold.png";
import rank2 from "../assets/images/silver.png";
import rank3 from "../assets/images/bronze.png";
import bean from "../assets/images/bean.png";
import unknown from "../assets/images/unknown-user.png";
import ball from "../assets/images/score-icon.png";
import enerygyIcon from "../assets/images/energy-icon.png";
import lock from "../assets/images/lock.png";
import { formatNumbers, getLevelImage, gotoProfile } from "../functions";
const Topper = (props) => {
  const { user, estRewards, showEst, isTalent, isToday, isUser, isMilestone } =
    props;
  return (
    <div className="topper">
      <div className="topper-images" onClick={() => gotoProfile(user.userId)}>
        <img
          src={props.index === 1 ? rank1 : props.index === 2 ? rank2 : rank3}
          className="rank"
        />
        <img src={user.avatar ? user.avatar : unknown} className="user" />
      </div>
      <div className="name">
        <p>{user.nickname}</p>
      </div>
      <div className="level-icon">
        <img
          src={getLevelImage(
            isTalent ? user.actorLevel : user.userLevel,
            isTalent
          )}
        />
      </div>
      {showEst ? (
        <div
          className="est-rewards"
          style={{
            backgroundColor:
              user.count < 1000 && isMilestone === true ? "#858894" : "none",
          }}
        >
          {parseInt(user.count) < 1000 && isMilestone === true ? (
            <img src={lock} className="lock" />
          ) : (
            ""
          )}
          <span>
            {isToday
              ? `Est.rewards:${estRewards}`
              : `Rewards Sent:${estRewards}`}
          </span>
          <img src={bean} className="bean" />
        </div>
      ) : (
        ""
      )}

      <div className="score">
        <img src={isTalent ? enerygyIcon : isUser ? bean : ball} />
        <span>{user.count}</span>
      </div>
    </div>
  );
};
export default Topper;
