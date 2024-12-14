import Image from "next/image";
import React from "react";
import { SCREENS } from "../contants";

interface ConfirmEmailProps {
  handleScreenChange: (screen: string) => void;
}

export default function ConfirmEmail({
  handleScreenChange,
}: ConfirmEmailProps) {
  return (
    <div className="welcome-card">
      <div className="center-container">
        <Image src="/images/email.png" alt="logo" width={64} height={64} />
      </div>
      <div className="center-container top-15">
        <h3>Confirm your email</h3>
      </div>
      <div className="center-container">
        <h3 className="subheading">
          Enter the verification code we emailed to{" "}
          <a href="#" className="email-text">
            email@musicgpt.com
          </a>
        </h3>
      </div>
      <div className="center-container top-15">
        <div className="otp-container">
          <input maxLength={1} className="otp-input" type="text" />

          <input maxLength={1} className="otp-input" type="text" />

          <input maxLength={1} className="otp-input" type="text" />

          <input maxLength={1} className="otp-input" type="text" />
        </div>
      </div>

      <div className="center-container">
        <button
          type="button"
          onClick={() => handleScreenChange(SCREENS.GET_STARTED)}
          className="btn-continue "
        >
          Continue
        </button>
      </div>
      <div className="center-container">
        <span className="footer-text">
          Didn’t receive code? Resend email (59s)
        </span>
      </div>
    </div>
  );
}
