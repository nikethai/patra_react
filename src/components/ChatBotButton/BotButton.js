import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { DropdownButton, Dropdown } from "react-bootstrap";
import ReactWebChat, { createDirectLine } from "botframework-webchat";

import "./BotButton.css";

const handleClick = () => {
  alert("Dit me may");
};

const BotButt = () => {
  const directLine = useMemo(() =>
    createDirectLine(
      { token: `${process.env.REACT_APP_DIRECT_LINE}` },
      []
    )
  );

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
        <div className="chatbot-box-inside">
          <ReactWebChat directLine={directLine} userId="tutaoidnheahihih" />
        </div>
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
