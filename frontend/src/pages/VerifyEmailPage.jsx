import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./VerifyEmailPage.css";

const VerifyEmailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "your email";

  const handleOpenEmail = () => {
    window.location.href = "mailto:";
  };

  const handleResend = async () => {
    // Wire up your resend API call here
    alert("Verification email resent!");
  };

  return (
    <div className="verify-container neon-blobs">
      <div className="verify-card">
        <div className="verify-icon">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00ffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect
              x="2"
              y="4"
              width="20"
              height="16"
              rx="2"
            />
            <polyline points="2,4 12,13 22,4" />
          </svg>
        </div>

        <h2 className="verify-title">Check Your Email</h2>

        <p className="verify-subtitle">A verification link has been sent to</p>
        <p className="verify-email">{email}</p>

        <p className="verify-info">
          Open your email app and click the link to verify your account. The
          link expires in 24 hours.
        </p>

        <button
          className="neon-button verify-button"
          onClick={handleOpenEmail}>
          Open Email App
        </button>

        <p className="resend-text">
          Didn't receive it?{" "}
          <span
            className="link-neon"
            onClick={handleResend}>
            Resend verification email
          </span>
        </p>

        <p className="back-text">
          Wrong email?{" "}
          <Link
            to="/signup"
            className="link-neon">
            Go back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
