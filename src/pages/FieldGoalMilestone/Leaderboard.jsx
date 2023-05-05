import React, { useContext } from "react";
import leaderBoardTitle from "../../assets/images/leaderboard.png";
import Topper from "../../components/Topper";
import { FieldLeaderBoardItem } from "../../components/FieldLeaderBoardItem";
import { AppContext } from "../../App";
import { fieldGoalPot, userOverallPot } from "../../beansPot";

const Leaderboard = () => {
  const toppersData = ["NickName", "Nickname2", "nickName3"];
  const { userInfo, rankings } = useContext(AppContext);
  const { milestoneBeansPot } = userInfo;
  // debugger
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
    // let totalBeansPot = isPrev
    //   ? userInfo.userDailyBeansPotPrev
    //   : userInfo.userDailyBeansPot;
    // console.log("total beans pot:", totalBeansPot);

    // const percent = fieldGoalPot.find((item) => item.rank === index)?.percent;
    const result = milestoneBeansPot ? (0.1 / 100) * milestoneBeansPot : 0;

    return result.toFixed(2);
  };
  return (
    <div className="fieldGoalLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBoardTitle} className="title" />
      </div>
      <div className="topRank">
        { rankings.milestoneRanking.map((user, index) => (
                <Topper
                user={user}
                index={index + 1}
                key={index}
                estRewards={calculateEstRewards(index + 1)}
                showEst={true}
                isToday={true}
              />
        ))}

        {/* {toppersData.map((user, index) => (
          <Topper
            user={user}
            index={index + 1}
            key={index}
            estRewards={calculateEstRewards(index + 1)}
            showEst={true}
            isToday={true}
          />
        ))} */}
      </div>

      <div className="restWinners">
        {leaderBoardList.map((item, index) => (
          <FieldLeaderBoardItem
            user={item}
            key={index}
            index={index + 1}
            estRewards={calculateEstRewards(index + 1)}
            showEst={false}
            isToday={true}
          />
        ))}
      </div>
    </div>
  );
};
export default Leaderboard;
