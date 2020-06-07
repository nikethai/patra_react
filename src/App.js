import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";



import Navbar from "./components/Navbar/NavbarComp";
import Footer from "./components/Footer/FooterComp";
import BotButton from "./components/ChatBotButton/BotButton";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar isLoggedIn="false" />
      </header>
      {/* Header above */}
      <div className="container no-over">
        <div>
          <iframe
            width="100%"
            height="750px"
            src="https://www.youtube.com/embed/sSkgQM9d3kc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
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
