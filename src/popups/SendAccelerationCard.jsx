import React, { useContext, useState } from "react";
import PopUp from "../components/PopUp";
import titleBanner from "../assets/images/Send-Acceleration-card.png";
import bg from "../assets/images/task-game-bg2.png";
import { AppContext } from "../App";
import { AccelerationCard } from "../components/AccelerationCard";
import { baseUrl, baseUrl2, recvrId, testToken, testUserId } from "../api";
import sendBtn from "../assets/images/Send.png";
import accBtn from "../assets/images/Accelerate.png";
import { TabButton } from "../components/TabButton";
import RadioSelect from "../components/RadioSelect";

export const SendAccelerationCard = () => {
  const { toogleAccPopUp, getInfo } = useContext(AppContext);
  const [foundUsers, setFoundUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [cardRecvStatus, setCardRecvStatus] = useState("");
  const { currentUser } = useContext(AppContext);
  const [isAccBtnDisabled, setIsAccBtnDisabled] = useState(false);

  const [radioSelected, setIsRadioSelected] = useState(null);
  const handleRadioCheck = (index) => {
    setIsRadioSelected(index);
  };

  const searchUser = () => {
    setIsRadioSelected(null);
    setCardRecvStatus("");
    fetch(
      `${baseUrl2}meShow/entrance?parameter=%7B%22FuncTag%22:10002008,%22fuzzyString%22:%22${inputValue}%22,pageCount:10,%22pageNum%22:%221%22%7D`
    )
      .then((res) => res.json())
      .then((res) => {
        setFoundUsers(res.roomList);
        if (!res.roomList.length) {
          setCardRecvStatus("No User Found!");
        }
      });
  };
  const sendCard = () => {
    fetch(`${baseUrl}/basketball/sendAccelerationCard`, {
      method: "POST",
      headers: {
        token: currentUser.userToken,
        userId: currentUser.userId,
        // userId: testUserId,
        // token: testToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // sendId: testUserId,
        sendId: currentUser.userId,
        receiveId: foundUsers[radioSelected].userId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setIsAccBtnDisabled(true);
        if (res.data === true) {
          setCardRecvStatus(res.msg);
        } else if (res.errorCode === 11000000) {
          setCardRecvStatus("NOT ELIGIBLE FOR THIS CARD");
        } else {
          setCardRecvStatus(res.msg);
        }
        setIsAccBtnDisabled(false);
        getInfo();
      })
      .catch((error) => {
        setIsAccBtnDisabled(false);
        console.error(" card send  error:", error);
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
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <button
            className={`icon ${!inputValue ? "blackNWhite" : ""}`}
            onClick={searchUser}
            disabled={!inputValue}
          />
        </div>
        {foundUsers.length ? (
          <>
            <div className="radio-container">
              {foundUsers.map((user, index) => (
                <RadioSelect
                  handleRadioCheck={handleRadioCheck}
                  index={index}
                  isSelected={radioSelected}
                >
                  <AccelerationCard user={user} />
                </RadioSelect>
              ))}
            </div>
            <TabButton
              handleClick={sendCard}
              text="text"
              isActive={foundUsers.length > 0 && radioSelected !== null}
              isBlackNWhite={foundUsers.length > 0 || radioSelected !== null}
              isSendAcc={true}
              isDisabled={isAccBtnDisabled}
            >
              <img src={accBtn} />
            </TabButton>
          </>
        ) : (
          ""
        )}

        <p className="eligibility-text">{cardRecvStatus}</p>
      </div>
    </PopUp>
  );
};
