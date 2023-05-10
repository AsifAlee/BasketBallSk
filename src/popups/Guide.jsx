import React, { useContext, useState } from "react";
import "../styles/popup.scss";
import PopUp from "../components/PopUp";
import guidBg from "../assets/images/guide-bg.png";
import titleBanner from "../assets/images/Guide-banner.png";
import Accordion from "../components/Accordion";
import beanBag from "../assets/images/beanbag.png";
import waterSplash from "../assets/images/WaterSplashFrame.png";
import ragingBul from "../assets/images/ragingBull.png";
import royalCar from "../assets/images/royal.png";
import { AppContext } from "../App";
import { baseUrl2 } from "../api";
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
                        For every{" "}
                        <span className="yellow-text"> 25,000 beans </span>
                        spent by the user, he/she will get 1 chance.
                      </li>
                      <li>
                        6 basketball nets will be there, all you need to do is
                        click on the throw button, to throw the basketball in
                        the net
                      </li>
                      <li style={{ fontStyle: "bold" }}>
                        You all can type upto{" "}
                        <span className="yellow-text">x99</span> chances. By
                        default, <span className="yellow-text">1 chance</span>{" "}
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
                        consideration and then your{" "}
                        <span className="yellow-text">XP</span> level will also
                        be taken into consideration.
                      </li>
                      <li>
                        Top 3 users with most successful attempts will receive
                        Beans rewards.
                      </li>
                      <li>
                        Users have to attempt a minimum{" "}
                        <span className="yellow-text">1000</span> successful
                        attempts or more to win a bean reward.
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
                          example, if talent’s existing rate is{" "}
                          <span className="yellow-text">1X</span> , it will be
                          increased to 2X.
                        </li>
                        <li>
                          If any Talent ID will receive multiple ACCELERATION
                          CARDS from multiple users, no effect will take place.
                        </li>
                        <li>
                          To send the{" "}
                          <span className="yellow-text">ACCELERATION CARD</span>{" "}
                          to your favourite talent, visit the GROWTH
                          ACCELERATION tab.
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
                          For<span className="yellow-text">100 beans</span>{" "}
                          received by the talents through event gifts, talent
                          will receive{" "}
                          <span className="yellow-text">1 ENERGY</span> point.
                        </li>
                        <li>
                          Tokens will be credited to the talent’s account after
                          completion of tasks. Talents need to collect tokens by
                          completing the tasks given daily on{" "}
                          <span className="yellow-text">
                            GROWTH ACCELERATION TAB
                          </span>
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
                            <td>1.5x</td>
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
                        <span className="yellow-text">25,000 beans </span> event
                        gifts pe spend karne par{" "}
                        <span className="yellow-text"> 1 throwing chance </span>
                        milega.
                      </li>
                      <li>
                        <span className="yellow-text">6 basketball nets </span>
                        honge jisme ball throw karne ke liye aapko THROW par
                        click karna hoga.
                      </li>
                      <li style={{ fontStyle: "bold" }}>
                        Default setting me{" "}
                        <span className="yellow-text">1 chance</span>{" "}
                        pre-selected hoga. Aap multiple chances type karke khel
                        sakte hain{" "}
                        <span className="yellow-text">(upto x99 chances)</span>
                      </li>
                      <li>
                        Har successful attempt milestones ki taraf count kia
                        jayega.
                      </li>
                      <li>
                        Failed attempt milestone ki taraf nahi gina jayega.
                      </li>
                      <li>
                        Aap extra rewards jeet sakte hain{" "}
                        <span className="yellow-text">MILESTONES</span> achieve
                        karke.
                      </li>
                      <li>
                        Agar aisa koi situation aata hai jahaan scores equal hai
                        toh Pehle, jisne kam time mein zyada successful attempts
                        complete kiye hai unhe consider kia jayega, aur baadme
                        user ka XP level consider kia jaayega.
                      </li>
                      <li>
                        <span className="yellow-text">Top 3 </span> users jinke
                        sabse zyada successful attempts hai unhe beans rewards
                        diye jayenge.
                      </li>
                      <li>
                        Users ko beans reward tabhi milega jab woh minimum{" "}
                        <span className="yellow-tex">1000</span>
                        successful attempts ya usse zyada successful attempts
                        complete karenge .
                      </li>
                      <li>
                        <span className="yellow-text">Top 3 </span>
                        eligible users mein beans rewards distribute kiye
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
                          <span className="yellow-text">1X</span> hai toh woh
                          badhke 2X hojayega ye card receive karne pe.
                        </li>
                        <li>
                          Agar koi talent multiple{" "}
                          <span className="yellow-text">
                            ACCELERATION CARDS
                          </span>{" "}
                          receive karega, toh card ka koi effect nahi hoga.
                        </li>
                        <li>
                          Growth acceleration ko send karne apko{" "}
                          <span className="yellow-text">
                            GROWTH ACCELERATION TAB
                          </span>{" "}
                          visit karna hoga.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="forTalents">
                    <h4>FOR TALENTS</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Har <span className="yellow-text">100 Beans</span>{" "}
                          receive karnepe talents ko{" "}
                          <span className="yellow-text">1 energy point</span>{" "}
                          milega jo Leaderboard me use hoga. Leaderboard ENERGY
                          POINTS ke basis par arrange hoga..
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
                            <td>1.5x</td>
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
                  hasTabs={1}
                  defaultOpen={true}
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
                      <div className="rewardImages">
                        <img src={waterSplash} alt="" /> +
                        <img src={royalCar} />
                      </div>
                      <p>Water Splash + Royal Carriage</p>
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
                  hasTabs={1}
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

                      {/* <table>
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
                      </table> */}
                    </div>
                  )}
                </Accordion>
                {/* FieldGoal Accordion */}
                <Accordion
                  title="FieldGoal Milestone  Leaderboard"
                  toggleUserTalent={toggleUserTalent}
                  hasTabs={0}
                >
                  <div className="fieldGoalContent">
                    <div className="beanBag">
                      <img src={ragingBul} />
                    </div>
                    <p>Raging Bull Profile Frame</p>
                    <ul className="bullets">
                      <li>
                        Each successful attempt will be counted towards these
                        milestones
                      </li>
                      <li>
                        User's failed attempts will not be counted towards these
                        milestones (11% possibility of NO REWARD)
                      </li>
                      <li>
                        Users will get extra rewards for reaching the milestones
                      </li>
                      <li>
                        These successful attempts will be ranked on leaderboard
                        which will be placed below the game. In case of same
                        successful attempts, priority will be given to user who
                        did the successful attempts in less time from the day of
                        event start. Furthermore, if situation arise that the
                        scores are still level, user XP level should be taken
                        into consideration.
                      </li>
                    </ul>

                    <table>
                      <thead>
                        <th>Milestone No</th>
                        <th style={{ borderRight: "none" }}>Rewards</th>
                      </thead>
                      <tr>
                        <td>100</td>
                        <td className="colored">
                          3 days Raging Bull Profile Frame.
                        </td>
                        <td>
                          <img
                            src={`${baseUrl2}streamkar/rewards/valentineFrameUser.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>200</td>
                        <td className="colored">3 days Spaceship Entrance.</td>
                        <td>
                          <img
                            src={`${baseUrl2}streamkar/rewards/spaceship.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>500</td>
                        <td>
                          1,40,44,945(rounded off) 5 days Brave Heart Profile
                          Frame.
                        </td>
                        <td>
                          <img
                            src={`${baseUrl2}streamkar/rewards/braveHeart.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>1000</td>
                        <td>7 days New Audio Theme.</td>
                        <td>
                          <img
                            src={`${baseUrl2}streamkar/rewards/ballParkTheme.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>2000</td>
                        <td>7 days HERO Entrance </td>
                        <td>
                          <img
                            src={`${baseUrl2}streamkar/rewards/heroEntrance.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default Guide;
