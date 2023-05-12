import React, { useState } from "react";
import "../../styles/giftingboard.scss";
import bannerTitle from "../../assets/images/Event-gifts-banner.png";
import userBtn from "../../assets/images/usersBtn.png";
import talentBtn from "../../assets/images/talentBtn.png";
import giftBasketBall from "../../assets/images/gift-display-basket-ball.gif";
import { TalentSection } from "./talent";
import { UserSection } from "./user";
import { baseUrl2 } from "../../api";
import beans from "../../assets/images/bean.png";
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

          <img
            src={`${baseUrl2}streamkar/gifts/40001618.png`}
            className="gift1"
          />

          <div className="gift1Detail">
            <p style={{ color: "#64686b" }}>Cheerleader</p>
            <span style={{ color: "#64686b", marginLeft: "2vw" }}>30,000</span>
            <img src={beans} className="beans" />
          </div>

          <img
            src={`${baseUrl2}streamkar/gifts/40001627.png`}
            className="gift2"
          />
          <div className="gift2Detail">
            <p style={{ color: "#64686b" }}>SK Billionare</p>
            <span style={{ color: "#64686b", marginLeft: "2vw" }}>
              200,0000
            </span>
            <img src={beans} className="beans" />
          </div>
          <img
            src={`${baseUrl2}streamkar/gifts/40001299.png`}
            className="gift3"
          />
          <div className="gift3Detail">
            <p style={{ color: "#64686b" }}>Loot Chest</p>
            <span style={{ color: "#64686b", marginLeft: "2vw" }}>1000 </span>
            <img src={beans} className="beans" />
          </div>
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
      <div className="footer">
        <p className="rights">All rights reserved by StreamKar</p>
      </div>
    </div>
  );
};

export default GiftingLeaderBoards;
