import React, { useContext, useEffect, useState } from "react";
import Topper from "../../../../components/Topper";
import { FieldLeaderBoardItem } from "../../../../components/FieldLeaderBoardItem";
import leaderBordTitle from "../../../../assets/images/leaderboard.png";
import { AppContext } from "../../../../App";
import { talentOverAllPot } from "../../../../beansPot";

export const Overall = () => {
  const { rankings, userInfo } = useContext(AppContext);
  const { talentOverall } = rankings;
  const [restWinners, setRestWinners] = useState([]);
  const toppersData = ["NickName", "Nickname2", "nickName3"];
  const [isSeeMore, setIsSeeMore] = useState(1);
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
  useEffect(() => {
    if (isSeeMore) {
      setRestWinners(talentOverall?.slice(3, 10));
    } else {
      setRestWinners(talentOverall?.slice(3));
    }
  }, [isSeeMore]);
  useEffect(() => {
    setRestWinners(talentOverall?.slice(3, 10));
  }, [talentOverall]);

  const calculateEstRewards = (index) => {
    const percent = talentOverAllPot?.find(
      (item) => item.rank === index
    )?.percent;
    const result = userInfo?.talentOverallBeansPot
      ? (percent / 100) * userInfo?.talentOverallBeansPot
      : 0;
    return result.toFixed(0);
  };

  return (
    <div className="talentOverallLeaderBoard">
      <div className="leaderBoardTitle">
        <img src={leaderBordTitle} className="title" />
      </div>

      {talentOverall?.length ? (
        <div>
          <div className="topRank">
            {talentOverall?.slice(0, 3).map((user, index) => (
              <Topper
                user={user}
                index={index + 1}
                key={index}
                estRewards={calculateEstRewards(index + 1)}
                showEst={index <= 4 ? true : false}
                isTalent={true}
                isToday={true}
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
                  showEst={newIndex <= 4 ? true : false}
                  user={item}
                  key={index}
                  index={newIndex + 1}
                  estRewards={calculateEstRewards(newIndex + 1)}
                  isTalent={true}
                  isToday={true}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="noData">No Data Found</div>
      )}

      {talentOverall?.length > 10 ? (
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
