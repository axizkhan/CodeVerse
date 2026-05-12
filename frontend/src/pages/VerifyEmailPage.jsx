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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Themed Neon Blobs - Using your primary and accent tokens */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-primary opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-accent opacity-10 blur-[120px]" />

      {/* Main Card - Using your .glass and .animate-fadeIn classes */}
      <div className="glass card animate-fadeIn relative z-10 w-full max-w-md p-10 text-center">
        {/* Icon Container - Using your primary and surface tokens */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-surface-elevated text-primary shadow-[0_0_15px_rgba(var(--primary),0.2)]">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
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

        <h2 className="mb-2 text-2xl font-bold tracking-tight text-text-primary">
          Check Your Email
        </h2>

        <p className="text-text-secondary">
          A verification link has been sent to
        </p>
        <p className="mb-6 font-bold text-primary">{email}</p>

        <p className="mb-8 text-sm leading-relaxed text-text-muted">
          Open your email app and click the link to verify your account. The
          link expires in{" "}
          <span className="text-text-primary font-medium">24 hours</span>.
        </p>

        {/* Primary Action Button - Using your primary-hover and radius tokens */}
        <button
          className="w-full rounded-card-md bg-primary py-3.5 text-[15px] font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0"
          onClick={handleOpenEmail}>
          Open Email App
        </button>

        <div className="mt-8 space-y-3">
          <p className="text-sm text-text-secondary">
            Didn't receive it?{" "}
            <span
              className="cursor-pointer font-bold text-primary transition-colors hover:text-accent"
              onClick={handleResend}>
              Resend verification email
            </span>
          </p>

          <p className="text-sm text-text-muted">
            Wrong email?{" "}
            <Link
              to="/signup"
              className="font-bold text-text-primary transition-colors hover:text-primary">
              Go back
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
