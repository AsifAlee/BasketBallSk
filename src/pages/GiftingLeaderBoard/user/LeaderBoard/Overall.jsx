import React, { useContext, useState } from "react";
import "../../../../styles/giftingboard.scss";
import leaderBordTitle from "../../../../assets/images/leaderboard.png";
import Topper from "../../../../components/Topper";
import { FieldLeaderBoardItem } from "../../../../components/FieldLeaderBoardItem";
import { AppContext } from "../../../../App";
import { userOverallPot } from "../../../../beansPot";

export const Overall = () => {
  const { rankings, userInfo } = useContext(AppContext);

  // const calculateEstRewards = (index) => {
  //   const percent = userOverallPot.find(item => item.rank === index);
  //   return (percent/100)* userInfo.

  // }

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

  return (
    <div className="userOverallLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBordTitle} className="title" />
      </div>

      <div>
        <div className="topRank">
          {rankings.userOverall.slice(0, 3).map((user, index) => (
            <Topper user={user} index={index + 1} key={index} />
          ))}
        </div>
        <div className="restWinners">
          {rankings.userOverall.slice(3).map((item, index) => (
            <FieldLeaderBoardItem
              showEst={true}
              user={item}
              key={index}
              index={index + 1}
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
