import React, { useContext, useEffect, useState } from "react";
import "../../../../styles/giftingboard.scss";
import leaderBordTitle from "../../../../assets/images/leaderboard.png";
import Topper from "../../../../components/Topper";
import { FieldLeaderBoardItem } from "../../../../components/FieldLeaderBoardItem";
import { AppContext } from "../../../../App";
import { userOverallPot } from "../../../../beansPot";

export const Overall = () => {
  const { rankings, userInfo } = useContext(AppContext);
  const { userOverall } = rankings;
  const calculateEstRewards = (index) => {
    const totalBeansPot = userInfo.userOverallBeansPot;
    const percent = userOverallPot.find((item) => item.rank === index)?.percent;
    const result = totalBeansPot ? (percent / 100) * totalBeansPot : 0;
    return result.toFixed(0);
  };

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
  const [isSeeMore, setIsSeeMore] = useState(1);

  const [restWinners, setRestWinners] = useState([]);

  useEffect(() => {
    if (isSeeMore) {
      setRestWinners(userOverall.slice(3, 10));
    } else {
      setRestWinners(userOverall.slice(3));
    }
  }, [isSeeMore]);
  useEffect(() => {
    setRestWinners(userOverall.slice(3, 10));
  }, [userOverall]);

  return (
    <div className="userOverallLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBordTitle} className="title" />
      </div>

      {}
      <div>
        <div className="topRank">
          {rankings.userOverall.slice(0, 3).map((user, index) => (
            <Topper
              user={user}
              index={index + 1}
              key={index}
              isToday={true}
              showEst={true}
              estRewards={calculateEstRewards(index + 1)}
              isUser={true}
            />
          ))}
        </div>
        <div
          className="restWinners"
          style={{ overflowY: isSeeMore ? "hidden" : "auto" }}
        >
          {restWinners.map((item, index) => {
            let newIndex = index + 3;
            return (
              <FieldLeaderBoardItem
                user={item}
                key={index}
                index={newIndex + 1}
                estRewards={calculateEstRewards(index + 1)}
                showEst={newIndex <= 4 ? true : false}
                isToday={true}
                isUser={true}
              />
            );
          })}
        </div>
      </div>

      {rankings.userOverall.length > 10 ? (
        <button
          className={isSeeMore ? "seeMore" : "seeLess"}
          onClick={() => setIsSeeMore((prev) => !prev)}
        ></button>
      ) : (
        ""
      )}
    </div>
  );
};
