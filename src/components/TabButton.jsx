import React from "react";

export const TabButton = (props) => {
  const { children, text, handleClick, isActive } = props;
  return (
    <button
      className={`tabButton ${isActive ? "tabButtonOn" : "tabButtonOff"}`}
      onClick={() => handleClick(text)}
    >
      {children}
    </button>
  );
};
