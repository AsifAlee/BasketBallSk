import React, { useState } from "react";
import "../../../../styles/giftingboard.scss";
import leaderBordTitle from "../../../../assets/images/leaderboard.png";
import { SliderButton } from "../../../../components/SliderButton";
import today from "../../../../assets/images/Daily.png";
import yesterday from "../../../../assets/images/Overall.png";
import bg from "../../../../assets/images/slide-button-bg-today-yesterday.png";
import Topper from "../../../../components/Topper";
import { FieldLeaderBoardItem } from "../../../../components/FieldLeaderBoardItem";
import { ButtonSlider } from "../../../../components/ButtonSlider";
export const Daily = () => {
  const [dailyTabs, setDailyTabs] = useState({
    today: true,
    yesterday: false,
  });

  const leaderBoardList = [
    "asif ali khan asif ali",
    "atif",
    "arif",
    "akif",
    "kashif",
    "adfd",
    "fdfdfd",
    "fdfd",
    "fdfdf",
  ];
  const toppersData = ["NickName", "Nickname2", "nickName3"];
  const [isSeeMore, setIsSeeMore] = useState(0);
  const toggleTabs = () => {
    setDailyTabs({ today: !dailyTabs.today, yesterday: !dailyTabs.yesterday });
  };

  return (
    <div className="userDailyLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBordTitle} className="title" />
      </div>
      <div className="dailyTabBtns" onClick={toggleTabs}>
        {/* {dailyTabs.today && (
          <SliderButton className="daily">
            <img src={today} />
          </SliderButton>
        )}

        {dailyTabs.yesterday && (
          <div style={{ position: "relative", left: "20vw" }}>
            <SliderButton className="daily">
              <img src={yesterday} />
            </SliderButton>
          </div>
        )} */}

        <ButtonSlider
          texts={["Today", "Yesterday"]}
          bg={bg}
          isPot={1}
          onToggle={toggleTabs}
          isLeaderBoard={1}
        />
      </div>

      {dailyTabs.today && (
        <div className="dailyTodayLeaderBrd">
          <div className="topRank">
            {toppersData.map((name, index) => (
              <Topper name={name} index={index + 1} />
            ))}
          </div>
          <div className="restWinners">
            {leaderBoardList.map((item) => (
              <FieldLeaderBoardItem showEst={true} />
            ))}
          </div>
        </div>
      )}

      {dailyTabs.yesterday && (
        <div className="dailyTodayLeaderBrd">
          <div className="topRank">
            {toppersData.map((name, index) => (
              <Topper name={name} index={index + 1} />
            ))}
          </div>
          <div className="restWinners">
            {leaderBoardList.map((item) => (
              <FieldLeaderBoardItem showEst={true} />
            ))}
          </div>
        </div>
      )}

      <button
        className={isSeeMore ? "seeMore" : "seeLess"}
        onClick={() => setIsSeeMore((prev) => !prev)}
      ></button>
    </div>
  );
};
