import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminSidebar.css";
import {
  ExpandLess,
  ExpandMore,
  Menu,
  Language,
  LibraryBooks,
  AutoStories,
  PeopleAlt,
  CardMembership,
  MenuBook,
  AddCircleOutline,
  ListAlt,
  Home,
} from "@mui/icons-material";

const AdminSidebar = ({ open, setOpen }) => {
  const [tutorialOpen, setTutorialOpen] = useState(false);
  const [membershipOpen, setMembershipOpen] = useState(false);
  const location = useLocation();

  const toggleTutorial = () => setTutorialOpen(!tutorialOpen);
  const toggleMembership = () => setMembershipOpen(!membershipOpen);
  const toggleSidebar = () => setOpen(!open);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      {/* Mobile Toggle Button - Hidden on Desktop */}
      <div
        className="fixed top-5 left-5 z-50 cursor-pointer rounded-card-sm bg-surface-elevated p-2 shadow-lg md:hidden border border-border"
        onClick={toggleSidebar}>
        <Menu className="text-primary h-7 w-7" />
      </div>

      {/* Background Overlay for Mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Sidebar Container */}
      <aside
        className={`
    fixed top-0 left-0 z-40 h-screen w-72 
    glass border-r border-border-light 
    transition-transform duration-300 ease-in-out
    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}>
        <div className="flex h-full flex-col p-6">
          {/* Branding Header */}
          <div className="mb-10 flex items-center gap-3 px-2">
            <div className="h-8 w-8 rounded-card-sm bg-linear-to-br from-primary to-accent shadow-[0_0_15px_rgba(var(--primary),0.3)]" />
            <h2 className="text-xl font-black tracking-tighter text-text-primary uppercase">
              Admin <span className="text-primary">Panel</span>
            </h2>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
            <ul className="space-y-1.5">
              {/* Dashboard Link */}
              <li onClick={handleLinkClick}>
                <Link
                  to="/admin/dashboard"
                  className={`group flex items-center gap-3 rounded-card-sm px-4 py-3 text-sm font-bold transition-all
                ${
                  isActive("/admin/dashboard")
                    ? "bg-primary/10 text-primary border border-primary/20 shadow-sm shadow-primary/10"
                    : "text-text-secondary hover:bg-surface-elevated hover:text-text-primary"
                }`}>
                  <MenuBook
                    className={`h-5 w-5 ${isActive("/admin/dashboard") ? "text-primary" : "text-text-muted group-hover:text-primary"}`}
                  />
                  <span>Dashboard</span>
                </Link>
              </li>

              {/* Tutorial Dropdown */}
              <li>
                <div
                  onClick={toggleTutorial}
                  className="flex cursor-pointer items-center justify-between rounded-card-sm px-4 py-3 text-sm font-bold text-text-secondary transition-all hover:bg-surface-elevated hover:text-text-primary">
                  <div className="flex items-center gap-3">
                    <LibraryBooks className="h-5 w-5 text-text-muted" />
                    <span>Tutorial</span>
                  </div>
                  {tutorialOpen ? (
                    <ExpandLess className="h-4 w-4" />
                  ) : (
                    <ExpandMore className="h-4 w-4" />
                  )}
                </div>

                {tutorialOpen && (
                  <ul className="mt-1 space-y-1 pl-9 border-l border-border-light ml-6">
                    <li onClick={handleLinkClick}>
                      <Link
                        to="/admin/add-language"
                        className={`block rounded-card-sm px-4 py-2 text-xs font-bold transition-all ${isActive("/admin/add-language") ? "text-primary" : "text-text-muted hover:text-text-primary"}`}>
                        Add Language
                      </Link>
                    </li>
                    <li onClick={handleLinkClick}>
                      <Link
                        to="/admin/add-chapter"
                        className={`block rounded-card-sm px-4 py-2 text-xs font-bold transition-all ${isActive("/admin/add-chapter") ? "text-primary" : "text-text-muted hover:text-text-primary"}`}>
                        Add Chapter
                      </Link>
                    </li>
                    <li onClick={handleLinkClick}>
                      <Link
                        to="/admin/all-tutorials"
                        className={`block rounded-card-sm px-4 py-2 text-xs font-bold transition-all ${isActive("/admin/all-tutorials") ? "text-primary" : "text-text-muted hover:text-text-primary"}`}>
                        All Tutorials
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Static Links */}
              <li onClick={handleLinkClick}>
                <Link
                  to="/admin/show-user"
                  className={`group flex items-center gap-3 rounded-card-sm px-4 py-3 text-sm font-bold transition-all ${isActive("/admin/users") ? "bg-primary/10 text-primary border border-primary/20" : "text-text-secondary hover:bg-surface-elevated hover:text-text-primary"}`}>
                  <PeopleAlt className="h-5 w-5 text-text-muted group-hover:text-primary" />
                  <span>Users</span>
                </Link>
              </li>

              <li onClick={handleLinkClick}>
                <Link
                  to="/admin/show-order"
                  className={`group flex items-center gap-3 rounded-card-sm px-4 py-3 text-sm font-bold transition-all ${isActive("/admin/show-order") ? "bg-primary/10 text-primary border border-primary/20" : "text-text-secondary hover:bg-surface-elevated hover:text-text-primary"}`}>
                  <ListAlt className="h-5 w-5 text-text-muted group-hover:text-primary" />
                  <span>Orders</span>
                </Link>
              </li>

              {/* Membership Dropdown */}
              <li>
                <div
                  onClick={toggleMembership}
                  className="flex cursor-pointer items-center justify-between rounded-card-sm px-4 py-3 text-sm font-bold text-text-secondary transition-all hover:bg-surface-elevated hover:text-text-primary">
                  <div className="flex items-center gap-3">
                    <CardMembership className="h-5 w-5 text-text-muted" />
                    <span>Memberships</span>
                  </div>
                  {membershipOpen ? (
                    <ExpandLess className="h-4 w-4" />
                  ) : (
                    <ExpandMore className="h-4 w-4" />
                  )}
                </div>

                {membershipOpen && (
                  <ul className="mt-1 space-y-1 pl-9 border-l border-border-light ml-6">
                    <li onClick={handleLinkClick}>
                      <Link
                        to="/admin/add-membership"
                        className={`block rounded-card-sm px-4 py-2 text-xs font-bold transition-all ${isActive("/admin/add-membership") ? "text-primary" : "text-text-muted hover:text-text-primary"}`}>
                        Add Membership
                      </Link>
                    </li>
                    <li onClick={handleLinkClick}>
                      <Link
                        to="/admin/show-all-membership"
                        className={`block rounded-card-sm px-4 py-2 text-xs font-bold transition-all ${isActive("/admin/show-all-membership") ? "text-primary" : "text-text-muted hover:text-text-primary"}`}>
                        All Memberships
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="mt-auto pt-6 border-t border-border-light">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center gap-3 rounded-card-sm px-4 py-3 text-sm font-bold text-accent transition-all hover:bg-accent/10">
              <Home className="h-5 w-5" />
              <span>Back to Website</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
