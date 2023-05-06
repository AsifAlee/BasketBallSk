import React, { useContext, useState } from "react";
import leaderBoardTitle from "../../assets/images/leaderboard.png";
import Topper from "../../components/Topper";
import { FieldLeaderBoardItem } from "../../components/FieldLeaderBoardItem";
import { AppContext } from "../../App";
import { fieldGoalPot, userOverallPot } from "../../beansPot";

const Leaderboard = () => {
  const toppersData = ["NickName", "Nickname2", "nickName3"];
  const [isSeeMore, setIsSeeMore] = useState(1);

  const { userInfo, rankings } = useContext(AppContext);
  const { milestoneBeansPot } = userInfo;
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
    const result = milestoneBeansPot ? (0.1 / 100) * milestoneBeansPot : 0;
    return result.toFixed(2);
  };
  return (
    <>
      {rankings.milestoneRanking.length ? (
        <div className="fieldGoalLeaderBoard">
          <div className="leaderBoardTitle">
            <img src={leaderBoardTitle} className="title" />
          </div>
          <div className="topRank">
            {rankings.milestoneRanking.map((user, index) => (
              <Topper
                user={user}
                index={index + 1}
                key={index}
                estRewards={calculateEstRewards(index + 1)}
                showEst={true}
                isToday={true}
                isTalent={false}
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

          <div
            className="restWinners"
            style={{ overflowY: isSeeMore ? "hidden" : "auto" }}
          >
            {/* {leaderBoardList.map((item, index) => (
          <FieldLeaderBoardItem
            user={item}
            key={index}
            index={index + 1}
            estRewards={calculateEstRewards(index + 1)}
            showEst={false}
            isToday={true}
          />
        ))} */}

            {rankings.milestoneRanking.map((item, index) => (
              <FieldLeaderBoardItem
                user={item}
                key={index}
                index={index + 1}
                estRewards={calculateEstRewards(index + 1)}
                showEst={false}
                isToday={true}
                isTalent={false}
              />
            ))}
          </div>

          <button
            className={isSeeMore ? "seeMore" : "seeLess"}
            onClick={() => setIsSeeMore((prev) => !prev)}
          ></button>
        </div>
      ) : (
        <div className="noData">No Data Found</div>
      )}
    </>
  );
};
export default Leaderboard;
