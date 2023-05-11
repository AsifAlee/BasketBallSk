import React, { useContext, useEffect, useState } from "react";
import "../../../../styles/giftingboard.scss";
import Topper from "../../../../components/Topper";
import { FieldLeaderBoardItem } from "../../../../components/FieldLeaderBoardItem";
import { SliderButton } from "../../../../components/SliderButton";
import leaderBordTitle from "../../../../assets/images/leaderboard.png";
import today from "../../../../assets/images/Daily.png";
import yesterday from "../../../../assets/images/Overall.png";
import { ButtonSlider } from "../../../../components/ButtonSlider";
import bg from "../../../../assets/images/slide-button-bg-today-yesterday.png";
import { AppContext } from "../../../../App";
import { userDailyPot } from "../../../../beansPot";
export const Daily = () => {
  const { userInfo } = useContext(AppContext);
  const [dailyTabs, setDailyTabs] = useState({
    today: true,
    yesterday: false,
  });
  const { rankings } = useContext(AppContext);
  const { talentDailyToday, talentDailyYest } = rankings;
  const [isSeeMoreToday, setIsSeeMoreToday] = useState(1);
  const [isSeeMoreYest, setIsSeeMoreYest] = useState(1);
  const [todayRestWinners, setTodayRestWinners] = useState(
    talentDailyToday.slice(3, 10)
  );

  const [yestRestWinners, setYestRestWinners] = useState(
    talentDailyYest.slice(3, 10)
  );

  useEffect(() => {
    if (isSeeMoreToday) {
      setTodayRestWinners(todayRestWinners.slice(3, 10));
    } else {
      setTodayRestWinners(todayRestWinners.slice(3));
    }
  }, [isSeeMoreToday]);

  useEffect(() => {
    if (isSeeMoreYest) {
      setYestRestWinners(yestRestWinners.slice(3, 10));
    } else {
      setYestRestWinners(yestRestWinners.slice(3));
    }
  }, [isSeeMoreYest]);
  const toggleTabs = () => {
    setDailyTabs({ today: !dailyTabs.today, yesterday: !dailyTabs.yesterday });
  };

  return (
    <div className="talentDailyLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBordTitle} className="title" />
      </div>
      <div className="dailyTabBtns">
        <ButtonSlider
          texts={["Today", "Yesterday"]}
          bg={bg}
          isPot={0}
          onToggle={toggleTabs}
          isLeaderBoard={1}
        />
      </div>

      {dailyTabs.today ? (
        talentDailyToday.length > 0 ? (
          <div className="dailyTodayLeaderBrd">
            <div className="topRank">
              {talentDailyToday.slice(0, 3).map((user, index) => (
                <Topper
                  user={user}
                  index={index + 1}
                  key={index}
                  showEst={false}
                  isTalent={true}
                />
              ))}
            </div>
            <div
              className="restWinners"
              style={{ overflowY: isSeeMoreToday ? "hidden" : "auto" }}
            >
              {talentDailyToday.slice(3).map((item, index) => {
                let newIndex = index + 3;
                <FieldLeaderBoardItem
                  showEst={false}
                  user={item}
                  key={index}
                  index={newIndex + 1}
                  isTalent={true}
                  isToday={true}
                />;
              })}
            </div>
            {talentDailyToday.length > 10 && (
              <button
                className={isSeeMoreToday ? "seeMore" : "seeLess"}
                onClick={() => setIsSeeMoreToday((prev) => !prev)}
              ></button>
            )}
          </div>
        ) : (
          <div className="noData">No Data Found</div>
        )
      ) : (
        ""
      )}

      {dailyTabs.yesterday ? (
        talentDailyYest.length > 0 ? (
          <div className="dailyTodayLeaderBrd">
            <div className="topRank">
              {talentDailyYest.slice(0, 3).map((user, index) => (
                <Topper
                  user={user}
                  index={index + 1}
                  key={index}
                  showEst={false}
                  isTalent={true}
                />
              ))}
            </div>
            <div
              className="restWinners"
              style={{ overflowY: isSeeMoreYest ? "hidden" : "auto" }}
            >
              {talentDailyYest.slice(3).map((item, index) => {
                let newIndex = index + 3;
                <FieldLeaderBoardItem
                  showEst={false}
                  user={item}
                  key={index}
                  index={newIndex + 1}
                  isTalent={true}
                  isToday={true}
                />;
              })}
            </div>
            {talentDailyYest.length > 10 && (
              <button
                className={isSeeMoreYest ? "seeMore" : "seeLess"}
                onClick={() => setIsSeeMoreYest((prev) => !prev)}
              ></button>
            )}
          </div>
        ) : (
          <div className="noData">No Data Found</div>
        )
      ) : (
        ""
      )}
    </div>
  );
};
