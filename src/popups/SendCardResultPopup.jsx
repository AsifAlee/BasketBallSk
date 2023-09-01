import React, { useContext } from "react";
import PopUp from "../components/PopUp";
import "../styles/popup.scss";
import bg from "../assets/images/task-game-bg2.png";
import title from "../assets/images/growth-accelerated.png";
import { AppContext } from "../App";

const SendCardResultPopup = ({ popUpHandler }) => {
  const { cardReciever } = useContext(AppContext);
  return (
    <PopUp title={title} popUpHandler={popUpHandler} bg={bg} isAccPopUp={1}>
      <div className="sendCardResultPopup">
        <span>Congratulations!</span>
        The ACCELERATION CARD has been successfully delivered to{" "}
        {cardReciever?.name} with id {cardReciever?.id}. Well done on completing
        this task!
      </div>
    </PopUp>
  );
};

export default SendCardResultPopup;
