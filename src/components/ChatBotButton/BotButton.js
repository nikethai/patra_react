import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

import { DropdownButton, Dropdown } from "react-bootstrap";

import "./BotButton.css";

const handleClick = () => {
  alert("Dit me may");
};

const BotButt = () => {
  return (
    <Dropdown alignRight drop="up" className="button-sticky">
      <Dropdown.Toggle
        id="chatbot-dropdown"
        className="round-button btn-warning"
      >
        <FontAwesomeIcon icon={faRobot} />
      </Dropdown.Toggle>
      <Dropdown.Menu className="chatbot-box">
        <Dropdown.Header className="font-weight-bolder font-big-size">
          Chatbot
        </Dropdown.Header>
        <Dropdown.Divider />
      </Dropdown.Menu>
    </Dropdown>
    // <button
    //   onClick={handleClick}
    //   className="round-button btn-warning button-sticky"
    //   type="button"
    // >
    //   <FontAwesomeIcon icon={faRobot} />
    // </button>
  );
};

export default BotButt;
