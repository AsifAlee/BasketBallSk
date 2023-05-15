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
  const [isSeeMoreToday, setIsSeeMoreToday] = useState(true);
  const [isSeeMoreYest, setIsSeeMoreYest] = useState(true);
  const [todayRestWinners, setTodayRestWinners] = useState([]);

  const [yestRestWinners, setYestRestWinners] = useState([]);

  // console.log("talentDailyToday:", talentDailyToday);

  useEffect(() => {
    console.log("today rest winners:", todayRestWinners);

    if (isSeeMoreToday) {
      setTodayRestWinners(talentDailyToday?.slice(3, 10));
    } else {
      setTodayRestWinners(talentDailyToday?.slice(3));
    }
  }, [isSeeMoreToday]);

  useEffect(() => {
    if (isSeeMoreYest) {
      setYestRestWinners(talentDailyYest?.slice(3, 10));
    } else {
      setYestRestWinners(talentDailyYest?.slice(3));
    }
  }, [isSeeMoreYest]);

  useEffect(() => {
    setTodayRestWinners(talentDailyToday?.slice(3, 10));
  }, [talentDailyToday]);
  useEffect(() => {
    setYestRestWinners(talentDailyYest?.slice(3, 10));
  }, [talentDailyYest]);
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
          talentDaily={true}
        />
      </div>

      {dailyTabs.today ? (
        talentDailyToday?.length > 0 ? (
          <div className="dailyTodayLeaderBrd">
            <div className="topRank">
              {talentDailyToday?.slice(0, 3).map((user, index) => (
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
              {todayRestWinners?.map((item, index) => {
                let newIndex = index + 3;
                return (
                  <FieldLeaderBoardItem
                    showEst={false}
                    user={item}
                    key={index}
                    index={newIndex + 1}
                    isTalent={true}
                    isToday={true}
                  />
                );
              })}
            </div>
            {talentDailyToday?.length > 10 && (
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
        talentDailyYest?.length > 0 ? (
          <div className="dailyTodayLeaderBrd">
            <div className="topRank">
              {talentDailyYest?.slice(0, 3).map((user, index) => (
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
              {yestRestWinners?.map((item, index) => {
                let newIndex = index + 3;
                return (
                  <FieldLeaderBoardItem
                    showEst={false}
                    user={item}
                    key={index}
                    index={newIndex + 1}
                    isTalent={true}
                    isToday={true}
                  />
                );
              })}
            </div>
            {talentDailyYest?.length > 10 && (
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
