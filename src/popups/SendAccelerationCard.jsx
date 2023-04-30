import React, { useContext, useState } from "react";
import PopUp from "../components/PopUp";
import titleBanner from "../assets/images/Send-Acceleration-card.png";
import bg from "../assets/images/task-game-bg2.png";
import { AppContext } from "../App";
import { AccelerationCard } from "../components/AccelerationCard";
export const SendAccelerationCard = () => {
  const { toogleAccPopUp } = useContext(AppContext);
  return (
    <PopUp
      title={titleBanner}
      bg={bg}
      popUpHandler={toogleAccPopUp}
      isAccPopUp={1}
    >
      <div className="accPopUp">
        <div className="search">
          <input placeholder="TYPE TALENT ID HERE" type="number" />
          <button className="icon" />
        </div>
        <AccelerationCard />
      </div>
    </PopUp>
  );
};
