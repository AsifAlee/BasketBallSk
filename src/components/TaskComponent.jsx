import React from "react";

import token from "../assets/images/token.png";
import circle from "../assets/images/no-tick-mark.png";

export const TaskComponent = (props) => {
  const { taskItem } = props;
  return (
    <div className="task">
      <div className="taskText">
        <span className="index">1.</span>
        <span>{taskItem.detail}</span>
      </div>

      <div className="token-display">
        <span>{taskItem.tokens}</span>
        <img src={token} />
      </div>
      <div className="isCompleted">
        <img src={circle} className="circle" />
      </div>
    </div>
  );
};
