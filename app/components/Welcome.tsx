import Image from "next/image";
import React from "react";
import { SCREENS } from "../page";

interface WelcomeProps {
  handleScreenChange: (screen: string) => void;
}

export default function Welcome({ handleScreenChange }: WelcomeProps) {
  return (
    <div className="welcome-card">
      <div className="center-container">
        <Image src="/images/subtract.png" alt="logo" width={36} height={35} />
      </div>
      <div className="center-container">
        <h3>Welcome to MusicGPT</h3>
      </div>
      <div className="center-container top-minus-18 bottom-10">
        <h3 className="subheading">
          Sign up or log in to your existing account.
        </h3>
      </div>
      <div className="social-login-container">
        <button
          type="button"
          onClick={() => handleScreenChange(SCREENS.CONFIRM_EMAIL)}
          className="social-login-button"
        >
          <Image src="/images/apple.png" alt="apple" width={16} height={20} />
        </button>
        <button
          type="button"
          onClick={() => handleScreenChange(SCREENS.CONFIRM_EMAIL)}
          className="social-login-button"
        >
          <Image src="/images/google.svg" alt="google" width={16} height={20} />
        </button>
        <button
          type="button"
          onClick={() => handleScreenChange(SCREENS.CONFIRM_EMAIL)}
          className="social-login-button"
        >
          <Image
            src="/images/discord.svg"
            alt="twitter"
            width={16}
            height={20}
          />
        </button>
        <button
          type="button"
          onClick={() => handleScreenChange(SCREENS.CONFIRM_EMAIL)}
          className="social-login-button"
        >
          <Image
            src="/images/facebook.svg"
            alt="facebook"
            width={16}
            height={20}
          />
        </button>
      </div>

      <div className="center-container">
        <div className="divider">
          <span className="divider-text">or</span>
        </div>
      </div>

      <div className="center-container">
        <input
          type="text"
          className="input-field"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="center-container">
        <button
          type="button"
          onClick={() => handleScreenChange(SCREENS.CONFIRM_EMAIL)}
          className="btn-continue "
        >
          Continue
        </button>
      </div>
      <div className="center-container">
        <span className="footer-text">
          By continuing, you agree to our Terms & Privacy
        </span>
      </div>
    </div>
  );
}
