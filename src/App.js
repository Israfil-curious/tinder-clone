import React from "react";
import './App.css';
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    // BEM className conventions
    <div className="app">
      {/* header */}
        <Header />
      {/* Tinder card */}
        <TinderCards />
      {/* swipeButtons */}
        <SwipeButtons />
    </div>
  );
}

export default App;
