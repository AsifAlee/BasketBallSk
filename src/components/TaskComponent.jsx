import React from "react";

import token from "../assets/images/token.png";
import circle from "../assets/images/no-tick-mark.png";

export const TaskComponent = () => {
  return (
    <div className="task">
      <div className="taskText">
        <span className="index">1.</span>
        <span>Win 2X PK Daily</span>
      </div>

      <div className="token-display">
        <span>500</span>
        <img src={token} />
      </div>

      <img src={circle} className="isCompleted" />
    </div>
  );
};
