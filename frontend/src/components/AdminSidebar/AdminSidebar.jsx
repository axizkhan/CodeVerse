import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminSidebar.css';
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
  Home
} from '@mui/icons-material';

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
      <div className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <Menu style={{ fontSize: '28px', color: 'cyan' }} />
      </div>

      <div className={`admin-sidebar ${open ? 'show' : 'hide'}`}>
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">

          <li onClick={handleLinkClick} className={isActive('/admin/dashboard') ? 'active' : ''}>
            <Link to="/admin/dashboard">
              <MenuBook className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="dropdown-toggle" onClick={toggleTutorial}>
            <span>
              <LibraryBooks className="icon" />
              Tutorial
            </span>
            {tutorialOpen ? <ExpandLess /> : <ExpandMore />}
          </li>

          {tutorialOpen && (
            <ul className="dropdown-menu">
              <li onClick={handleLinkClick} className={isActive('/admin/add-language') ? 'active' : ''}>
                <Link to="/admin/add-language">
                  <Language className="icon" />
                  <span>Add Language</span>
                </Link>
              </li>
              <li onClick={handleLinkClick} className={isActive('/admin/add-chapter') ? 'active' : ''}>
                <Link to="/admin/add-chapter">
                  <LibraryBooks className="icon" />
                  <span>Add Chapter</span>
                </Link>
              </li>
              <li onClick={handleLinkClick} className={isActive('/admin/all-tutorials') ? 'active' : ''}>
                <Link to="/admin/all-tutorials">
                  <AutoStories className="icon" />
                  <span>All Tutorials</span>
                </Link>
              </li>

            </ul>
          )}

          <li onClick={handleLinkClick} className={isActive('/admin/users') ? 'active' : ''}>
            <Link to="/admin/show-user">
              <PeopleAlt className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li onClick={handleLinkClick} className={isActive('/admin/show-order') ? 'active' : ''}>
            <Link to="/admin/show-order">
              <ListAlt className="icon" />
              <span> Orders</span>
            </Link>
          </li>

          <li className="dropdown-toggle" onClick={toggleMembership}>
            <span>
              <CardMembership className="icon" />
              Memberships
            </span>
            {membershipOpen ? <ExpandLess /> : <ExpandMore />}
          </li>

          {membershipOpen && (
            <ul className="dropdown-menu">
              <li onClick={handleLinkClick} className={isActive('/admin/add-membership') ? 'active' : ''}>
                <Link to="/admin/add-membership">
                  <AddCircleOutline className="icon" />
                  <span>Add Membership</span>
                </Link>
              </li>
              <li onClick={handleLinkClick} className={isActive('/admin/show-all-membership') ? 'active' : ''}>
                <Link to="/admin/show-all-membership">
                  <ListAlt className="icon" />
                  <span>All Memberships</span>
                </Link>
              </li>
            </ul>
          )}

          <li className="go-back" onClick={handleLinkClick}>
            <Link to="/">
              <Home className="icon" />
              <span>Back to Website</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;






