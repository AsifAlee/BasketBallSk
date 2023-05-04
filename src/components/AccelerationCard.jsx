import React, { useState } from "react";
import "../styles/accelerationCard.scss";
import unknown from "../assets/images/unknown-user.png";
import accelerationCard from "../assets/images/acceleration-card.png";
import sendBtn from "../assets/images/Send.png";
import { TabButton } from "./TabButton";
import { baseUrl, testToken, testUserId } from "../api";
export const AccelerationCard = ({ user }) => {
  console.log("user inside acc card:", user);
  const [isSent, setIsSent] = useState(0);
  const [alreadyHasCard, setAlreadyHasCard] = useState(1);
  const handleClick = () => {
    fetch(`${baseUrl}/basketball/sendAccelerationCard`, {
      method: "POST",
      headers: {
        token: testToken,
        userId: testUserId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sendId: testUserId, receiveId: user.userId }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("send card response:", res);
        if (res.data === false) {
          setAlreadyHasCard(true);
          setIsSent(false);
        } else {
          setAlreadyHasCard(false);
          setIsSent(true);
        }
      })
      .catch((error) => {
        console.error("api error:", error);
      });
  };
  return (
    <>
      {user ? (
        <div className="accCard">
          <div className="leftDiv">
            <img
              src={
                user.portrait_path_original
                  ? user.portrait_path_original
                  : unknown
              }
            />
            <div className="info">
              <p>{user.nickname}</p>
              <p>ID:{user.userId}</p>
            </div>
          </div>
          <div className="rightDiv">
            <img src={accelerationCard} />
          </div>
          <TabButton handleClick={handleClick} text="text" isActive={isSent}>
            <img src={sendBtn} />
          </TabButton>
          {alreadyHasCard ? (
            <p className="eligibility-text">NOT ELIGIBLE FOR THIS CARD</p>
          ) : (
            <p className="eligibility-text">Card sent successfully</p>
          )}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "1vw" }}>No User Found</p>
      )}
    </>
  );
};
