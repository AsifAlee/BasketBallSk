import React, { useContext, useEffect, useState } from "react";
import "../../../../styles/giftingboard.scss";
import leaderBordTitle from "../../../../assets/images/leaderboard.png";
import { SliderButton } from "../../../../components/SliderButton";
import today from "../../../../assets/images/Daily.png";
import yesterday from "../../../../assets/images/Overall.png";
import bg from "../../../../assets/images/slide-button-bg-today-yesterday.png";
import Topper from "../../../../components/Topper";
import { FieldLeaderBoardItem } from "../../../../components/FieldLeaderBoardItem";
import { ButtonSlider } from "../../../../components/ButtonSlider";
import { AppContext } from "../../../../App";
import { userDailyPot } from "../../../../beansPot";
export const Daily = () => {
  const { userInfo } = useContext(AppContext);
  const [isSeeMoreToday, setIsSeeMoreToday] = useState(1);
  const [isSeeMoreYest, setIsSeeMoreYest] = useState(1);

  const [dailyTabs, setDailyTabs] = useState({
    today: true,
    yesterday: false,
  });
  const { rankings } = useContext(AppContext);
  const { userDailyToday, userDailyYest } = rankings;
  const [todayRestWinners, setTodayRestWinners] = useState(
    userDailyToday?.slice(3, 10)
  );

  const [yestRestWinners, setYestRestWinners] = useState(
    userDailyYest?.slice(3, 10)
  );

  useEffect(() => {
    if (isSeeMoreToday) {
      setTodayRestWinners(userDailyToday?.slice(3, 10));
    } else {
      setTodayRestWinners(userDailyToday?.slice(3));
    }
  }, [isSeeMoreToday]);

  useEffect(() => {
    if (isSeeMoreYest) {
      setYestRestWinners(userDailyYest?.slice(3, 10));
    } else {
      setYestRestWinners(userDailyYest?.slice(3));
    }
  }, [isSeeMoreYest]);

  useEffect(() => {
    setTodayRestWinners(userDailyToday?.slice(3, 10));
  }, [userDailyToday]);
  useEffect(() => {
    setYestRestWinners(userDailyYest?.slice(3, 10));
  }, [userDailyYest]);

  const toggleTabs = () => {
    setDailyTabs({ today: !dailyTabs.today, yesterday: !dailyTabs.yesterday });
  };

  const calculateEstRewards = (index, isPrev) => {
    let totalBeansPot = isPrev
      ? userInfo.userDailyBeansPotPrev
      : userInfo.userDailyBeansPot;

    const percent = userDailyPot.find((item) => item.rank === index)?.percent;
    const result = totalBeansPot ? (percent / 100) * totalBeansPot : 0;

    return Math.floor(result);
  };

  return (
    <div className="userDailyLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBordTitle} className="title" />
      </div>
      <div className="dailyTabBtns">
        <ButtonSlider
          texts={["Today", "Yesterday"]}
          bg={bg}
          isPot={1}
          onToggle={toggleTabs}
          isLeaderBoard={1}
        />
      </div>

      {dailyTabs.today &&
        (userDailyToday?.length ? (
          <div className="dailyTodayLeaderBrd">
            <div className="userDailTopRank">
              <div className="top1">
                {userDailyToday[0] && (
                  <Topper
                    user={userDailyToday[0]}
                    index={0 + 1}
                    key={0}
                    estRewards={calculateEstRewards(0 + 1)}
                    showEst={true}
                    isToday={true}
                    isUser={true}
                  />
                )}
              </div>

              <div className="top2">
                {userDailyToday[1] && (
                  <Topper
                    user={userDailyToday[1]}
                    index={1 + 1}
                    key={1}
                    estRewards={calculateEstRewards(1 + 1)}
                    showEst={true}
                    isToday={true}
                    isUser={true}
                  />
                )}
              </div>

              <div className="top3">
                {userDailyToday[2] && (
                  <Topper
                    user={userDailyToday[2]}
                    index={2 + 1}
                    key={2}
                    estRewards={calculateEstRewards(2 + 1)}
                    showEst={true}
                    isToday={true}
                    isUser={true}
                  />
                )}
              </div>
            </div>
            <div
              className="restWinners"
              style={{ overflowY: isSeeMoreToday ? "hidden" : "auto" }}
            >
              {todayRestWinners?.map((item, index) => {
                let newIndex = index + 3;
                return (
                  <FieldLeaderBoardItem
                    user={item}
                    key={index}
                    index={newIndex + 1}
                    estRewards={calculateEstRewards(newIndex + 1)}
                    showEst={newIndex <= 4 ? true : false}
                    isToday={true}
                    isUser={true}
                  />
                );
              })}
            </div>

            {userDailyToday?.length > 10 ? (
              <button
                className={isSeeMoreToday ? "seeMore" : "seeLess"}
                onClick={() => {
                  setIsSeeMoreToday((prev) => !prev);
                }}
              ></button>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="noData">No Data Found</div>
        ))}

      {dailyTabs.yesterday &&
        (userDailyYest?.length ? (
          <div className="dailyTodayLeaderBrd">
            <div className="userDailTopRank">
              <div className="top1">
                {userDailyYest[0] && (
                  <Topper
                    user={userDailyYest[0]}
                    index={0 + 1}
                    key={0}
                    estRewards={calculateEstRewards(0 + 1, true)}
                    showEst={true}
                    isToday={false}
                    isUser={true}
                  />
                )}
              </div>

              <div className="top2">
                {userDailyYest[1] && (
                  <Topper
                    user={userDailyYest[1]}
                    index={1 + 1}
                    key={1}
                    estRewards={calculateEstRewards(1 + 1, true)}
                    showEst={true}
                    isToday={false}
                    isUser={true}
                  />
                )}
              </div>

              <div className="top3">
                {userDailyYest[2] && (
                  <Topper
                    user={userDailyYest[2]}
                    index={2 + 1}
                    key={2}
                    estRewards={calculateEstRewards(2 + 1, true)}
                    showEst={true}
                    isToday={false}
                    isUser={true}
                  />
                )}
              </div>
            </div>
            <div
              className="restWinners"
              style={{ overflowY: isSeeMoreYest ? "hidden" : "auto" }}
            >
              {yestRestWinners?.map((item, index) => {
                let newIndex = index + 3;

                return (
                  <FieldLeaderBoardItem
                    user={item}
                    key={index}
                    index={newIndex + 1}
                    estRewards={calculateEstRewards(newIndex + 1, true)}
                    showEst={newIndex <= 4 ? true : false}
                    isToday={false}
                    isUser={true}
                  />
                );
              })}
            </div>
            {userDailyYest?.length > 10 ? (
              <button
                className={isSeeMoreYest ? "seeMore" : "seeLess"}
                onClick={() => {
                  setIsSeeMoreYest((prev) => !prev);
                }}
              ></button>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="noData">No Data Found</div>
        ))}
    </div>
  );
};
