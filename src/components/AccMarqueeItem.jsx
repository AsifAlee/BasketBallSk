import React, { useEffect, useState } from "react";
import "../styles/growthacc.scss";
import unknownUser from "../assets/images/unknown-user.png";
const AccMarqueeItem = (props) => {
  const { item } = props;
  const [currentRate, setCurrentRate] = useState(null);

  useEffect(() => {
    if (item.userScore === 1) {
      setCurrentRate("1.2X");
    } else if (item.userScore === 2) {
      setCurrentRate("1.5X");
    } else if (item.userScore === 3) {
      setCurrentRate("2X");
    } else if (item.userScore === 4) {
      setCurrentRate("2.2X");
    } else if (item.userScore === 5) {
      setCurrentRate("2.5X");
    } else if (item.userScore === 6) {
      setCurrentRate("3X");
    }
  }, [item.userScore]);

  return (
    <div className="marquee-item">
      <img src={item.portrait ? item.portrait : unknownUser} />
      <div className="rightDiv">
        <span>{`${item?.nickName.slice(
          0,
          6
        )} has successfully accelerated her growth. Her current speed of growth is now at ${currentRate} `}</span>
      </div>
    </div>
  );
};

export default AccMarqueeItem;
