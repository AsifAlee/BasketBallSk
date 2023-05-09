import PopUp from "../components/PopUp";
import bg from "../assets/images/game-popup.gif";
import "../styles/popup.scss";
import beanBag from "../assets/images/beanbag.png";
import { useContext } from "react";
import { AppContext } from "../App";
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
          <img className="gameBeansBag" src={beanBag} />
          {beans > 0 ? (
            <p className="beansWon">{`${beans} Beans`}</p>
          ) : (
            <div className="no-rewards">
              <p>DO YOU KNOW?</p>
              <p>Successfull throws win you beans.</p>
            </div>
          )}
        </div>
      </div>
    </PopUp>
  );
}

export default GamePopUp;
