import React, { useState } from "react";
import "../styles/button-slider.scss";
export const ButtonSlider = (props) => {
  const { bg, texts, onToggle, isPot, isLeaderBoard } = props;
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    console.log('handle click called')
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
          width: isLeaderBoard && "50%",
          fontSize: isLeaderBoard && "2.9vw",
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
