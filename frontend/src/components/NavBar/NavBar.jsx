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
    <nav className="w-full bg-[#0D0D0D] text-white shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="hover:text-cyan-400 transition">
              Home
            </Link>
            <Link
              to="/tutorials"
              className="hover:text-cyan-400 transition">
              Tutorials
            </Link>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition">
              About
            </Link>

            {!loading && user ? (
              <>
                <Link
                  to="/get-started"
                  className="px-4 py-1 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition">
                  Subscription
                </Link>

                {user.role === "admin" && (
                  <Link
                    to="/admin/dashboard"
                    className="hover:text-cyan-400 transition">
                    Admin
                  </Link>
                )}

                {/* Custom dropdown for account */}
                <div className="relative">
                  <button
                    onClick={() => setAccountOpen(!accountOpen)}
                    className="flex items-center space-x-2 hover:text-cyan-400">
                    <User size={20} />
                    <span>Account</span>
                  </button>
                  {accountOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] border border-cyan-400 rounded shadow-lg z-50">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-cyan-400 hover:text-black transition">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-cyan-400 transition">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hover:text-cyan-400 transition">
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0D0D0D] px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block py-2 hover:text-cyan-400">
            Home
          </Link>
          <Link
            to="/tutorials"
            className="block py-2 hover:text-cyan-400">
            Tutorials
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-cyan-400">
            About
          </Link>

          {!loading && user ? (
            <>
              <Link
                to="/get-started"
                className="block px-4 py-1 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition">
                Subscription
              </Link>

              {user.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="block py-2 hover:text-cyan-400">
                  Admin
                </Link>
              )}

              {/* MUI Dropdown on Mobile */}
              <IconButton
                onClick={handleAccountClick}
                sx={{ color: "cyan" }}>
                <AccountCircle />
              </IconButton>
              <MuiMenu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                PaperProps={{
                  sx: {
                    bgcolor: "#1a1a1a",
                    color: "white",
                    border: "1px solid #00ffff",
                    minWidth: "150px",
                    mt: 1,
                    ml: 5,
                  },
                }}>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
              </MuiMenu>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block py-2 hover:text-cyan-400">
                Login
              </Link>
              <Link
                to="/signup"
                className="block py-2 hover:text-cyan-400">
                Signup
              </Link>
            </>
          )}
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
        className="logo-link flex-shrink-0 text-2xl font-bold">
        <span className="logo-code text-cyan-400">Code</span>
        <span className="logo-verse text-white">Verse</span>
        <span className="logo-cursor" />
      </Link>
    </>
  );
}
