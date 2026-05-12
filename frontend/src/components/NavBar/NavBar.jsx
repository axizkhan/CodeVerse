import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { AccountCircle } from "@mui/icons-material";
import { Menu as MuiMenu, MenuItem, IconButton } from "@mui/material";
import UserContext from "../../UserContext"; // Adjust path if needed

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const { user, loading, checkUser } = useContext(UserContext);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const location = useLocation();
  const navigate = useNavigate();

  // Auto-close mobile/account menu on route change
  useEffect(() => {
    setIsOpen(false);
    setAccountOpen(false);
    setAnchorEl(null);
  }, [location]);

  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleLogout();
    handleMenuClose();
  };

  const handleLogout = async () => {
    try {
      await fetch(`${backendUrl}/user/logout`, {
        method: "GET",
        credentials: "include",
      });
      await checkUser();
      navigate("/login"); // Optional: redirect after logout
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full transition-all duration-300 border-b glass border-border-light dark:border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              to="/tutorials"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">
              Tutorials
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">
              About
            </Link>

            {!loading && user ? (
              <>
                <Link
                  to="/get-started"
                  className="rounded-full border border-primary px-5 py-1.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white">
                  Subscription
                </Link>

                {user.role === "admin" && (
                  <Link
                    to="/admin/dashboard"
                    className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">
                    Admin
                  </Link>
                )}

                {/* Custom Account Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setAccountOpen(!accountOpen)}
                    className="flex items-center space-x-2 text-text-secondary transition-colors hover:text-primary">
                    <User size={18} />
                    <span className="text-sm font-medium">Account</span>
                  </button>

                  {accountOpen && (
                    <div className="animate-fadeIn absolute right-0 mt-3 w-48 overflow-hidden rounded-card-md border border-border shadow-lg glass z-50">
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-3 text-left text-sm text-text-primary transition-colors hover:bg-primary hover:text-white">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-full bg-primary px-5 py-1.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover shadow-sm">
                  Signup
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-primary transition-colors hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="animate-fadeIn fixed inset-x-4 top-20 z-50 rounded-card-md border border-white/10 bg-white/90 backdrop-blur-xl shadow-2xl space-y-4 p-6 md:hidden overflow-hidden">
          {/* Decorative Glow inside glass */}
          <div className="absolute -top-10 -left-10 h-32 w-32 bg-primary/20 blur-3xl pointer-events-none" />

          <nav className="relative z-10 space-y-4">
            <Link
              to="/"
              className="block text-lg font-bold tracking-tight text-text-primary hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              to="/tutorials"
              className="block text-lg font-bold tracking-tight text-text-primary hover:text-primary transition-colors">
              Tutorials
            </Link>
            <Link
              to="/about"
              className="block text-lg font-bold tracking-tight text-text-primary hover:text-primary transition-colors">
              About
            </Link>

            {!loading && user ? (
              <div className="space-y-4 pt-4 border-t border-white/10">
                <Link
                  to="/get-started"
                  className="block rounded-card-sm bg-primary/10 border border-primary/30 py-3 text-center font-black uppercase tracking-widest text-xs text-primary hover:bg-primary hover:text-white transition-all">
                  Subscription
                </Link>
                {user.role === "admin" && (
                  <Link
                    to="/admin/dashboard"
                    className="flex items-center gap-2 text-lg font-bold text-text-primary hover:text-primary transition-colors">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center space-x-2 py-2 text-danger/80 font-bold hover:text-danger transition-colors">
                  <LogOut size={18} />
                  <span className="text-sm uppercase tracking-wider">
                    Logout
                  </span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-card-sm border border-white/10 bg-white/5 py-2.5 text-sm font-bold text-text-primary hover:bg-white/10 transition-all">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center justify-center rounded-card-sm bg-primary py-2.5 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                  Signup
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

function Logo() {
  return (
    <>
      <style>{`
        @keyframes codePulse {
          0%, 100% { color: #22d3ee; text-shadow: 0 0 8px rgba(34,211,238,0.4); }
          50%       { color: #5eead4; text-shadow: 0 0 18px rgba(94,234,212,0.7); }
        }
        @keyframes verseFade {
          0%, 100% { color: #ffffff; opacity: 1; }
          50%       { color: #e2e8f0; opacity: 0.85; }
        }
        @keyframes underlinePulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .logo-link { position: relative; }
        .logo-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 100%; height: 1.5px;
          background: #22d3ee;
          border-radius: 2px;
          animation: underlinePulse 3s ease-in-out infinite;
        }
        .logo-link:hover::after { opacity: 1; animation: none; background: linear-gradient(90deg, #22d3ee, #5eead4); }
        .logo-code { animation: codePulse 3s ease-in-out infinite; }
        .logo-verse { animation: verseFade 3s ease-in-out infinite; }
        .logo-cursor {
          display: inline-block;
          width: 2px; height: 1.2em;
          background: #22d3ee;
          margin-left: 2px;
          vertical-align: middle;
          border-radius: 1px;
          animation: blink 1s step-start infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-code, .logo-verse, .logo-link::after, .logo-cursor { animation: none !important; }
        }
      `}</style>

      <Link
        to="/"
        className="group relative flex-shrink-0 text-2xl font-bold transition-transform hover:scale-105 active:scale-95">
        {/* The Text Container */}
        <div className="flex items-center">
          <span className="animate-fadeIn text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.4)]">
            Code
          </span>
          <span className="text-text-primary transition-colors duration-300 group-hover:text-primary-hover">
            Verse
          </span>

          {/* Blinking Cursor using your Primary color variable */}
          <span className="ml-1 inline-block h-[1.2em] w-[3px] animate-[pulse_1s_infinite] rounded-full bg-primary" />
        </div>

        {/* Animated Underline using your theme variables */}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-linear-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />

        {/* Subtle Glow Effect on Hover */}
        <div className="absolute inset-0 -z-10 bg-primary/0 blur-xl transition-all duration-500 group-hover:bg-primary/10" />
      </Link>
    </>
  );
}
