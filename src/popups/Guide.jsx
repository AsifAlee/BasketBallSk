import React, { useContext, useState } from "react";
import "../styles/popup.scss";
import PopUp from "../components/PopUp";
import guidBg from "../assets/images/guide-bg.png";
import titleBanner from "../assets/images/Guide-banner.png";
import Accordion from "../components/Accordion";
import beanBag from "../assets/images/beanbag.png";
import { AppContext } from "../App";
const Guide = (props) => {
  const { selectedLanguage } = props;
  const { toggleGuide } = useContext(AppContext);
  const [tabs, setTabs] = useState({
    howToPlay: true,
    rewardsInfo: false,
  });
  const [userTalent, setUserTalent] = useState({
    user: 1,
    talent: 0,
  });

  const toggleTabs = (event) => {
    if (event.target.name === "howToPlay") {
      setTabs({
        howToPlay: true,
        rewardsInfo: false,
      });
    } else {
      setTabs({
        howToPlay: false,
        rewardsInfo: true,
      });
    }
  };

  const toggleUserTalent = () => {
    setUserTalent({
      user: !userTalent.user,
      talent: !userTalent.talent,
    });
  };

  return (
    <div>
      <PopUp bg={guidBg} title={titleBanner} popUpHandler={toggleGuide}>
        <div className="guidePopUp">
          <div className="tabs">
            <button
              className={`howToPlay ${!tabs.howToPlay && "unactive"}`}
              onClick={(event) => toggleTabs(event)}
              name="howToPlay"
            >
              HOW TO PLAY
            </button>
            <button
              className={`rewardInfo ${!tabs.rewardsInfo && "unactive"}`}
              onClick={(event) => toggleTabs(event)}
              name="rewardInfo"
            >
              Reward Info
            </button>
          </div>
          <div className="guideContent">
            {tabs.howToPlay ? (
              selectedLanguage === 0 ? (
                <div className="tab1-content">
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        For every 25,000 beans spent by the user, he/she will
                        get 1 chance.
                      </li>
                      <li>
                        6 basketball nets will be there, all you need to do is
                        click on the throw button, to throw the basketball in
                        the net
                      </li>
                      <li style={{ fontStyle: "bold" }}>
                        You all can type upto x99 chances. By default, 1 chance
                        would be there.
                      </li>
                      <li>
                        If more than 1 chance is used, animations would be
                        played once, but the system will calculate the number of
                        rewards you would receive according to the number of
                        chances used to play the game.
                      </li>
                      <li>
                        Each successful attempt will be counted towards the
                        milestones, also extra reward would be given for
                        reaching the milestone.
                      </li>
                      <li>
                        Your failed attempts will not be counted towards the
                        milestones
                      </li>
                      <li>
                        If there is a situation where scores are equal, then
                        most successful attempts in less time will be taken into
                        consideration and then your XP level will also be taken
                        into consideration.
                      </li>
                      <li>
                        Top 3 users with most successful attempts will receive
                        Beans rewards.
                      </li>
                      <li>
                        Users have to attempt a minimum 1000 successful attempts
                        or more to win a bean reward.
                      </li>
                      <li>
                        Amongst the TOP 3 eligible users, the beans will be
                        distributed in the ratio of the beans spent by them in
                        the whole event.
                      </li>
                    </ul>
                  </div>
                  <div className="growthAcceleration">
                    <h4>GROWTH ACCELERATION</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li style={{ marginTop: "1vw" }}>
                          You can collect the acceleration card by playing the
                          game.
                        </li>
                        <li>
                          When you receive an acceleration card, you need to
                          send it to the talent.
                        </li>
                        <li>
                          When talent receives this card, the acceleration rate
                          will be increased by 1x than the existing rate. For
                          example, if talent’s existing rate is 1X, it will be
                          increased to 2X.
                        </li>
                        <li>
                          If any Talent ID will receive multiple ACCELERATION
                          CARDS from multiple users, no effect will take place.
                        </li>
                        <li>
                          To send the ACCELERATION CARD to your favourite
                          talent, visit the GROWTH ACCELERATION tab.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="forTalents">
                    <h4>FOR TALENTS</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          {" "}
                          For 100 beans received by the talents through event
                          gifts, talent will receive 1 ENERGY point.
                        </li>
                        <li>
                          Tokens will be credited to the talent’s account after
                          completion of tasks. Talents need to collect tokens by
                          completing the tasks given daily on GROWTH
                          ACCELERATION TAB
                        </li>
                        <li>
                          These tokens will be considered for growth
                          acceleration
                        </li>
                      </ul>
                      <div className="accTable">
                        <table>
                          <thead>
                            <th>TOKENS REQUIRED</th>
                            <th>ACCELERATION RATE</th>
                          </thead>
                          <tr>
                            <td>200</td>
                            <td>1.2x</td>
                          </tr>
                          <tr>
                            <td>400</td>
                            <td>1.4x</td>
                          </tr>
                          <tr>
                            <td>800</td>
                            <td>2x</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="tab1-content">
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        25,000 beans event gifts pe spend karne par 1 throwing
                        chance milega.
                      </li>
                      <li>
                        6 basketball nets honge jisme ball throw karne ke liye
                        aapko THROW par click karna hoga.
                      </li>
                      <li style={{ fontStyle: "bold" }}>
                        Default setting me 1 chance pre-selected hoga. Aap
                        multiple chances type karke khel sakte hain (upto x99
                        chances)
                      </li>
                      <li>
                        Har successful attempt milestones ki taraf count kia
                        jayega.
                      </li>
                      <li>
                        Failed attempt milestone ki taraf nahi gina jayega.
                      </li>
                      <li>
                        Aap extra rewards jeet sakte hain MILESTONES achieve
                        karke.
                      </li>
                      <li>
                        Agar aisa koi situation aata hai jahaan scores equal hai
                        toh Pehle, jisne kam time mein zyada successful attempts
                        complete kiye hai unhe consider kia jayega, aur baadme
                        user ka XP level consider kia jaayega.
                      </li>
                      <li>
                        Top 3 users jinke sabse zyada successful attempts hai
                        unhe beans rewards diye jayenge.
                      </li>
                      <li>
                        Users ko beans reward tabhi milega jab woh minimum 1000
                        successful attempts ya usse zyada successful attempts
                        complete karenge .
                      </li>
                      <li>
                        Top 3 eligible users mein beans rewards distribute kiye
                        jayenge, unke pure event mai kiye gaye beans spending ke
                        ratio mai.
                      </li>
                    </ul>
                  </div>
                  <div className="growthAcceleration">
                    <h4>GROWTH ACCELERATION</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li style={{ marginTop: "1vw" }}>
                          Aapko acceleration cards game khel ke collect kana
                          hai.
                        </li>
                        <li>
                          Jabhi aap acceleration card collect karoge, aapko yeh
                          acceleration card talent ko send karna padega.
                        </li>
                        <li>
                          Jab talents yeh card receive karenge toh unka
                          acceleration rate 1x se increase hoga existing rate
                          se. EXAMPLE: Agar talent ka existing acceleration rate
                          1X hai toh woh badhke 2X hojayega ye card receive
                          karne pe.
                        </li>
                        <li>
                          Agar koi talent multiple ACCELERATION CARDS receive
                          karega, toh card ka koi effect nahi hoga.
                        </li>
                        <li>
                          Growth acceleration ko send karne apko GROWTH
                          ACCELERATION TAB visit karna hoga.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="forTalents">
                    <h4>FOR TALENTS</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Har 100 Beans receive karnepe talents ko 1 energy
                          point milega jo Leaderboard me use hoga. Leaderboard
                          ENERGY POINTS ke basis par arrange hoga..
                        </li>
                        <li>
                          Talents ko DAILY TASKS roz complete karke Tokens
                          collect karne hain
                        </li>
                        <li>
                          Yeh tokens growth acceleration ke liye consider kiye
                          jayenge
                        </li>
                      </ul>
                      <div className="accTable">
                        <table>
                          <thead>
                            <th>TOKENS REQUIRED</th>
                            <th>ACCELERATION RATE</th>
                          </thead>
                          <tr>
                            <td>200</td>
                            <td>1.2x</td>
                          </tr>
                          <tr>
                            <td>400</td>
                            <td>1.4x</td>
                          </tr>
                          <tr>
                            <td>800</td>
                            <td>2x</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="tab2-content">
                {/* Daily Accordion */}
                <Accordion
                  title="Daily Leaderboard"
                  toggleUserTalent={toggleUserTalent}
                >
                  {userTalent.user ? (
                    <div className="userContent">
                      <div className="beanBag">
                        <img src={beanBag} />
                      </div>
                      <p>
                        Beans Pot:The rankings will be based on beans spent on
                        event gifts.At the end of each day.Beans will be
                        distributed to top 5 users.
                      </p>
                      <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 40% of the beans Pot
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                            2nd Rank - 30% of the beans Pot
                          </td>
                        </tr>
                        <tr>
                          <td>3rd Rank - 10% of the beans Pot</td>
                        </tr>
                        <tr>
                          <td>4th Rank - 10% of the beans Pot</td>
                        </tr>
                        <tr>
                          <td className="last">
                            5th Rank - 10% of the beans Pot
                          </td>
                        </tr>
                      </table>
                    </div>
                  ) : (
                    <div className="talentContent">
                      <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 3 Days X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                            2nd Rank - 2 Days X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            3rd Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            4th Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td className="last">
                            5th Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                      </table>
                    </div>
                  )}
                </Accordion>
                {/* Overall Accordion */}
                <Accordion
                  title="OverAll Leaderboard"
                  toggleUserTalent={toggleUserTalent}
                >
                  {userTalent.user ? (
                    <div className="userContent">
                      <div className="beanBag">
                        <img src={beanBag} />
                      </div>
                      <p>
                        0.30% of the beans will be collected in the beans pot.
                        Estimated rewards to be shown on top 5 rankings
                      </p>
                      <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 40% of the beans Pot
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                            2nd Rank - 30% of the beans Pot
                          </td>
                        </tr>
                        <tr>
                          <td>3rd Rank - 15% of the beans Pot</td>
                        </tr>
                        <tr>
                          <td>4th Rank - 10% of the beans Pot</td>
                        </tr>
                        <tr>
                          <td className="last">
                            5th Rank - 5% of the beans Pot
                          </td>
                        </tr>
                      </table>
                    </div>
                  ) : (
                    <div className="talentContent">
                      <div className="beanBag">
                        <img src={beanBag} />
                      </div>
                      <p>
                        Leaderboard will be based on the energy points
                        accumulated by the talent during the event tenure. 0.20%
                        of the beans received will be collected in the talent
                        beans pot Estimated rewards to be shown.
                      </p>

                      <table>
                        <tr>
                          <td className="colored">
                            1st Rank - 3 Days X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>

                        <tr>
                          <td className="colored">
                            2nd Rank - 2 Days X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            3rd Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            4th Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                        <tr>
                          <td className="last">
                            5th Rank - 1 Day X (Water Splash Profile Frame +
                            Royal Carriage)
                          </td>
                        </tr>
                      </table>
                    </div>
                  )}
                </Accordion>
                {/* FieldGoal Accordion */}
                <Accordion
                  title="FieldGoal Milestone  Leaderboard"
                  toggleUserTalent={toggleUserTalent}
                ></Accordion>
              </div>
            )}
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default Guide;
