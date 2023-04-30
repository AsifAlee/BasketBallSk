import React, { useState } from "react";
import "../styles/button-slider.scss";
export const ButtonSlider = (props) => {
  const { bg, texts, onToggle, isPot, isLeaderBoard } = props;
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle();
    }
  }

  return (
    <div
      className={`slider ${isPot ? "mt1" : ""}`}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <button
        className={`slider-button ${isOn ? "on" : "off"}`}
        style={{
          width: isLeaderBoard && "58%",
          fontSize: isLeaderBoard && "3.2vw",
        }}
      >
        {isOn ? texts[1] : texts[0]}
      </button>
      <div
        className={`slider-handle ${isOn ? "left" : "right"}`}
        onClick={handleToggle}
      />
    </div>
  );
};
