import React, { useState } from "react";
import "../styles/accordion.scss";

import rewardsSliderBg from "../assets/images/rewards-slide-bg.png";
import { ButtonSlider } from "./ButtonSlider";

function Accordion(props) {
  const { toggleUserTalent, hasTabs, defaultOpen } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);

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
          {hasTabs ? (
            <div>
              <ButtonSlider
                onToggle={handleSliderToggle}
                bg={rewardsSliderBg}
                texts={["User", "Talent"]}
              />
            </div>
          ) : null}

          {props.children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
