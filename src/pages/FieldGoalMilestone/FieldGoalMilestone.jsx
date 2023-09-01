import React, { useContext, useEffect, useState } from "react";
import BeansPot from "./BeansPot";
import Leaderboard from "./Leaderboard";
import ProgressBar from "./ProgressBar";
import ibBtn from "../../assets/images/i-buttons-b.png";
import iaBtn from "../../assets/images/i-button-a.png";
import progressImg from "../../assets/images/progress-bar.png";
import currentPos from "../../assets/images/current-position.gif";
import completed from "../../assets/images/completed.png";
import unknowUser from "../../assets/images/unknown-user.png";
import "./fieldGoal.scss";
import { AppContext } from "../../App";
import PopUp from "../../components/PopUp";
import SuccessAttemptPopUp from "../../popups/SuccessAttemptPopUp";
import MilestonePopUp from "../../popups/MilestonePopUp";
import Marquee from "react-fast-marquee";
import { baseUrl } from "../../api";
export const FieldGoalMilestone = () => {
  const { milesStoneMarquee } = useContext(AppContext);
  const {
    userInfo,
    toggleProgressPopUp,
    progressPopUp,
    toggleSuccessAttemptPopUp,
    showSuccessAttemptPopUp,
    milestonePopUp,
    toggleMilestonePopUp,
    isDisabled,
  } = useContext(AppContext);
  const { mySuccessfullAttempt } = userInfo;
  const [currentAttempts, setCurrentAttempts] = useState("0vw");
  const test = 2000;

  useEffect(() => {
    if (mySuccessfullAttempt < 100) {
      setCurrentAttempts("1vw"); //50
    } else if (mySuccessfullAttempt < 200 && mySuccessfullAttempt >= 100) {
      setCurrentAttempts("15vw"); //100
    } else if (mySuccessfullAttempt < 500 && mySuccessfullAttempt >= 200) {
      setCurrentAttempts("28vw"); //200
    } else if (mySuccessfullAttempt < 1000 && mySuccessfullAttempt >= 500) {
      setCurrentAttempts("41vw"); //500
    } else if (mySuccessfullAttempt >= 1000 && mySuccessfullAttempt < 2000) {
      setCurrentAttempts("55vw"); //1000
    } else if (mySuccessfullAttempt >= 2000) {
      setCurrentAttempts("68vw"); //2000
    }
  });
  return (
    <div className="fieldGoalSection">
      <div className="marquee">
        <Marquee speed={70}>
          {milesStoneMarquee?.map((item, index) => (
            <div className="field-marq-item" key={index}>
              <img
                className="user-img"
                src={item.portrait ? item.portrait : unknowUser}
              />

              <div className="user-details">
                <span className="name">
                  {`${item.nickName.slice(0, 6)}`} &nbsp;{" "}
                </span>
                <span>has won &nbsp;</span>

                <span>
                  {" "}
                  {item.userScore === 1
                    ? "3 days Raging Bull Profile Frame"
                    : item.userScore === 2
                    ? "3 days Spaceship Entrance"
                    : item.userScore === 3
                    ? "5 days Brave Heart Profile Frame"
                    : item.userScore === 4
                    ? "7 days Ballpark Audio"
                    : "7 days HERO Entrance"}{" "}
                </span>
                <img
                  src={`${baseUrl}/streamkar/rewards/${
                    item.userScore === 1
                      ? "valentineFrameUser.png"
                      : item.userScore === 2
                      ? "spaceship.png"
                      : item.userScore === 3
                      ? "braveHeart.png"
                      : item.userScore === 4
                      ? "ballParkTheme.png"
                      : "heroEntrance.png"
                  }`}
                  className="rew-img"
                />
                <span>{`Congratulations!`}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="successfull-attempts">
        <p>MY SUCCESSFULL ATTEMPTS</p>
        <div className="attempts-display">
          <span className="total-attempts">{mySuccessfullAttempt}</span>
        </div>
        <img
          src={ibBtn}
          className="ibBtn"
          onClick={() => {
            if (isDisabled) {
              return;
            } else {
              toggleSuccessAttemptPopUp();
            }
          }}
        />
        <div className="progressBarSection">
          <img
            src={iaBtn}
            className="iaBtn"
            onClick={() => {
              if (isDisabled) {
                return;
              } else {
                toggleMilestonePopUp();
              }
            }}
          />

          <div className="progressBar">
            <div className="innerProgress">
              <div className="line">
                <img
                  src={currentPos}
                  className="currPosition animate"
                  style={{ transform: `translateX(${currentAttempts})` }}
                />
                <img
                  src={completed}
                  className="completed"
                  style={{
                    filter: mySuccessfullAttempt < 50 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed100"
                  style={{
                    filter: mySuccessfullAttempt < 100 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed200"
                  style={{
                    filter: mySuccessfullAttempt < 200 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed500"
                  style={{
                    filter: mySuccessfullAttempt < 500 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed1k"
                  style={{
                    filter: mySuccessfullAttempt < 1000 ? "grayScale(100)" : "",
                  }}
                />
                <img
                  src={completed}
                  className="completed2k"
                  style={{
                    filter: mySuccessfullAttempt < 2000 ? "grayScale(100)" : "",
                  }}
                />
              </div>
            </div>
            <div className="progressLabel"></div>
          </div>
        </div>
      </div>
      <BeansPot />
      <Leaderboard />
      <div className="footer">
        <span className="rights">All rights reserved by StreamKar</span>
      </div>
      {progressPopUp ? <PopUp>My popup</PopUp> : ""}
      {showSuccessAttemptPopUp ? <SuccessAttemptPopUp /> : ""}
      {milestonePopUp ? <MilestonePopUp /> : ""}
    </div>
  );
};
