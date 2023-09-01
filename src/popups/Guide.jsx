import React, { useContext, useState } from "react";
import "../styles/popup.scss";
import PopUp from "../components/PopUp";
import guidBg from "../assets/images/guide-bg.png";
import titleBanner from "../assets/images/Guide-banner.png";
import Accordion from "../components/Accordion";
import { AppContext } from "../App";
import { baseUrl } from "../api";
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
                  <h4>Basketball Swish</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        For every{" "}
                        <span className="yellow-text"> 25,000 beans </span>
                        spent on event gifts, you will get{" "}
                        <span className="yellow-text">one</span> chance.
                      </li>
                      <li>
                        To start playing, you need to tap on the{" "}
                        <span className="yellow-text">THROW</span> button.
                      </li>
                      <li>
                        You can use multiple chances at once (
                        <span className="yellow-text">99</span> chances) to
                        collect the rewards.
                      </li>
                    </ul>
                  </div>
                  <h4>Field Goal Milestones:</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        Each
                        <span className="yellow-text"> successful</span> attempt
                        will be counted towards these milestones.
                      </li>
                      <li>
                        Your <span className="yellow-text">failed</span> attempt
                        will not be counted towards these milestones.
                      </li>
                      <li>
                        You will get
                        <span className="yellow-text">extra rewards </span>
                        for reaching these milestones.
                      </li>
                      <li>
                        <span className="yellow-text">
                          If a situation arises where the scores are still
                          equal, then the most successful attempts in less time
                          will be taken into consideration, and your XP level
                          will also be taken into consideration.
                        </span>
                      </li>
                      <li>
                        The
                        <span className="yellow-text"> top 3 </span>
                        users with the most successful attempts will receive
                        beans.
                      </li>
                    </ul>
                  </div>
                  <div className="growthAcceleration">
                    <h4>What is Growth Acceleration?</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      When talents acquire the required tokens by doing the
                      tasks, their Energy Points on the webpage will be
                      multiplied as and when they receive gifts through event
                      gifts post-acceleration.
                      <div className="accTable">
                        <table>
                          <thead>
                            <th>Sr</th>
                            <th>Task</th>
                            <th>Tokens</th>
                          </thead>
                          <tr>
                            <td>1</td>
                            <td className="t-left">Win 2X PK daily</td>
                            <td>50</td>
                          </tr>

                          <tr>
                            <td>2</td>
                            <td className="t-left">
                              Receive at least 10k beans through event gift
                            </td>
                            <td>50</td>
                          </tr>
                        </table>
                      </div>
                      <div className="accTable mt">
                        <table>
                          <thead>
                            <th>Tokens required</th>
                            <th>Minimum days required to collect</th>
                            <th>Acceleration Rate</th>
                          </thead>
                          <tr>
                            <td>200</td>
                            <td>2nd Day</td>
                            <td>1.2x</td>
                          </tr>
                          <tr>
                            <td>400</td>
                            <td>4th Day</td>
                            <td>1.5x</td>
                          </tr>
                          <tr>
                            <td>800</td>
                            <td>8th Day</td>
                            <td>2x</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <h4 className="mt">Growth Acceleration Card:</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          You will get a free Acceleration Card which can be
                          sent to only 1 talent ID at a time during the event
                          tenure.
                        </li>
                        <li>
                          If any user ID receives multiple acceleration cards,
                          then you need to send it to a different talent ID.
                        </li>
                        <li>
                          If any talent ID receives multiple Acceleration Cards
                          from multiple users, no effect will take place.
                        </li>
                      </ul>
                    </div>

                    <h4>What is the effect of an Acceleration card?</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          When you receive an acceleration card, he needs to
                          send it to the talent.
                        </li>
                        <li>
                          When talent receives this card, the acceleration rate
                          will be increased by 1x than the existing rate. That
                          means,{" "}
                          <span className="yellow-text">
                            if talent's existing rate is 1x, it will be
                            increased to 2x, if it's at 1.2x, it will be
                            increased to 2.2x, if it's at 1.5x, it will be
                            increased to 2.5x & if it's already at 2x, it will
                            be set at 3x.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <h4>
                      How to send the Growth Acceleration Card to the talent?
                    </h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          On the webpage, there will be a search button, where
                          the talent needs to enter the Talent ID and search.
                        </li>
                        <li>
                          Once the talent ID appears, there will be an
                          <span className="yellow-texg">"Accelerate"</span>
                          button. When a user clicks on this button, the
                          talent’s account will be credited with the new
                          acceleration rate.
                        </li>
                        <li>
                          If the talent ID has already received one card in the
                          past, the search result will say
                          <span className="yellow-text">
                            "NOT ELIGIBLE FOR THIS CARD".
                          </span>
                        </li>
                        <li>
                          If you receive a card by playing the game, it is
                          mandatory to send it to another ID. You cannot send
                          the card to yourself.
                        </li>
                        <li>
                          Therefore, this will not affect the existing
                          acceleration rate of that user ID, as for the
                          acceleration rate to be affected, it must be received
                          from a different ID.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="forTalents">
                    <h4>Talent Leaderboard</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          For every 100 beans received by talents through event
                          gifts, they will receive 1 Energy Point.
                        </li>
                        <li>
                          Talent needs to do the tasks daily to accelerate the
                          Energy Point on the Leaderboard.
                        </li>
                        <li>
                          By doing the tasks, talents will receive the
                          respective tokens.
                        </li>
                        <li>
                          These tokens will be considered for Growth
                          Acceleration.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="tab1-content">
                  <h4>Basketball Swish</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        <span className="yellow-text">25,000 beans</span> beans
                        event gifts par spend karne par aapko khelne ka
                        <span className="yellow-text">ek</span>
                        mauka milega.
                      </li>
                      <li>
                        Khel karne ke liye, aapko
                        <span className="yellow-text">THROW</span>
                        button pe tap karna hoga.
                      </li>
                      <li>
                        Aap multiple chances use kar sakte ho (
                        <span className="yellow-text">99</span> chances) rewards
                        collect karne ke liye.
                      </li>
                    </ul>
                  </div>
                  <h4>Field Goal Milestones:</h4>
                  <div style={{ paddingLeft: "4vw" }}>
                    <ul>
                      <li>
                        Apke
                        <span className="yellow-text"> Successful</span>
                        attempts ko milestones mein gina jayega.
                      </li>
                      <li>
                        Aapke
                        <span className="yellow-text"> failed</span>
                        attempt ko mein nahi gina jayega.
                      </li>
                      <li>
                        Aapko
                        <span className="yellow-text"> extra rewards</span>
                        milenge alag alag milestones par pahuchne par
                      </li>
                      <li>
                        <span className="yellow-text">
                          Agar koi aisa situation aata hai, jahaan scores
                          barabar ke hai, jisne kam time mein zyada successful
                          attempts complete kiye hai unhe consider kiya jayega,
                          aur baadme user ka XP level ko consider kiya jayega.
                        </span>
                      </li>
                      <li>
                        <span className="yellow-text">Top 3</span>
                        users jinke sabse zyada successful attempts hai woh
                        beans receive karege.
                      </li>
                    </ul>
                  </div>
                  <div className="growthAcceleration">
                    <h4>Growth Acceleration kya hai?</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      Jab talents required tokens acquire karte hai tasks karke,
                      unke Energy Points webpage pe multiply honge jab woh gifts
                      receive karege event gifts ke through post-acceleration ke
                      baad.
                      <div className="accTable">
                        <table>
                          <thead>
                            <th>Sr</th>
                            <th>Task</th>
                            <th>Tokens</th>
                          </thead>
                          <tr>
                            <td>1</td>
                            <td className="t-left">Win 2X PK daily</td>
                            <td>50</td>
                          </tr>

                          <tr>
                            <td>2</td>
                            <td className="t-left">
                              Receive at least 10k beans through event gift
                            </td>
                            <td>50</td>
                          </tr>
                        </table>
                      </div>
                      <div className="accTable mt">
                        <table>
                          <thead>
                            <th>Tokens required</th>
                            <th>Minimum days required to collect</th>
                            <th>Acceleration Rate</th>
                          </thead>
                          <tr>
                            <td>200</td>
                            <td>2nd Day</td>
                            <td>1.2x</td>
                          </tr>
                          <tr>
                            <td>400</td>
                            <td>4th Day</td>
                            <td>1.5x</td>
                          </tr>
                          <tr>
                            <td>800</td>
                            <td>8th Day</td>
                            <td>2x</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <h4 className="mt">Growth Acceleration Card:</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Aapko free Acceleration Card milega jo aap kisi bhi
                          talent ID ko bhej sakte ho.
                        </li>
                        <li>
                          Agar koi user ID multiple Acceleration Cards receive
                          karte hai, toh Cards ko alag alag talent ID ko bhejna
                          hoga.
                        </li>
                        <li>
                          Agar talent ID multiple Acceleration Cards receive
                          karte hai multiple users se, uska koi effect nahi
                          hoga. Ek Talent ID sirf ek Card receive kar sakta hai
                        </li>
                      </ul>
                    </div>

                    <h4>Growth Acceleration ka effect kya hai?</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Jab aap acceleration card receive karoge, toh aapko
                          yeh talent ko bhejna hoga.
                        </li>
                        <li>
                          Jab talent yeh card receive karenge, unka acceleration
                          rate 1x se badhega existing rate se. Iska matlab,
                          <span className="yellow-text">
                            agar talent ka existing rate 1x hai toh woh increase
                            hokar 2x hoga. Agar woh 1.2x pe hai toh woh increase
                            hokar 2.2x hoga. Agar woh 1.5x hai toh woh increase
                            hokar 2.5x hoga. Aur agar pehle se hi woh 2x hai,
                            toh woh 3x pe set hojayega.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <h4>Growth Acceleration card talent ko kaise bheje?</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Webpage pe search button hoga, jahaan par talents ka,
                          talent ID enter karna hoga aur search karna hoga.
                        </li>
                        <li>
                          Jab talent ID appear hoga, wahan par
                          <span className="yellow-text">“Accelerate”</span>
                          button hoga. Jab aap yeh button par click karenge, tab
                          talent’s account ko credit kiya jayega naye
                          acceleration rate se.
                        </li>
                        <li>
                          Agar talent ID ne pehle se ek card receive kiya hai
                          past mein, tab search result show karega
                          <span className="yellow-text">
                            "NOT ELIGIBLE FOR THIS CARD".
                          </span>
                        </li>
                        <li>
                          Aapne jo card receive kiya hai game khel ke, mandatory
                          hai dusre ID ko bhejna. Aap khudko card nahi bhej
                          sakta.
                        </li>
                        <li>
                          Therefore, yeh existing acceleration rate woh user ID
                          ko affect nahi karega, acceleration rate ko affect
                          karne ke liye, acceleration card dusre ID se receive
                          hona chahiye.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="forTalents">
                    <h4>Talent Leaderboard</h4>
                    <div style={{ paddingLeft: "4vw" }}>
                      <ul>
                        <li>
                          Harr 100 beans jo talents ne receive kiye hai event
                          gifts se, unko 1 Energy Point milenge.
                        </li>
                        <li>
                          Talents ko daily tasks karne honge Energy Point ko
                          leaderboard pe accelerate karne ke liye.
                        </li>
                        <li>
                          Upar mention kiye hue tasks karke, talents respective
                          tokens receive karege.
                        </li>
                        <li>
                          Inn tokens ko Acceleration rate increase karne ke liye
                          consider kiya jayega.
                        </li>
                      </ul>
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
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
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
                      {/* <div className="rewardImages">
                        <img src={waterSplash} alt="" /> +
                        <img src={royalCar} />
                      </div>
                      <p>Water Splash + Royal Carriage</p> */}
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
                  title="Overall Leaderboard"
                  toggleUserTalent={toggleUserTalent}
                  hasTabs={1}
                >
                  {userTalent.user ? (
                    <div className="userContent">
                      <div className="beanBag">
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
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
                        <img src={baseUrl + "/streamkar/rewards/beanbag.png"} />
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
                      <tr>
                        <th>Milestone No</th>
                        <th style={{ borderRight: "none" }}>Rewards</th>
                        <th style={{ borderLeft: "none" }}></th>
                      </tr>
                      <tr>
                        <td>100</td>
                        <td className="colored">
                          3 days Raging Bull Profile Frame.
                        </td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/valentineFrameUser.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>200</td>
                        <td className="colored">3 days Spaceship Entrance.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/spaceship.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>500</td>
                        <td> 5 days Brave Heart Profile Frame.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/braveHeart.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>1000</td>
                        <td> 7 days Ballpark Audio Theme.</td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/ballParkTheme.png`}
                            className="rewardImg"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>2000</td>
                        <td>7 days HERO Entrance </td>
                        <td>
                          <img
                            src={`${baseUrl}/streamkar/rewards/heroEntrance.png`}
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
