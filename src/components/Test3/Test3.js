import React, { useState, useEffect } from "react";
import {} from "react-bootstrap";
import Repo from "../../fetch/repo/repositoryFactory";
import * as signalr from "@aspnet/signalr";

import "./Test3.css";
import SenderDiv from "./SenderDiv/SenderDiv";
import ReceiveDiv from "./ReceiveDiv/ReceiveDiv";

const connect = new signalr.HubConnectionBuilder()
  .withUrl("https://buttchatloginservice.azurewebsites.net/chat")
  .build();

const ChatRepo = Repo.get("chat");
export default function (props) {
  const [input, setInput] = useState("");
  const [msgs, setMsg] = useState([]);
  const [userName, setUserName] = useState("");

  const [isStart, setIsStart] = useState(false);

  const [logged, setLogged] = useState("");

  let textInp = React.createRef();

  const msgClassify = ({ type, message, userName }) => {
    console.log(msgs);
    if (type === "receiver") {
      return <ReceiveDiv message={message} username={userName} />;
    } else if (type === "sender") {
      return <SenderDiv message={message} username={userName} />;
    }
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      const inputObj = { type: "receiver", message: textInp.current.value };
      const sendingObj = { username: "admin", message: input };
      setMsg((msgs) => [...msgs, inputObj]);
      const msgReceive = await ChatRepo.create(sendingObj);
      setMsg((msgs) => [...msgs, msgReceive]);
      setInput("");
    }
  };

  const connectChat = () => {
    connect
      .start()
      .then(() => {
        setLogged("Connected to chat!");
        setIsStart(true);
        console.log("Connected!");
      })
      .catch((err) => console.error("SignalR Connection Error: ", err));

    connect.on("ReceiveMessage", (user, message) => {
      console.log("Rei: " + message);
      const receiveObj = { type: "sender", message, userName: user };
      setMsg((msgs) => [...msgs, receiveObj]);
    });
  };

  const stopChat = () => {
    connect
      .stop()
      .then(() => {
        setLogged("Chat has been stopped!");
        setIsStart(false);
      })
      .catch((err) => console.log(err));
  };

  const sendMsg = (event) => {
    if (event.key === "Enter") {
      connect.invoke("SendMessage", userName, input);
      const inputObj = { type: "receiver", message: input, userName: userName };
      setMsg((msgs) => [...msgs, inputObj]);
      setInput("");
    }
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      connectChat();
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

            {msgs.length > 0 ? (
              msgs.map((msg, index) => (
                <div key={index}>{msgClassify(msg)}</div>
              ))
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
          onKeyPress={sendMsg}
          ref={textInp}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          placeholder="Your name"
          onKeyPress={handlePress}
        />
        {isStart ? (
          <input type="button" value="Stop chat" onClick={stopChat} />
        ) : (
          <input type="button" value="Start chat" onClick={connectChat} />
        )}
        {logged === "" ? null : (
          <div>
            <p>{logged}</p>
          </div>
        )}
      </div>
    </div>
  );
}
