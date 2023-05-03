import React, { useContext, useState } from "react";
import "../../styles/growthacc.scss";
import { TaskComponent } from "../../components/TaskComponent";
import img1 from "../../assets/images/info-display.png";
import { SendAccelerationCard } from "../../popups/SendAccelerationCard";
import { AppContext } from "../../App";

export const GrowAcceleration = () => {
  const { userInfo } = useContext(AppContext);

  const { showAccPopUp, toogleAccPopUp } = useContext(AppContext);
  return (
    <div>
      <div className="growthacc-container">
        <div className="title">My Acceleration Card:000</div>
        <button className="acc-btn" onClick={toogleAccPopUp}></button>
        <div className="jumping-character"></div>
        <div className="task-info">
          <p>
            Collect the rare Acceleratin Cards from BasketBall Game and send it
            to your favourite talent to accelerate their growth
          </p>
        </div>
        <div className="task-container">
          {userInfo.dailyTaskList.map((taskItem, index) => (
            <TaskComponent taskItem={taskItem} key={index} />
          ))}
        </div>
      </div>
      <div className="acc-bottom-title"></div>

      <div className="accProgressBarWrap">
        <div className="indicator"></div>
        <div className="accProgressBar"></div>
      </div>

      <div className="total">
        <img className="total-tokens" src={img1} />
        <img className="total-acc" src={img1} />
        <span className="total-acc-text">
          My acceleration rate:{userInfo.myAccRate}
        </span>
        <span className="total-token-text">
          Total tokens collected:{userInfo.tokens}
        </span>
      </div>
      <div className="floating-footer"></div>
      {showAccPopUp ? <SendAccelerationCard /> : ""}
    </div>
  );
};
