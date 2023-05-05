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
import noReward from "./assets/images/no-reward.gif";
import reward1 from "./assets/images/basket01.gif";
import reward2 from "./assets/images/basket02.gif";

import reward3 from "./assets/images/basket03.gif";
import reward4 from "./assets/images/basket04.gif";
import reward5 from "./assets/images/basket05.gif";
import reward6 from "./assets/images/basket06.gif";
import GamePopUp from "./popups/GamePopUp";

export const AppContext = createContext();
function App() {
  const allRewards = [
    noReward,
    reward1,
    reward2,
    reward3,
    reward4,
    reward5,
    reward6,
  ];
  const [rewardWon, setRewardWon] = useState(null);
  const [beansWon, setBeansWon] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const [showRewardHistory, setShowRewardHistory] = useState(0);
  const [rewardHistory, setRewardHistory] = useState([]);
  const [showGuide, setShowGuide] = useState(0);
  const [showGamePopUp, setShowGamePopUp] = useState(0);
  const [showAccPopUp, setShowAccPopUp] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [progressPopUp, setProgressPopUp] = useState(0);
  const [showAccInfoPopUp,setShowAccInfoPopUp] = useState(false);
  const [showSuccessAttemptPopUp,setShowSucessAttemptPopUp] = useState(false);
  const [milestonePopUp,setMilestonePopUp] = useState(false);

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
    milestoneRanking:[]
  });

  const [tabs, setTabs] = useState({
    fieldGoal: true,
    growthAcc: false,
    giftLeaderBoard: false,
  });
  const toggleGuide = () => {
    setShowGuide(0);
  };
  const toggleGamePopUp = () => {
    setShowGamePopUp(0);
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

  const toggleAccInfoPopUp = () =>{
  setShowAccInfoPopUp(prevState => !prevState)
  }
  const toggleSuccessAttemptPopUp = () => {
    setShowSucessAttemptPopUp(prevState => !prevState);
  }
  const toggleMilestonePopUp = () => {
    setMilestonePopUp(prev => !prev);
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

  const calculateEstRewards = (percent, totalBeans) => {
    return (percent / 100) * totalBeans;
  };
  function getRewardHistory() {
    fetch(
      `${baseUrl}/basketball/getRewardRecord?userId=${testUserId}&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("reward history:", res);
        setRewardHistory(res.data.list);
      })
      .catch((error) => {
        console.log("api error:", error);
      });
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
      `${baseUrl}/basketball/getRankInfo?userType=1&dayIndex=${
        userInfo.dayIndex - 1
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
      `${baseUrl}/basketball/getRankInfo?userType=2&dayIndex=${
        userInfo.dayIndex - 1
      }&type=2&sort=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prev) => ({ ...prev, talentDailyYest: res.data.list }));
      });
  }

  function getMilestoneData() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=1&dayIndex=${
        userInfo.dayIndex 
      }&type=1&sort=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prev) => ({ ...prev, milestoneRanking: res.data.list }));
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
          userOverallBeansPot:res.data.totalUserBeanPotInfo,
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
      .catch((error) => {});
  };

  const playGame = () => {
    setRewardWon(null);
    console.log("game played");
    setIsPlaying(1);
    fetch(`${baseUrl}/basketball/playShootGame/`, {
      method: "POST",
      body: JSON.stringify({ userId: testUserId, playCount: 1 }),
      headers: {
        checkTag: "",
        userId: testUserId,
        token: testToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(console.log("game response:", res));
        if (res.errorCode === 0) {
          setRewardWon(res.data.firstLevel);
          setBeansWon(res.data.totalBeans);
          setTimeout(() => {
            setIsPlaying(0);

            setShowGamePopUp(true);
            getInfo();
          }, 1800);
        } else {
          setIsPlaying(0);
          // setRewardWon(0);
        }
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
    getRewardHistory();
  }, []);
  useEffect(() => {
    if (userInfo.dayIndex) {
      getUserOverall();
      getUserDailyToday();
      getUserDailyYest();
      getTalentOverall();
      getTalentDailyToday();
      getTalentDailyYest();
      getMilestoneData();
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
        calculateEstRewards: calculateEstRewards,
        toggleGamePopUp: toggleGamePopUp,
        rewardHistory: rewardHistory,
        toggleAccInfoPopUp:toggleAccInfoPopUp,
        showAccInfoPopUp:showAccInfoPopUp,
        selectedLanguage:selectedLanguage,
        toggleSuccessAttemptPopUp:toggleSuccessAttemptPopUp,
        showSuccessAttemptPopUp:showSuccessAttemptPopUp,
        milestonePopUp:milestonePopUp,
        toggleMilestonePopUp:toggleMilestonePopUp

        
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

          <button
            className={`throw-btn ${isPlaying ? "blackNwhite" : ""}`}
            disabled={isPlaying ? true : false}
            onClick={playGame}
          ></button>
          <button className="hand"></button>
          <button className="throw"></button>

          {/* {isPlaying ? (
            <img src={basket1} className="playing-character" />
          ) : (
            <img src={jumpingCharcter} className="jumping-character" />
          )} */}
          {/* <img src={basket1} className="playing-character" /> */}
          {!isPlaying && (
            <img src={jumpingCharcter} className="jumping-character" />
          )}

          {isPlaying && (
            <img src={allRewards[rewardWon]} className="playing-character" />
          )}
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
        {showGamePopUp ? (
          <GamePopUp
            textTitle={beansWon > 0 ? "HURRAH!" : "OOPS"}
            content={
              rewardWon
                ? "That was a perfect throw and you have won"
                : "Uh-Oh!The throw was unsuccessfull.Please try again."
            }
            beans={beansWon}
            throwsLeft={userInfo.throwsLeft > 0 ? true : false}
          />
        ) : (
          ""
        )}
        {/* {showGamePopUp && throwsLeft <= 0 ? (
          <GamePopUp
            textTitle={"OOPS"}
            content={
              rewardWon
                ? "That was a perfect throw and you have won"
                : "Uh-Oh!The throw was unsuccessfull.Please try again."
            }
            beans={beansWon}
            throwsLeft={userInfo.throwsLeft > 0 ? true : false}
          />
        ) : (
          ""
        )} */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
