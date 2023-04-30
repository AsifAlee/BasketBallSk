import React, { useEffect } from "react";
import "../styles/popup.scss";
const PopUp = (props) => {
  const { children, bg, title, popUpHandler, isAccPopUp, isRewards } = props;

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
          minHeight: `${isAccPopUp ? "50vw" : isRewards ? "58vw" : ""}`,
          width: `${isAccPopUp ? "70%" : isRewards ? "80vw" : ""}`,
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
          <img src={title} className="title" />
        </div>
        {children}
      </div>
      <button className="closeBtn" onClick={popUpHandler}></button>
    </div>
  );
};

export default PopUp;
