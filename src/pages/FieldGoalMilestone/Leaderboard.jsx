import React, { useContext, useEffect, useState } from "react";
import leaderBoardTitle from "../../assets/images/leaderboard.png";
import Topper from "../../components/Topper";
import { FieldLeaderBoardItem } from "../../components/FieldLeaderBoardItem";
import { AppContext } from "../../App";
import { fieldGoalPot, userOverallPot } from "../../beansPot";

const Leaderboard = () => {
  const toppersData = ["NickName", "Nickname2", "nickName3"];
  const [isSeeMore, setIsSeeMore] = useState(1);
  const { userInfo, rankings } = useContext(AppContext);
  const [restWinners, setRestWinners] = useState([]);

  useEffect(() => {
    if (isSeeMore) {
      setRestWinners(rankings?.milestoneRanking?.slice(3, 10));
    } else {
      setRestWinners(rankings?.milestoneRanking?.slice(3));
    }
  }, [isSeeMore]);
  useEffect(() => {
    setRestWinners(rankings?.milestoneRanking?.slice(3, 10));
  }, [rankings?.milestoneRanking]);

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

  return (
    <div className="fieldGoalLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBoardTitle} className="title" />
      </div>
      <div>
        {rankings?.milestoneRanking?.length ? (
          <>
            <div className="topRank">
              {rankings?.milestoneRanking?.slice(0, 3).map((user, index) => (
                <Topper
                  user={user}
                  index={index + 1}
                  key={index}
                  estRewards={user?.estimateBeans}
                  showEst={true}
                  isToday={true}
                  isTalent={false}
                  isMilestone={true}
                  isLock={user?.isLock}
                />
              ))}
            </div>

            <div
              className="restWinners"
              style={{ overflowY: isSeeMore ? "hidden" : "auto" }}
            >
              {restWinners?.map((item, index) => {
                let newIndex = index + 3;
                return (
                  <FieldLeaderBoardItem
                    user={item}
                    key={index}
                    index={newIndex + 1}
                    // estRewards={calculateEstRewards(index + 1)}
                    showEst={false}
                    isToday={true}
                    isTalent={false}
                  />
                );
              })}
            </div>

            <button
              className={isSeeMore ? "seeMore" : "seeLess"}
              onClick={() => setIsSeeMore((prev) => !prev)}
              style={{
                visibility:
                  rankings.milestoneRanking.length > 10 ? "visible" : "hidden",
              }}
            ></button>
          </>
        ) : (
          <div className="noData">No Data Found</div>
        )}
      </div>
    </div>
  );
};
export default Leaderboard;
