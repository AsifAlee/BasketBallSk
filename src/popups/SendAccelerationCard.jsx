import React, { useContext, useState } from "react";
import PopUp from "../components/PopUp";
import titleBanner from "../assets/images/Send-Acceleration-card.png";
import bg from "../assets/images/task-game-bg2.png";
import { AppContext } from "../App";
import { AccelerationCard } from "../components/AccelerationCard";
import { recvrId, testUserId } from "../api";
export const SendAccelerationCard = () => {
  const { toogleAccPopUp } = useContext(AppContext);
  const [foundUser, setFoundUser] = useState({});
  const [inputValue, setInputValue] = useState({});
  const searchUser = () => {
    fetch(
      `http://test.streamkar.tv/meShow/entrance?parameter=%7B%22FuncTag%22:10002008,%22fuzzyString%22:%22${inputValue}%22,pageCount:10,%22pageNum%22:%221%22%7D`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("user to find is:", res);
        setFoundUser(res.roomList[0]);
      });
  };
  return (
    <PopUp
      title={titleBanner}
      bg={bg}
      popUpHandler={toogleAccPopUp}
      isAccPopUp={1}
    >
      <div className="accPopUp">
        <div className="search">
          <input
            placeholder="TYPE TALENT ID HERE"
            type="number"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <button className="icon" onClick={searchUser} />
        </div>

        <AccelerationCard user={foundUser} />
      </div>
    </PopUp>
  );
};
