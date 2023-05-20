import PopUp from "../components/PopUp";
import bg from "../assets/images/game-popup.gif";
import "../styles/popup.scss";
import { useContext } from "react";
import { AppContext } from "../App";
import { baseUrl } from "../api";
function GamePopUp(props) {
  const { toggleGamePopUp } = useContext(AppContext);
  const { textTitle, content, beans, throwsLeft } = props;

  return (
    <PopUp
      bg={bg}
      popUpHandler={toggleGamePopUp}
      // isRewards={true}
      textTitle={textTitle}
      isGame={true}
    >
      <div className="game">
        <p className="textTitle">{textTitle}</p>
        <div className="game-content">
          <p className="gameContent">{content}</p>
          <img
            className="gameBeansBag"
            src={baseUrl + "/streamkar/rewards/beanbag.png"}
          />
          {beans > 0 ? (
            <p className="beansWon">{`${beans} Beans`}</p>
          ) : (
            <div className="no-rewards">
              <p>DO YOU KNOW?</p>
              <p>Successful throws win you beans.</p>
            </div>
          )}
        </div>
      </div>
    </PopUp>
  );
}

export default GamePopUp;
