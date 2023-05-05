import React, { useContext } from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/images/task-game-bg2.png";
import titleBanner from "../assets/images/Milestone-info.png";
import {AppContext} from '../App'
import '../styles/popup.scss';
const MilestonePopUp = () => {
  const { toggleMilestonePopUp } = useContext(AppContext);
  return (
    <PopUp bg={bg} title={titleBanner} popUpHandler={toggleMilestonePopUp} isAccPopUp={true}>
      <div className="milestone">
        <div className="milestone-content">
         <div className="milestone-title">
           <span>Milestone</span>
           <span>Rewards</span>
         </div>
         <table>
                <tr>
                    <td>100</td>
                    <td>3 days Raging Bull Profile Frame</td>
                </tr>
                <tr>
                    <td>200</td>
                    <td>3 days Spaceship Entrance</td>
                </tr>
                <tr >
                    <td className="color-yellow">500</td>
                    <td className="color-yellow">3 days Brave Heart Profile Frame</td>
                </tr>

                <tr >
                    <td className="color-yellow">1000</td>
                    <td className="color-yellow">7 day Lucky ID</td>
                </tr>

                <tr >
                    <td className="color-yellow">2000</td>
                    <td className="color-yellow">7 day hero entrance</td>
                </tr>
         </table>

        </div>
        </div>
    </PopUp>
  );
};

export default MilestonePopUp;
