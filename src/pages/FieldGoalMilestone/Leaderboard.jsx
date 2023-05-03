import React from "react";
import leaderBoardTitle from "../../assets/images/leaderboard.png";
import Topper from "../../components/Topper";
import { FieldLeaderBoardItem } from "../../components/FieldLeaderBoardItem";

const Leaderboard = () => {
  const toppersData = ["NickName", "Nickname2", "nickName3"];
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
      <div className="topRank">
        {toppersData.map((name, index) => (
          // <Topper name={name} index={index + 1} />
          <p>Topper</p>
        ))}
      </div>

      <div className="restWinners">
        {leaderBoardList.map((item) => (
          // <FieldLeaderBoardItem />
          <p>Field Leader board item</p>
        ))}
      </div>
    </div>
  );
};
export default Leaderboard;
