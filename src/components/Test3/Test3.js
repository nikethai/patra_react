import React, { useState, useEffect } from "react";
import {} from "react-bootstrap";
import Repo from "../../fetch/repo/repositoryFactory";

import "./Test3.css";
import SenderDiv from "./SenderDiv/SenderDiv";
import ReceiveDiv from "./ReceiveDiv/ReceiveDiv";

const ChatRepo = Repo.get("chat");
export default function (props) {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState([]);
  let textInp = React.createRef();

  const msgg = ({ type, message }) => {
    console.log(msg);
    if (type === "receiver") {
      return <ReceiveDiv message={message} />;
    } else if (type === "sender") {
      return <SenderDiv message={message} />;
    }
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      const inputObj = { type: "receiver", message: textInp.current.value };
      const sendingObj = { username: "admin", message: input };
      setMsg((msg) => [...msg, inputObj]);
      const msgReceive = await ChatRepo.create(sendingObj);
      setMsg((msg) => [...msg, msgReceive]);
      setInput('');
    }
    
  };

  return (
    <div>
      {/* Hello world */}
      <div className="row rounded-lg overflow-hidden shadow">
        {/* Users box*/}
        {/* Chat Box*/}
        <div className="col-12 px-0">
          <div className="px-4 py-5 chat-box bg-white">
            {/* Sender Message*/}

            {msg.length > 0 ? (
              msg.map((mss, index) => <div key={index}>{msgg(mss)}</div>)
            ) : (
              <div></div>
            )}
            {/* Typing area */}
          </div>
        </div>
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Type a message"
          aria-describedby="button-addon2"
          className="form-control rounded-0 border-0 py-4 bg-light"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={handleKeyPress}
          ref={textInp}
        />
      </div>
    </div>
  );
}
