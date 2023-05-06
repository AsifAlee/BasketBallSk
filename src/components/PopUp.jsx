import React, { useEffect } from "react";
import "../styles/popup.scss";
const PopUp = (props) => {
  const { children, bg, title, popUpHandler, isAccPopUp, isRewards, isGame } =
    props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="overlay">
      <div
        className="content"
        style={{
          backgroundImage: `url(${bg})`,
          minHeight: `${
            isAccPopUp ? "70vw" : isRewards ? "58vw" : isGame ? "65vw" : ""
          }`,
          width: `${isAccPopUp ? "85%" : isRewards ? "80%" : ""}`,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "-8vw",
            justifyContent: "center",
          }}
        >
          <img
            src={title}
            className="title"
            style={{ visibility: title ? "visible" : "hidden" }}
          />
        </div>
        {children}
      </div>
      <button className="closeBtn" onClick={popUpHandler}></button>
    </div>
  );
};

export default PopUp;
