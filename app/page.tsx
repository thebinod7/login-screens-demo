"use client";

import React from "react";
import ConfirmEmail from "./components/ConfirmEmail";
import GetStarted from "./components/GetStarted";
import Welcome from "./components/Welcome";

export const SCREENS = {
  WELCOME: "WELCOME",
  CONFIRM_EMAIL: "CONFIRM_EMAIL",
  GET_STARTED: "GET_STARTED",
};

export default function Home() {
  const [screen, setScreen] = React.useState(SCREENS.WELCOME);

  const handleScreenChange = (screen: string) => {
    setScreen(screen);
  };

  return (
    <div className="center-container">
      {screen === SCREENS.WELCOME && (
        <Welcome handleScreenChange={handleScreenChange} />
      )}
      {screen === SCREENS.CONFIRM_EMAIL && (
        <ConfirmEmail handleScreenChange={handleScreenChange} />
      )}
      {screen === SCREENS.GET_STARTED && (
        <GetStarted handleScreenChange={handleScreenChange} />
      )}
    </div>
  );
}