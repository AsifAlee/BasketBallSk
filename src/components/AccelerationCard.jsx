import React, { useState } from "react";
import "../styles/accelerationCard.scss";
import user from "../assets/images/unknown-user.png";
import accelerationCard from "../assets/images/acceleration-card.png";
import sendBtn from "../assets/images/Send.png";
import { TabButton } from "./TabButton";
export const AccelerationCard = () => {
  const [isSent, setIsSent] = useState(0);
  const handleClick = () => {
    setIsSent((prevState) => !prevState);
  };
  return (
    <div className="accCard">
      <div className="leftDiv">
        <img src={user} />
        <div className="info">
          <p>NAME</p>
          <p>ID:123455688</p>
        </div>
      </div>
      <div className="rightDiv">
        <img src={accelerationCard} />
      </div>
      <TabButton handleClick={handleClick} text="text" isActive={isSent}>
        <img src={sendBtn} />
      </TabButton>
      <p className="eligibility-text">NOT ELIGIBLE FOR THIS CARD</p>
    </div>
  );
};
