import React, { useState } from "react";
import "../../styles/giftingboard.scss";
import bannerTitle from "../../assets/images/Event-gifts-banner.png";
import userBtn from "../../assets/images/usersBtn.png";
import talentBtn from "../../assets/images/talentBtn.png";
import giftBasketBall from "../../assets/images/gift-display-basket-ball.gif";
import { TalentSection } from "./talent";
import { UserSection } from "./user";
const GiftingLeaderBoards = () => {
  const [tabs, setTabs] = useState({
    user: true,
    talent: false,
  });

  const toggleTabs = (btn) => {
    if (btn === "user") {
      setTabs({ user: true, talent: false });
    } else {
      setTabs({ user: false, talent: true });
    }
  };

  return (
    <div className="gifting-leaderboard">
      <div>
        <div className="event-gifts">
          <img src={bannerTitle} className="title" />
        </div>
        <div className="gifts">
          <img src={giftBasketBall} />
        </div>
      </div>

      <div className="tabs">
        <div
          className={tabs.user ? "tabOn" : "tabOff"}
          onClick={() => toggleTabs("user")}
        >
          <img src={userBtn} />
        </div>

        <div
          className={tabs.talent ? "tabOn" : "tabOff"}
          onClick={() => toggleTabs("talent")}
        >
          <img src={talentBtn} />
        </div>
      </div>

      {tabs.talent ? <TalentSection /> : <UserSection />}
    </div>
  );
};

export default GiftingLeaderBoards;
