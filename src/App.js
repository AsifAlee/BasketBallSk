import { createContext, useState } from "react";
import "./App.scss";
import { FieldGoalMilestone } from "./pages/FieldGoalMilestone/FieldGoalMilestone";
import { GrowAcceleration } from "./pages/GrowthAcceleration";
import GiftingLeaderBoards from "./pages/GiftingLeaderBoard";
import Guide from "./popups/Guide";
import LanguageDropdown from "./pages/LangaugeSelector";
import { RewardHistory } from "./popups/RewardHistory";
export const AppContext = createContext();

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const [showRewardHistory, setShowRewardHistory] = useState(0);
  const [showGuide, setShowGuide] = useState(0);
  const [showAccPopUp, setShowAccPopUp] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  const [tabs, setTabs] = useState({
    fieldGoal: true,
    growthAcc: false,
    giftLeaderBoard: false,
  });
  const toggleGuide = () => {
    setShowGuide(0);
  }

  const toogleAccPopUp = () => {
    setShowAccPopUp((prevState) => !prevState);
  }

  const toggleRewardsHistory = () => {
    setShowRewardHistory(0);
  }
  const changeLanguage = (index) => {
    setSelectedLanguage(index)
  }



  const toggleTabs = (event) => {
    switch (event.target.name) {
      case "fieldGoal":
        setTabs({ fieldGoal: true, growthAcc: false, giftLeaderBoard: false });
        break;
      case "growthAcc":
        setTabs({ fieldGoal: false, growthAcc: true, giftLeaderBoard: false });
        break;
      case "leaderBrd":
        setTabs({ fieldGoal: false, growthAcc: false, giftLeaderBoard: true });
    }
  };


  return (
    <AppContext.Provider value={{
      toggleGuide: toggleGuide,
      toggleRewardsHistory: toggleRewardsHistory,
      showAccPopUp: showAccPopUp,
      toogleAccPopUp: toogleAccPopUp

    }}>
      <div className="App">
        <div className="appHeader">
          <LanguageDropdown changeLanguage={changeLanguage} selectedLanguage={selectedLanguage} />
          <div className="infoAndRewards">
            <button className="guideBtn" onClick={() => setShowGuide(1)}></button>
            <button className="rewardBtn" onClick={() => setShowRewardHistory(1)}></button>
          </div>
          <div className="gameBtns">
            <button className="throws-left">Throw Left</button>
            <div className="chances">
              <span>Chances:</span>
              <input placeholder="TYPE HERE" className="inputField" type="number" />
            </div>
          </div>
          <button className="throw-btn"></button>
        </div>

        <div className="main-tabs">
          <button
            className={
              tabs.fieldGoal ? "tab-btn-field-goal" : "tab-btn-field-goal-off"
            }
            name="fieldGoal"
            onClick={toggleTabs}
          ></button>
          <button
            className={
              tabs.growthAcc ? "tab-btn-growth-acc" : "tab-btn-growth-acc-off"
            }
            name="growthAcc"
            onClick={toggleTabs}
          ></button>
          <button
            className={
              tabs.giftLeaderBoard
                ? "tab-btn-gift-leaderbrd"
                : "tab-btn-gift-leaderbrd-off"
            }
            name="leaderBrd"
            onClick={toggleTabs}
          ></button>
        </div>
        {
          tabs.fieldGoal ? <FieldGoalMilestone /> : ""}
        {
          tabs.growthAcc ? <GrowAcceleration /> : ""
        }
        {
          tabs.giftLeaderBoard ? <GiftingLeaderBoards /> : ""
        }

        {
          showGuide ? <Guide selectedLanguage={selectedLanguage} /> : ""
        }
        {
          showRewardHistory ? <RewardHistory /> : ""

        }


    </div>
    </AppContext.Provider>

  );
}

export default App;
