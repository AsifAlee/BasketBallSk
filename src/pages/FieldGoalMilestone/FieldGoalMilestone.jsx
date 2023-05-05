import React, { useContext } from "react";
import BeansPot from "./BeansPot";
import Leaderboard from "./Leaderboard";
import ProgressBar from "./ProgressBar";
import ibBtn from "../../assets/images/i-buttons-b.png";
import iaBtn from "../../assets/images/i-button-a.png";
import progressImg from "../../assets/images/progress-bar.png";
import currentPos from "../../assets/images/current-position.gif";

import "./fieldGoal.scss";
import { AppContext } from "../../App";
import PopUp from "../../components/PopUp";
import SuccessAttemptPopUp from "../../popups/SuccessAttemptPopUp";
import MilestonePopUp from "../../popups/MilestonePopUp";
export const FieldGoalMilestone = () => {
  const {
    userInfo,
    toggleProgressPopUp,
    progressPopUp,
    toggleSuccessAttemptPopUp,
    showSuccessAttemptPopUp,
    milestonePopUp,
    toggleMilestonePopUp,
  } = useContext(AppContext);
  return (
    <div>
      <div className="successfull-attempts">
        <p>MY SUCCESSFULL ATTEMPTS:{userInfo.mySuccessfullAttempt}</p>
        <img
          src={ibBtn}
          className="ibBtn"
          onClick={toggleSuccessAttemptPopUp}
        />
        <img src={iaBtn} className="iaBtn" onClick={toggleMilestonePopUp} />
        <div className="progressBar">
          <div className="">
            <img src={currentPos} className="currPosition" />

            <img src={progressImg} />
          </div>
        </div>

        <div className="progressLabel"></div>
      </div>
      <BeansPot />
      <Leaderboard />
      <div className="footer"></div>
      {progressPopUp && <PopUp>My popup</PopUp>}
      {showSuccessAttemptPopUp && <SuccessAttemptPopUp />}
      {
        milestonePopUp && <MilestonePopUp />
      }
    </div>
  );
};
