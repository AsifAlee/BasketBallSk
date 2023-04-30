import React, { useState } from "react";
import "../styles/accordion.scss";

import rewardsSliderBg from "../assets/images/rewards-slide-bg.png";
import { ButtonSlider } from "./ButtonSlider";

function Accordion(props) {
  const { toggleUserTalent } = props;
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  function handleSliderToggle() {
    toggleUserTalent();
  }
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <div className="accordion-title">
          <span>{props.title}</span>
          <span className={isOpen ? "down-chevron" : "right-chevron"}></span>
        </div>
      </div>
      {isOpen && (
        <div className="accordion-body">
          <div>
            <ButtonSlider
              onToggle={handleSliderToggle}
              bg={rewardsSliderBg}
              texts={["User", "Talent"]}
            />
          </div>
          {props.children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
