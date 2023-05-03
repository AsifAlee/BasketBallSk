import React, { useContext, useState } from "react";
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

  const calculateEstRewards = (index, isPrev) => {
    let totalBeansPot = isPrev
      ? userInfo.userDailyBeansPotPrev
      : userInfo.userDailyBeansPot;
    console.log("total beans pot:", totalBeansPot);

    const percent = userDailyPot.find((item) => item.rank === index)?.percent;
   const  result = totalBeansPot ? (percent / 100) * totalBeansPot : 0;

    return result;
  };

  const { rankings } = useContext(AppContext);
  const { userDailyToday, userDailyYest } = rankings;
  console.log("rankings in user daily", rankings);

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
            {userDailyToday.slice(0, 3).map((user, index) => (
              <Topper
                user={user}
                index={index + 1}
                key={index}
                estRewards={calculateEstRewards(index + 1)}
                showEst={true}
                isToday={true}
              />
            ))}
          </div>
          <div className="restWinners">
            {userDailyToday.map((item, index) => (
              <FieldLeaderBoardItem
                user={item}
                key={index}
                index={index + 1}
                estRewards={calculateEstRewards(index + 1)}
                showEst={index <= 4 ? true : false}
                isToday={true}
              />
            ))}
          </div>
        </div>
      )}

      {dailyTabs.yesterday && (
        <div className="dailyTodayLeaderBrd">
          <div className="topRank">
            {userDailyYest.slice(0, 3).map((user, index) => (
              <Topper
                user={user}
                index={index + 1}
                key={index}
                estRewards={calculateEstRewards(index + 1, true)}
                showEst={true}
                isToday={false}
              />
            ))}
          </div>
          <div className="restWinners">
            {userDailyYest.map((item, index) => (
              <FieldLeaderBoardItem
                user={item}
                key={index}
                index={index + 1}
                estRewards={calculateEstRewards(index + 1, true)}
                showEst={index <= 4 ? true : false}
                isToday={false}
              />
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
