import { createContext, useEffect, useState } from "react";
import "./App.scss";
import { FieldGoalMilestone } from "./pages/FieldGoalMilestone/FieldGoalMilestone";
import { GrowAcceleration } from "./pages/GrowthAcceleration";
import GiftingLeaderBoards from "./pages/GiftingLeaderBoard";
import Guide from "./popups/Guide";
import LanguageDropdown from "./pages/LangaugeSelector";
import { RewardHistory } from "./popups/RewardHistory";
import { baseUrl, baseUrl2, testToken, testUserId } from "./api";
import noReward from "./assets/images/no-reward.gif";
import reward1 from "./assets/images/basket01.gif";
import reward2 from "./assets/images/basket02.gif";
import reward3 from "./assets/images/basket03.gif";
import reward4 from "./assets/images/basket04.gif";
import reward5 from "./assets/images/basket05.gif";
import reward6 from "./assets/images/basket06.gif";
import zero from "./assets/images/reward-history-button.gif";
import GamePopUp from "./popups/GamePopUp";
import foreverHeader from "../src/assets/images/forever-header.gif";
import beans from "./assets/images/bean.png";
import Marquee from "react-fast-marquee";
import unknownUser from "./assets/images/unknown-user.png";

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
  const [showAccInfoPopUp, setShowAccInfoPopUp] = useState(false);
  const [showSuccessAttemptPopUp, setShowSucessAttemptPopUp] = useState(false);
  const [milestonePopUp, setMilestonePopUp] = useState(false);
  const [thorwBtnOn, setThrowBtnOn] = useState(true);
  const [marqueeData, setMarqueeData] = useState({
    game: [],
    milestone: [],
    accelaration: [],
  });
  const [isInputZero, setIsInputZero] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    userId: 0,
    userToken: "",
  });

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
    accCardCount: 0,
  });

  const [rankings, setRankings] = useState({
    userOverall: [],
    userDailyToday: [],
    userDailyYest: [],
    talentOverall: [],
    talentDailyToday: [],
    talentDailyYest: [],
    milestoneRanking: [],
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

  const toggleAccInfoPopUp = () => {
    setShowAccInfoPopUp((prevState) => !prevState);
  };
  const toggleSuccessAttemptPopUp = () => {
    setShowSucessAttemptPopUp((prevState) => !prevState);
  };
  const toggleMilestonePopUp = () => {
    setMilestonePopUp((prev) => !prev);
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
  };
  function getRewardHistory() {
    fetch(
      `${baseUrl}/basketball/getRewardRecord?userId=${currentUser.userId}&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRewardHistory(res?.data?.list);
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
          userOverall: res?.data?.list,
        }));
      });
  }
  function getUserDailyToday() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=1&dayIndex=${userInfo.dayIndex}&type=2&sort=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prev) => ({ ...prev, userDailyToday: res?.data?.list }));
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
        setRankings((prev) => ({ ...prev, userDailyYest: res?.data?.list }));
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
          talentOverall: res?.data?.list,
        }));
      });
  }

  function getTalentDailyToday() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=2&dayIndex=${userInfo.dayIndex}&type=2&sort=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prev) => ({ ...prev, talentDailyToday: res?.data?.list }));
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
        setRankings((prev) => ({ ...prev, talentDailyYest: res?.data?.list }));
      });
  }

  function getMilestoneData() {
    fetch(
      `${baseUrl}/basketball/getRankInfo?userType=1&dayIndex=${userInfo.dayIndex}&type=1&sort=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setRankings((prev) => ({ ...prev, milestoneRanking: res?.data?.list }));
      });
  }

  //marquee api call
  function getMarqueeData(rankIndex) {
    fetch(
      `${baseUrl}/eventShow/getModulePushRankV3?eventDesc=20230523_basketball&pageIndex=1&pageCount=20&rankIndex=${rankIndex}&rankType=2`
    )
      .then((res) => res.json())
      .then((res) => {
        if (rankIndex === 1)
          setMarqueeData((prevState) => ({ ...prevState, game: res }));
        else if (rankIndex === 2)
          setMarqueeData((prevState) => ({ ...prevState, milestone: res }));
        else
          setMarqueeData((prevState) => ({ ...prevState, accelaration: res }));
      })
      .catch((error) => {
        console.error("error is :", error);
      });
  }

  const getInfo = () => {
    fetch(
      `${baseUrl}/basketball/getUserEventInfo?userId=${currentUser.userId}`,
      {
        headers: {
          method: "GET",
          checkTag: "",
          redirect: "follow",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setUserInfo({
          ...userInfo,
          dailyTaskList: res?.data?.dailyTaskInfoList,
          throwsLeft: res.data.chance,
          // throwsLeft: 22,

          mySuccessfullAttempt: res?.data?.attempts,
          // mySuccessfullAttempt: 2000,

          milestoneBeansPot: res?.data?.milestoneRewardBeansPot,
          talentOverallBeansPot: res?.data?.talentOverallBeansPot,
          userOverallBeansPot: res?.data?.totalUserBeanPotInfo,
          userDailyBeansPot: res?.data?.dayBeanPotInfoList.find(
            (item) => item.day === res?.data?.day
          )?.dayBeanPot,
          userDailyBeansPotPrev: res?.data?.dayBeanPotInfoList?.find(
            (item) => item.day === res.data.day - 1
          )?.dayBeanPot,

          tokens: res?.data?.userTaskInfo?.tokens,
          myAccRate: res?.data?.growth,
          dayIndex: res?.data?.day,
          accCardCount: res?.data?.userTaskInfo?.accelerationCardCount,
        });
      })
      .catch((error) => {});
  };

  const playGame = () => {
    if (!inputValue) {
      setIsInputZero(true);
      return;
    }
    setRewardWon(null);
    setThrowBtnOn(false);
    setBeansWon(0);
    fetch(`${baseUrl}/basketball/playShootGame/`, {
      method: "POST",
      body: JSON.stringify({
        userId: currentUser.userId,
        // userId: testUserId,
        playCount: parseInt(inputValue),
      }),
      headers: {
        checkTag: "",
        userId: currentUser.userId,
        token: currentUser.userToken,
        // userId: testUserId,
        // token: testToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.errorCode === 0) {
          setIsPlaying(1);
          setRewardWon(res.data.firstLevel);
          setBeansWon(res.data.totalBeans);
          setTimeout(() => {
            setIsPlaying(0);
            setShowGamePopUp(true);
            getInfo();
            getRewardHistory();
            getMilestoneData();
            setThrowBtnOn(true);
            setInputValue(1);
          }, 1950);
        } else {
          setIsPlaying(0);
          setThrowBtnOn(true);
          setShowGamePopUp(true);
        }
      })
      .catch((error) => {
        console.error("error playing game");
      });
  };

  const onUpCheck = (e) => {
    if (/[+-.]/.test(e.target.value)) {
      setInputValue("");
    } else if (e.target.value.includes(".")) {
      setInputValue("");
    } else if (e.target.value.charAt(0) === "0") {
      setInputValue(e.target.value.slice(1));
    } else {
      let max = userInfo.throwsLeft < 99 ? userInfo.throwsLeft : 99;
      let number = inputValue > max ? max : inputValue <= 0 ? "" : inputValue;
      setInputValue(parseInt(number));
    }
  };
  const onChangeHandle = (event) => {
    if (!event.target.value) {
      setIsInputZero(true);
    } else {
      setIsInputZero(false);
    }

    setInputValue(parseInt(event.target.value));
  };
  // get user info
  useEffect(() => {
    try {
      window.phone.getUserInfo(function (userInfo) {
        setCurrentUser({
          userId: userInfo.userId > 0 ? userInfo.userId : 0,
          userToken: userInfo.token != "" ? userInfo.token : null,
        });
      });
    } catch (error) {
      setCurrentUser({
        userId: 0,
        userToken: "",
      });
      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    getRewardHistory();
    getInfo();
  }, [currentUser]);
  useEffect(() => {
    if (userInfo.dayIndex) {
      getUserOverall();
      getUserDailyToday();
      getUserDailyYest();
      getTalentOverall();
      getTalentDailyToday();
      getTalentDailyYest();
      getMilestoneData();
      getMarqueeData(1);
      getMarqueeData(2);
      getMarqueeData(3);
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
        toggleAccInfoPopUp: toggleAccInfoPopUp,
        showAccInfoPopUp: showAccInfoPopUp,
        selectedLanguage: selectedLanguage,
        toggleSuccessAttemptPopUp: toggleSuccessAttemptPopUp,
        showSuccessAttemptPopUp: showSuccessAttemptPopUp,
        milestonePopUp: milestonePopUp,
        toggleMilestonePopUp: toggleMilestonePopUp,
        currentUser: currentUser,
        getInfo: getInfo,
        milesStoneMarquee: marqueeData.milestone,
        accMarquee: marqueeData.accelaration,
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
          <div className="gameMarquee">
            <Marquee speed={150}>
              {marqueeData.game.map((user) => (
                <div className="user-item">
                  <img
                    src={user.portrait ? user.portrait : unknownUser}
                    className="marquee-user"
                  />
                  <div className="details">
                    <span className="name">{user.nickName}</span>

                    <span
                      style={{ marginLeft: "1vw" }}
                    >{`has won ${user.userScore}`}</span>

                    <span>
                      <img src={beans} />
                    </span>
                    <span>Congratulations!</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="gameBtns">
            <button className="throws-left">
              Throw Left:{userInfo.throwsLeft}
            </button>
            <div style={{ position: "relative" }}>
              <div className="chances">
                <span>Chances:</span>
                <div>
                  <input
                    className="inputField"
                    // name="NumInput"
                    type="number"
                    value={inputValue}
                    min={1}
                    max={99}
                    onInput={onChangeHandle}
                    onKeyUp={onUpCheck}
                    pattern="[0-9]*"
                    style={{ border: isInputZero ? "1px solid red" : "" }}
                  />
                </div>
              </div>
              {isInputZero === true ? (
                <span className="inputZero">Enter some Value</span>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* <span className="warnText">Enter some value</span> */}

          <button
            className={thorwBtnOn === false ? "thrown" : "throw-btn"}
            disabled={isPlaying ? true : false}
            onClick={playGame}
          ></button>
          <button className="hand" style={{ pointerEvents: "none" }}></button>
          <button className="throw"></button>

          {/* {!isPlaying && (
            <img src={foreverHeader} className="jumping-character" />
          )} */}

          {isPlaying
            ? rewardWon >= 0 && (
                <img
                  src={allRewards[rewardWon]}
                  className="playing-character"
                />
              )
            : ""}
          {!isPlaying ? (
            <img src={foreverHeader} className="playing-character" />
          ) : (
            ""
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
            textTitle={
              rewardWon > 0
                ? "HURRAH!!"
                : rewardWon === 0
                ? "TRY AGAIN!!"
                : "OOPS!!"
            }
            content={
              rewardWon > 0
                ? "That was a perfect throw and you have won"
                : rewardWon === 0
                ? "Uh-Oh! The throw was unsuccessful. Please try again."
                : userInfo.throwsLeft <= 0
                ? "To earn a throwing chance spend 25k beans worth event gifts and start playing. We're waiting to see you play. Come soon!"
                : ""
            }
            beans={beansWon}
            throwsLeft={userInfo.throwsLeft > 0 ? true : false}
          />
        ) : (
          ""
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
