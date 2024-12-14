"use client";

import React from "react";
import { SCREENS } from "../contants";
import Welcome from "./Welcome";
import ConfirmEmail from "./ConfirmEmail";
import GetStarted from "./GetStarted";

export default function MyApp() {
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
