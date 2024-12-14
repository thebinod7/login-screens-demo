import Image from "next/image";
import React from "react";
import { SCREENS } from "../contants";

interface GetStartedProps {
  handleScreenChange: (screen: string) => void;
}

export default function GetStarted({ handleScreenChange }: GetStartedProps) {
  return (
    <div className="welcome-card">
      <div className="center-container">
        <Image src="/images/subtract.png" alt="logo" width={36} height={35} />
      </div>
      <div className="center-container">
        <h3>Let’s get started.</h3>
      </div>
      <div className="center-container top-minus-18 bottom-25">
        <h3 className="subheading">How can we call you?</h3>
      </div>

      <div className="center-container">
        <input
          type="text"
          className="input-field"
          placeholder="Name"
          name="name"
        />
      </div>

      <div className="center-container top-20">
        <input
          type="text"
          className="input-field"
          placeholder="@username"
          name="username"
        />
      </div>

      <div className="center-container">
        <button
          type="button"
          onClick={() => handleScreenChange(SCREENS.WELCOME)}
          className="btn-create"
        >
          Start Creating
        </button>
      </div>
      <div className="center-container">
        <span className="footer-text">
          You can change your name and username at anytime.
        </span>
      </div>
    </div>
  );
}
