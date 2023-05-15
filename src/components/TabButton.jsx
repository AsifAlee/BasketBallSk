import React from "react";

export const TabButton = (props) => {
  const {
    children,
    text,
    handleClick,
    isActive,
    isBlackNWhite,
    isSendAcc,
    IsDisabled,
  } = props;
  return (
    <button
      className={`tabButton ${isActive ? "tabButtonOn" : "tabButtonOff"}`}
      onClick={() => handleClick(text)}
      disabled={IsDisabled}
      style={{
        filter:
          isActive === false && isBlackNWhite === true && "grayscale(100%)",
        paddingBottom: isSendAcc ? "2vw" : "",
      }}
    >
      {children}
    </button>
  );
};
