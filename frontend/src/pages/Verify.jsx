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
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4 overflow-hidden relative">
      {/* Neon blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full bg-cyan-500 opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[320px] h-[320px] rounded-full bg-fuchsia-500 opacity-10 blur-3xl pointer-events-none" />

      <div className="relative z-10 bg-[#121212] border border-[#222] rounded-xl p-10 w-full max-w-md shadow-[0_0_20px_rgba(0,255,255,0.1)] text-center">
        {/* Logo */}
        <h1 className="text-cyan-400 text-3xl font-bold tracking-widest mb-8">
          CodeVerse
        </h1>

        {/* Icon */}
        <div className="w-[72px] h-[72px] rounded-full border-2 border-cyan-400 flex items-center justify-center mx-auto mb-6">
          {status === "success" ? (
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00ffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <polyline points="20,6 9,17 4,12" />
            </svg>
          ) : status === "error" ? (
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff4081"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
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
          )}
        </div>

        {/* Heading */}
        <h2
          className={`text-2xl font-bold mb-3 ${status === "error" ? "text-[#ff4081]" : "text-cyan-400"}`}>
          {status === "success"
            ? "You're Verified!"
            : status === "error"
              ? "Verification Failed"
              : "Verify Your Email"}
        </h2>

        {/* Subtext */}
        <p className="text-[#cccccc] text-[15px] leading-relaxed mb-2">
          {status === "success"
            ? "Your account is now active. Redirecting you to login..."
            : status === "error"
              ? ""
              : "Click the button below to verify your email address and activate your CodeVerse account."}
        </p>

        {status === "idle" && (
          <p className="text-[#888] text-[13px] mb-8">
            This link will expire in{" "}
            <span className="text-cyan-400 font-bold">48 hours</span>.
          </p>
        )}

        {/* Error message */}
        {status === "error" && message && (
          <p className="text-[#ff4081] font-bold text-[14px] mb-6">{message}</p>
        )}

        {/* Success message */}
        {status === "success" && message && (
          <p className="text-cyan-400 font-bold text-[14px] mb-6">{message}</p>
        )}

        {/* Button */}
        {status !== "success" && (
          <button
            onClick={handleVerify}
            disabled={status === "loading"}
            className="w-full py-3 border border-cyan-400 text-cyan-400 font-bold text-[15px] rounded-lg tracking-wide transition-all duration-200 hover:shadow-[0_0_10px_#00ffff] hover:bg-cyan-400/10 disabled:opacity-50 disabled:cursor-not-allowed">
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00ffff"
                  strokeWidth="2"
                  strokeLinecap="round">
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

        {/* Redirect hint */}
        {status === "success" && (
          <p className="text-[#888] text-[13px] mt-4">
            Not redirected?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-cyan-400 font-bold cursor-pointer hover:text-fuchsia-400 transition-colors">
              Go to Login
            </span>
          </p>
        )}

        {/* Footer */}
        <p className="text-[#555] text-[12px] mt-8 border-t border-[#222] pt-6 leading-relaxed">
          If you didn't create a CodeVerse account, you can safely ignore this.
          <br />
          &copy; 2025 CodeVerse. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default VerifyPage;
