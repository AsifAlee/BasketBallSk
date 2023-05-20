import React, { useContext } from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/images/task-game-bg2.png";
import titleBanner from "../assets/images/Milestone-info.png";
import { AppContext } from "../App";
import "../styles/popup.scss";
import { baseUrl } from "../api";
import ball from "../assets/images/basket-ball-icon.png";
const MilestonePopUp = () => {
  const { toggleMilestonePopUp } = useContext(AppContext);
  return (
    <PopUp
      bg={bg}
      title={titleBanner}
      popUpHandler={toggleMilestonePopUp}
      // isAccPopUp={true}
      isMilestone={true}
    >
      <div className="milestone">
        <div className="milestone-content">
          <div className="milestone-title">
            <span className="span1">Milestone</span>
            <span className="span2">Rewards</span>
          </div>
          <table>
            <tr>
              <td>100</td>
              <td>3 days Raging Bull Profile Frame</td>
              <td>
                <img
                  src={`${baseUrl}/streamkar/rewards/valentineFrameUser.png`}
                />
              </td>
            </tr>
            <tr>
              <td>200</td>
              <td>3 days Spaceship Entrance</td>
              <td>
                <img src={`${baseUrl}/streamkar/rewards/spaceship.png`} />
              </td>
            </tr>
            <tr>
              <td className="color-yellow">500</td>
              <td className="color-yellow">3 days Brave Heart Profile Frame</td>
              <td>
                <img src={`${baseUrl}/streamkar/rewards/braveHeart.png`} />
              </td>
            </tr>

            <tr>
              <td className="color-yellow">1000</td>
              <td className="color-yellow">7 days Ballpark Audio Theme</td>
              <td>
                <img src={`${baseUrl}/streamkar/rewards/ballParkTheme.png`} />
              </td>
            </tr>

            <tr>
              <td className="color-yellow">2000</td>
              <td className="color-yellow">7 days hero entrance</td>
              <td>
                <img src={`${baseUrl}/streamkar/rewards/heroEntrance.png`} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </PopUp>
  );
};

export default MilestonePopUp;
