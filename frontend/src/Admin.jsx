import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar/AdminSidebar';
import AddLanguage from './pages/AddLanguage';
import AddChapter from './pages/AddChapter';
import AddMembership from './pages/AddMembership';
import ShowOrder from './pages/ShowOrder.jsx';
import ShowUser from './pages/ShowUser.jsx';
import ShowAllMembership from './pages/ShowAllMembership.jsx';
import AllTutorial from './pages/AllTutorial.jsx';
import AllChapters from './pages/AllChapter.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
// import AllTutorials from './pages/AllTutorials';
// import AllUsers from './pages/AllUsers';
// import Membership from './pages/Membership';
// import Dashboard from './pages/AdminDashboard';

import './admin.css';

const AdminLayout = ({ open, setOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`admin-container neon-blobs`}>
      <AdminSidebar open={open} setOpen={setOpen} />
      <main
        className="admin-main"
        style={{
          marginLeft: !isMobile && open ? '250px' : '0px',
          transition: 'margin 0.3s ease',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

const Admin = () => {
  const [open, setOpen] = useState(window.innerWidth > 768);

  return (
    <Routes>
      <Route element={<AdminLayout open={open} setOpen={setOpen} />}>
        <Route index element={<Navigate to="add-language" replace />} />
        <Route path="add-language" element={<AddLanguage />} />
        <Route path="add-chapter" element={<AddChapter />} />
        <Route path="add-membership" element={<AddMembership />} />
        <Route path="show-order" element={<ShowOrder />} />
        <Route path="show-user" element={<ShowUser />} />
        <Route path="show-all-membership" element={<ShowAllMembership />} />
        <Route path="all-tutorials" element={<AllTutorial />} />
        <Route path="language/:id/chapters" element={<AllChapters />} />
        <Route path="dashboard" element={<Dashboard />} />



        {/* <Route path="all-tutorials" element={<AllTutorials />} />
        <Route path="users" element={<AllUsers />} />
        <Route path="membership" element={<Membership />} />
        <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="*" element={<h2 className="error-msg">404 - Page Not Found</h2>} />
      </Route>
    </Routes>
  );
};

export default Admin;
