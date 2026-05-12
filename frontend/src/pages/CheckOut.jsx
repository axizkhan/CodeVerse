import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CheckOut.css";
import UserContext from "../UserContext"; // <-- import your UserContext

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { user } = useContext(UserContext); // <-- get user from context

  const [showDialog, setShowDialog] = React.useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  if (!state) {
    return (
      <div className="checkout-container">
        <div className="neon-blobs"></div>
        <h2
          style={{ textAlign: "center", marginTop: "80px", color: "hotpink" }}>
          No plan data found. Please select a plan from the Get Started page.
        </h2>
      </div>
    );
  }

  const { planName, price, perks, terms, cancellation } = state;
  console.log("Checkout state:", state);

  const handleBuyNow = async () => {
    try {
      const userId = user?._id; // <-- get userId from context
      const membershipId = state.membershipId;

      if (!userId || !membershipId) {
        alert("User or membership information missing.");
        return;
      }

      const response = await axios.post(`${backendUrl}/order/add`, {
        userId,
        membershipId,
      });

      if (response.data.success) {
        alert("Order placed successfully!");
        navigate("/get-started"); // Redirect to membership page
      } else {
        alert("Order failed: " + response.data.message);
      }
    } catch (error) {
      alert(
        "Order failed: " + (error.response?.data?.message || error.message),
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden px-4 py-16 flex flex-col items-center justify-center">
      {/* Themed Neon Blobs */}
      <div className="pointer-events-none absolute top-[-5%] left-[-10%] h-[450px] w-[450px] rounded-full bg-primary opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[5%] right-[-10%] h-[450px] w-[450px] rounded-full bg-accent opacity-10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-2xl text-center">
        <h1 className="animate-fadeIn mb-8 text-4xl md:text-5xl font-black tracking-tight text-text-primary">
          Subscribe to{" "}
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            {planName}
          </span>
        </h1>

        {/* Checkout Box - Using .glass and .card logic */}
        <div className="glass card p-8 md:p-12 text-left shadow-2xl border-primary/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">
                {planName}
              </h2>
              <p className="text-text-secondary">
                CodeVerse Premium Membership
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-primary">₹{price}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Per Month
              </p>
            </div>
          </div>

          {/* Perks List */}
          <div className="mb-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-4">
              What's Included
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {perks?.map((perk, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/20 text-success">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Terms and Policies Section - Using Surface Elevated */}
          <div className="space-y-6 rounded-card-md bg-surface-elevated/50 border border-border p-6 mb-10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-2 flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                Terms & Conditions
              </h4>
              <p className="text-xs leading-relaxed text-text-muted">{terms}</p>
            </div>

            <div className="pt-4 border-t border-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-2 flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Cancellation Policy
              </h4>
              <p className="text-xs leading-relaxed text-text-muted">
                {cancellation}
              </p>
            </div>
          </div>

          {/* Main Action */}
          <button
            className="w-full rounded-card-md bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-hover hover:-translate-y-1 active:translate-y-0"
            onClick={handleBuyNow}>
            Complete Purchase • ₹{price}
          </button>

          <p className="mt-4 text-center text-[10px] text-text-muted uppercase tracking-widest flex items-center justify-center gap-2">
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <rect
                x="3"
                y="11"
                width="18"
                height="11"
                rx="2"
                ry="2"
              />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Secure SSL Encrypted Payment
          </p>
        </div>
      </div>
    </div>
  );
}
