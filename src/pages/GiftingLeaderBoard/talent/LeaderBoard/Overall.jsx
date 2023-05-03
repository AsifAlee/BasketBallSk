import React, { useContext, useEffect, useState } from "react";
import Topper from "../../../../components/Topper";
import { FieldLeaderBoardItem } from "../../../../components/FieldLeaderBoardItem";
import leaderBordTitle from "../../../../assets/images/leaderboard.png";
import { AppContext } from "../../../../App";
import { talentOverAllPot } from "../../../../beansPot";

export const Overall = () => {
  const { rankings, userInfo } = useContext(AppContext);
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

  const calculateEstRewards = (index) => {
    const percent = talentOverAllPot.find(
      (item) => item.rank === index
    )?.percent;
    return (percent / 100) * userInfo.talentOverallBeansPot;
  };
  const toppersData = ["NickName", "Nickname2", "nickName3"];
  const [isSeeMore, setIsSeeMore] = useState(0);
  return (
    <div className="talentOverallLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBordTitle} className="title" />
      </div>

      <div>
        <div className="topRank">
          {rankings.talentOverall.slice(0, 3).map((user, index) => (
            <Topper
              user={user}
              index={index + 1}
              key={index}
              estRewards={calculateEstRewards(index + 1)}
              showEst={index <= 4 ? true : false}
            />
          ))}
        </div>
        <div className="restWinners">
          {rankings.talentOverall.slice(3).map((item, index) => (
            <FieldLeaderBoardItem
              showEst={index <= 4 ? true : false}
              user={item}
              key={index}
              index={index + 1}
              estRewards={calculateEstRewards(index + 1)}
            />
          ))}
        </div>
      </div>

      <button
        className={isSeeMore ? "seeMore" : "seeLess"}
        onClick={() => setIsSeeMore((prev) => !prev)}
      ></button>
    </div>
  );
};
