import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleVerify = async () => {
    setStatus("loading");
    try {
      const res = await axios.post(`${backendUrl}/user/verify/${token}`);
      setStatus("success");
      setMessage(res.data.message || "Email verified successfully!");
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      setStatus("error");
      setMessage(
        err.response?.data?.message ||
          "Verification failed. Link may be invalid or expired.",
      );
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Themed Neon Blobs - Using primary and accent tokens */}
      <div className="pointer-events-none absolute top-[-100px] left-[-100px] h-[400px] w-[400px] rounded-full bg-primary opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-accent opacity-10 blur-[120px]" />

      {/* Main Card - Using your .glass and .card tokens */}
      <div className="glass card animate-fadeIn relative z-10 w-full max-w-md p-10 text-center shadow-lg">
        {/* Logo - Matches your branding */}
        <h1 className="mb-8 text-3xl font-bold tracking-widest text-primary">
          CodeVerse
        </h1>

        {/* Status Icon Circle */}
        <div
          className={`mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 transition-colors duration-300 ${
            status === "success"
              ? "border-success"
              : status === "error"
                ? "border-danger"
                : "border-primary"
          }`}>
          {status === "success" ? (
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-success">
              <polyline points="20,6 9,17 4,12" />
            </svg>
          ) : status === "error" ? (
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-danger">
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
              />
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
              />
            </svg>
          ) : (
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary">
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
              />
              <polyline points="2,4 12,13 22,4" />
            </svg>
          )}
        </div>

        {/* Heading - Dynamic colors based on status tokens */}
        <h2
          className={`mb-3 text-2xl font-bold ${
            status === "success"
              ? "text-success"
              : status === "error"
                ? "text-danger"
                : "text-text-primary"
          }`}>
          {status === "success"
            ? "You're Verified!"
            : status === "error"
              ? "Verification Failed"
              : "Verify Your Email"}
        </h2>

        {/* Subtext - Using text-secondary and text-muted tokens */}
        <p className="mb-2 text-[15px] leading-relaxed text-text-secondary">
          {status === "success"
            ? "Your account is now active. Redirecting you to login..."
            : status === "error"
              ? ""
              : "Click the button below to verify your email address and activate your CodeVerse account."}
        </p>

        {status === "idle" && (
          <p className="mb-8 text-[13px] text-text-muted">
            This link will expire in{" "}
            <span className="font-bold text-primary">48 hours</span>.
          </p>
        )}

        {/* Inline Messages */}
        {message && (
          <p
            className={`mb-6 text-[14px] font-bold ${status === "error" ? "text-danger" : "text-success"}`}>
            {message}
          </p>
        )}

        {/* Primary Action Button */}
        {status !== "success" && (
          <button
            onClick={handleVerify}
            disabled={status === "loading"}
            className={`w-full rounded-card-md py-3.5 text-[15px] font-bold tracking-wide transition-all duration-300 
          ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}
          border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]
        `}>
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Verifying...
              </span>
            ) : status === "error" ? (
              "Try Again"
            ) : (
              "Verify My Email"
            )}
          </button>
        )}

        {/* Redirect link for success */}
        {status === "success" && (
          <p className="mt-4 text-[13px] text-text-muted">
            Not redirected?{" "}
            <button
              onClick={() => navigate("/login")}
              className="font-bold text-primary hover:text-accent transition-colors">
              Go to Login
            </button>
          </p>
        )}

        {/* Footer - Using border-light token */}
        <footer className="mt-8 border-t border-border-light pt-6 text-[12px] leading-relaxed text-text-muted">
          If you didn't create a CodeVerse account, you can safely ignore this.
          <br />
          &copy; {new Date().getFullYear()} CodeVerse.
        </footer>
      </div>
    </div>
  );
};

export default VerifyPage;
