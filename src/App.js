import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import * as signalr from "@aspnet/signalr";

import "./App.css";

import Navbar from "./components/Navbar/NavbarComp";
import Footer from "./components/Footer/FooterComp";
import BotButton from "./components/ChatBotButton/BotButton";
import login from "./fetch/auth/Login";

import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3/Test3";

const connect = new signalr.HubConnectionBuilder()
  .withUrl("http://localhost:32768/chat")
  .build();

function App() {
  const loginClick = () => {
    const userInfo = { username, password };
    // console.log(`${process.env.REACT_APP_BASE_URL + process.env.REACT_APP_BASE_URL}`);
    login(userInfo);
  };

  useEffect(() => {
    (function (d, s, id) {
      // Load the SDK asynchronously
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=261954274914572";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });

  const connectChat = () => {
    connect.on("send", (data) => {
      console.log("Send data: "+data);
    });
    connect.on("ReceiveMessage", (user, message) => {
      console.log("Received msg: " + message + " ,from: " + user);
    });
    connect
      .start()
      .then(() => console.log("Connected!"))
      .catch((err) => console.error("SignalR Connection Error: ", err));
  };

  const sendMsg = () => {
    connect.invoke("SendMessage", "Namnyan", "Hello");
  };
  const sendMsg2 = () => {
    connect.invoke("SendMessage", "QuyKuli", "Holla");
  };

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <header>
        <Navbar isLoggedIn="false" />
      </header>
      {/* Header above */}
      <div className="container no-over">
        {/* <div>
          <iframe
            width="100%"
            height="750px"
            src="https://www.youtube.com/embed/sSkgQM9d3kc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div> */}
        <Switch>
          <Route exact path="/test1" component={() => <Test />} />
          <Route path="/test2" component={Test2} />
          <Route path="/test3" component={Test3} />
        </Switch>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <input type="button" value="login" onClick={connectChat} />
        <input type="button" value="Send Hello" onClick={sendMsg} />
        <input type="button" value="Send Hello2" onClick={sendMsg2} />

        <BotButton />
      </div>
      {/* Footer below */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
