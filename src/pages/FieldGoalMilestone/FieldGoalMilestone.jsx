import React from "react";
import BeansPot from "./BeansPot";
import Leaderboard from "./Leaderboard";
import ProgressBar from "./ProgressBar";
import ibBtn from "../../assets/images/i-buttons-b.png";
import iaBtn from "../../assets/images/i-button-a.png";
import progressImg from "../../assets/images/progress-bar.png";
import currentPos from "../../assets/images/current-position.gif";

import "./fieldGoal.scss";
export const FieldGoalMilestone = () => {
  return (
    <div>
      <div className="successfull-attempts">
        <p>MY SUCCESSFULL ATTEMPTS:0000</p>
        <img src={ibBtn} className="ibBtn" />
        <img src={iaBtn} className="iaBtn" />
        <div className="progressBar">
          <img src={currentPos} className="currPosition" />

          <img src={progressImg} />
        </div>
        <div className="progressLabel"></div>
      </div>
      <BeansPot />
      <Leaderboard />
      <div className="footer"></div>
    </div>
  );
};
