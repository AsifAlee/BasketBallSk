import { createContext, useEffect, useState } from "react";
import "./App.scss";
import { FieldGoalMilestone } from "./pages/FieldGoalMilestone/FieldGoalMilestone";
import { GrowAcceleration } from "./pages/GrowthAcceleration";
import GiftingLeaderBoards from "./pages/GiftingLeaderBoard";
import Guide from "./popups/Guide";
import LanguageDropdown from "./pages/LangaugeSelector";
import { RewardHistory } from "./popups/RewardHistory";
import { baseUrl, testToken, testUserId } from "./api";
import jumpingCharcter from "./assets/images/jumping-character.png";
import basket1 from "./assets/images/basket01.gif";
export const AppContext = createContext();

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const [showRewardHistory, setShowRewardHistory] = useState(0);
  const [showGuide, setShowGuide] = useState(0);
  const [showAccPopUp, setShowAccPopUp] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [progressPopUp, setProgressPopUp] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);
  const [userInfo, setUserInfo] = useState({
    dailyTaskList: [],
    throwsLeft: 0,
    mySuccessfullAttempt: 0,
    milestoneBeansPot: 0,
    talentOverallBeansPot: 0,
    userDailyBeansPot: 0,
    userDailyBeansPotPrev: 0,
    userOverallBeansPot: 0,
    tokens: null,
    myAccRate: null,
    dayIndex: null,
  });
  const [rankings, setRankings] = useState({
    userOverall: [],
    userDailyToday: [],
    userDailyYest: [],
    talentOverall: [],
    talentDailyToday: [],
    talentDailyYest: [],
  });

  const [tabs, setTabs] = useState({
    fieldGoal: true,
    growthAcc: false,
    giftLeaderBoard: false,
  });
  const toggleGuide = () => {
    setShowGuide(0);
  };

  const toogleAccPopUp = () => {
    setShowAccPopUp((prevState) => !prevState);
  };

  const toggleRewardsHistory = () => {
    setShowRewardHistory(0);
  };
  const toggleProgressPopUp = () => {
    setProgressPopUp((prevState) => !prevState);
  };
  const changeLanguage = (index) => {
    setSelectedLanguage(index);
  };

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

  const calculateEstRewards = (percent, totalBeans) => {
    return (percent / 100) * totalBeans;
  }
  //Ranking functions
  function getUserOverall() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=1&dayIndex=${userInfo.dayIndex}&type=2&sort=2&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prevState) => ({
          ...prevState,
          userOverall: res.data.list,
        }));
      });
  }
  function getUserDailyToday() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=1&dayIndex=${userInfo.dayIndex}&type=2&sort=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prev) => ({ ...prev, userDailyToday: res.data.list }));
      });
  }

  function getUserDailyYest() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=1&dayIndex=${userInfo.dayIndex - 1
      }&type=2&sort=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prev) => ({ ...prev, userDailyYest: res.data.list }));
      });
  }

  function getTalentOverall() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=2&dayIndex=${userInfo.dayIndex}&type=2&sort=2&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prevState) => ({
          ...prevState,
          talentOverall: res.data.list,
        }));
      });
  }

  function getTalentDailyToday() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=2&dayIndex=${userInfo.dayIndex}&type=2&sort=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prev) => ({ ...prev, talentDailyToday: res.data.list }));
      });
  }

  function getTalentDailyYest() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=2&dayIndex=${userInfo.dayIndex - 1
      }&type=2&sort=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prev) => ({ ...prev, talentDailyYest: res.data.list }));
      });
  }

  const getInfo = (userId) => {
    fetch(`${baseUrl}/basketball/getUserEventInfo?userId=${testUserId}`, {
      headers: {
        method: "GET",
        checkTag: "",
        redirect: "follow",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("response is:", res);
        setUserInfo({
          ...userInfo,
          dailyTaskList: res.data.dailyTaskInfoList,
          throwsLeft: res.data.chance,
          mySuccessfullAttempt: res.data.attempts,
          milestoneBeansPot: res.data.milestoneRewardBeansPot,
          talentOverallBeansPot: res.data.talentOverallBeansPot,
          userDailyBeansPot: res.data.dayBeanPotInfoList.find(
            (item) => item.day === res.data.day
          ).dayBeanPot,
          userDailyBeansPotPrev: res.data.dayBeanPotInfoList.find(
            (item) => item.day === res.data.day - 1
          ).dayBeanPot,

          tokens: res.data.userTaskInfo.tokens,
          myAccRate: res.data.growth,
          dayIndex: res.data.day,
        });
      })
      .catch((error) => { });
  };

  const playGame = () => {
    setIsPlaying(1);
    fetch(`${baseUrl}/basketball/playShootGame/`, {
      method: "POST",
      body: JSON.stringify({ userId: testUserId, playCount: 1 }),
      headers: {
        checkTag: "",
        userId: testUserId,
        token: "A198AA5AE66DEC4A5790A3C88C38242D76",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

    setTimeout(() => {
      setIsPlaying(0);
    }, 4000);
  };

  const handleChange = (event) => {
    console.log("handle change:", event.key);

    const inputValue = event.target.value;
    if (
      inputValue === "" ||
      (Number.isInteger(+inputValue) && +inputValue >= 1 && +inputValue <= 99)
    ) {
      setInputValue(inputValue);
    } else if (+inputValue > 99) {
      setInputValue(99);
    }
  };

  const handleKeyDown = (event) => {
    console.log("on key down :", event.key);
    if (event.key === ".") {
      // setInputValue(prevState => prevState.slice(0, -1))
      inputValue.slice(0, -1);
    }
    event.preventDefault();
  };

  useEffect(() => {
    getInfo();
  }, []);
  useEffect(() => {
    if (userInfo.dayIndex) {
      getUserOverall();
      getUserDailyToday();
      getUserDailyYest();
      getTalentOverall();
      getTalentDailyToday();
      getTalentDailyYest();
    }
  }, [userInfo.dayIndex]);

  return (
    <AppContext.Provider
      value={{
        toggleGuide: toggleGuide,
        toggleRewardsHistory: toggleRewardsHistory,
        showAccPopUp: showAccPopUp,
        toogleAccPopUp: toogleAccPopUp,
        userInfo: userInfo,
        progressPopUp: progressPopUp,
        toggleProgressPopUp: toggleProgressPopUp,
        rankings: rankings,
        calculateEstRewards: calculateEstRewards
      }}
    >
      <div className="App">
        <div className="appHeader">
          <LanguageDropdown
            changeLanguage={changeLanguage}
            selectedLanguage={selectedLanguage}
          />
          <div className="infoAndRewards">
            <button
              className="guideBtn"
              onClick={() => setShowGuide(1)}
            ></button>
            <button
              className="rewardBtn"
              onClick={() => setShowRewardHistory(1)}
            ></button>
          </div>
          <div className="gameBtns">
            <button className="throws-left">
              Throw Left:{userInfo.throwsLeft}
            </button>
            <div className="chances">
              <span>Chances:</span>
              <input
                placeholder="TYPE HERE"
                className="inputField"
                type="number"
                defaultValue={1}
                onChange={handleChange}
                min="1"
                max="99"
                value={inputValue}
                onKeyDown={handleKeyDown}
                step="1"
              />
            </div>
          </div>
          <button className="throw-btn" onClick={playGame}></button>
          <button className="hand"></button>
          <button className="throw"></button>

          {/* {isPlaying ? (
            <img src={basket1} className="playing-character" />
          ) : (
            <img src={jumpingCharcter} className="jumping-character" />
          )} */}
          <img src={basket1} className="playing-character" />
          <img src={jumpingCharcter} className="jumping-character" />


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
        {tabs.fieldGoal ? <FieldGoalMilestone /> : ""}
        {tabs.growthAcc ? <GrowAcceleration /> : ""}
        {tabs.giftLeaderBoard ? <GiftingLeaderBoards /> : ""}

        {showGuide ? <Guide selectedLanguage={selectedLanguage} /> : ""}
        {showRewardHistory ? <RewardHistory /> : ""}
      </div>
    </AppContext.Provider>
  );
}

export default App;
