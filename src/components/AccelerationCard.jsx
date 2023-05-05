import React, { useState } from "react";
import "../styles/accelerationCard.scss";
import unknown from "../assets/images/unknown-user.png";
import accelerationCard from "../assets/images/acceleration-card.png";
export const AccelerationCard = ({ user }) => {
  return (
    <div className="accCard">
      <div className="leftDiv">
        <img
          src={
            user.portrait_path_original ? user.portrait_path_original : unknown
          }
        />
        <div className="info">
          <p className="name">{user.nickname}</p>
          <p>ID:{user.userId}</p>
        </div>
      </div>
      <div className="rightDiv">
        <img src={accelerationCard} />
      </div>
    </div>
  );
};
