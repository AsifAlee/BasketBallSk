import React, { useContext } from "react";
import PopUp from "../components/PopUp";
import "../styles/popup.scss";

import bg from "../assets/images/task-game-bg2.png";
import titleBanner from "../assets/images/Info-banner-imp.gif";
import { AppContext } from "../App";

const AccInfoPopUp = () => {
  const { toggleAccInfoPopUp, selectedLanguage } = useContext(AppContext);
  return (
    <PopUp
      bg={bg}
      popUpHandler={toggleAccInfoPopUp}
      isAccPopUp={true}
      title={titleBanner}
    >
      <div className="accInfoPopUp">
        <div className="accInfoContent">
          {selectedLanguage === 0 ? (
            <p>
              Complete the daily tasks given above to progress. For every task
              completed, you will receive 50 tokens. These tokens will help you
              increase the acceleration rate.
            </p>
          ) : (
            <p>
              Progress karne ke liye Daily tasks complete karein. Har task
              complete karne pe apko 50 tokens milenge. Yeh token apko apka
              acceleration rate increase karne help karenge.
            </p>
          )}
        </div>
      </div>
    </PopUp>
  );
};

export default AccInfoPopUp;
