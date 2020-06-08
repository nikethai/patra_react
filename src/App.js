import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/NavbarComp";
import Footer from "./components/Footer/FooterComp";
import BotButton from "./components/ChatBotButton/BotButton";
import login from "./fetch/auth/Login";

import Test from './components/Test';
import Test2 from './components/Test2';

function App() {
  const loginClick = () => {
    const userInfo = { username, password };
    // console.log(`${process.env.REACT_APP_BASE_URL + process.env.REACT_APP_BASE_URL}`);
    login(userInfo);
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
          <Route exact path="/test1" component={Test}/>
          <Route  path="/test2" component={Test2}/>
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

        <input type="button" value="login" onClick={loginClick} />

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
