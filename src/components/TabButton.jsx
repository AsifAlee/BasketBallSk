import React from "react";

export const TabButton = (props) => {
  const { children, text, handleClick, isActive, isBlackNWhite } = props;
  return (
    <button
      className={`tabButton ${isActive ? "tabButtonOn" : "tabButtonOff"}`}
      onClick={() => handleClick(text)}
      // disabled={isActive === false}
      style={{
        filter:
          isActive === false && isBlackNWhite === true && "grayscale(100%)",
      }}
    >
      {children}
    </button>
  );
};
