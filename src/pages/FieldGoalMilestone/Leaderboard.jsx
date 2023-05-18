import React, { useContext, useEffect, useState } from "react";
import leaderBoardTitle from "../../assets/images/leaderboard.png";
import Topper from "../../components/Topper";
import { FieldLeaderBoardItem } from "../../components/FieldLeaderBoardItem";
import { AppContext } from "../../App";
import { fieldGoalPot, userOverallPot } from "../../beansPot";

const Leaderboard = () => {
  const [isSeeMore, setIsSeeMore] = useState(1);
  const { userInfo, rankings } = useContext(AppContext);
  const { milestoneRanking } = rankings;

  const [restWinners, setRestWinners] = useState([]);

  useEffect(() => {
    if (isSeeMore) {
      setRestWinners(milestoneRanking?.slice(3, 10));
    } else {
      setRestWinners(milestoneRanking?.slice(3));
    }
  }, [isSeeMore]);
  useEffect(() => {
    setRestWinners(milestoneRanking?.slice(3, 10));
  }, [milestoneRanking]);

  const { milestoneBeansPot } = userInfo;

  return (
    <div className="fieldGoalLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBoardTitle} className="title" />
      </div>
      <div>
        {rankings?.milestoneRanking?.length ? (
          <>
            <div className="topRank">
              {/* {rankings?.milestoneRanking?.slice(0, 3).map((user, index) => (
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
              ))} */}
              <div className="top1">
                {milestoneRanking[0] && (
                  <Topper
                    user={milestoneRanking[0]}
                    index={0 + 1}
                    key={0}
                    estRewards={milestoneRanking[0]?.estimateBeans}
                    showEst={true}
                    isToday={true}
                    isTalent={false}
                    isMilestone={true}
                    isLock={milestoneRanking[0]?.isLock}
                  />
                )}
              </div>

              <div className="top2">
                {milestoneRanking[1] && (
                  <Topper
                    user={milestoneRanking[1]}
                    index={1 + 1}
                    key={1}
                    estRewards={milestoneRanking[1]?.estimateBeans}
                    showEst={true}
                    isToday={true}
                    isTalent={false}
                    isMilestone={true}
                    isLock={milestoneRanking[1]?.isLock}
                  />
                )}
              </div>

              <div className="top3">
                {milestoneRanking[2] && (
                  <Topper
                    user={milestoneRanking[2]}
                    index={2 + 1}
                    key={2}
                    estRewards={milestoneRanking[2]?.estimateBeans}
                    showEst={true}
                    isToday={true}
                    isTalent={false}
                    isMilestone={true}
                    isLock={milestoneRanking[2]?.isLock}
                  />
                )}
              </div>
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
        {/* {rankings?.milestoneRanking?.length ? (
          <>
            <div className="topRank">
              {topperTestData.map((user, index) => (
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
                  isGreaterThan1={topperTestData.length > 1}
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
        )} */}
      </div>
    </div>
  );
};
export default Leaderboard;
