import React from "react";
import "../pages/FieldGoalMilestone/fieldGoal.scss";
import rank1 from "../assets/images/gold.png";
import rank2 from "../assets/images/silver.png";
import rank3 from "../assets/images/bronze.png";
import bean from "../assets/images/bean.png";
import unknown from "../assets/images/unknown-user.png";
import ball from "../assets/images/score-icon.png";
const Topper = (props) => {
  return (
    <div className="topper">
      <div className="topper-images">
        <img
          src={props.index === 1 ? rank1 : props.index === 2 ? rank2 : rank3}
          // src={rank2}
          className="rank"
        />
        <img src={unknown} className="user" />
      </div>

      <div className="name">{props.name}</div>
      <div className="est-rewards">
        <span>Est.rewards:</span>
        <img src={bean} className="bean" />
        <span>500000</span>
      </div>
      <div className="score">
        <img src={ball} />
        <span>12354</span>
      </div>
    </div>
  );
};
export default Topper;
