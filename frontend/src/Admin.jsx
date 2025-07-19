import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'; 
import UserContext from './UserContext.jsx';
import './admin.css';

const VALID_ADMIN_PATHS = [
  '/admin',
  '/admin/add-language',
  '/admin/add-chapter',
  '/admin/add-membership',
  '/admin/show-order',
  '/admin/show-user',
  '/admin/show-all-membership',
  '/admin/all-tutorials',
  '/admin/dashboard',
];

const AdminLayout = ({ open, setOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show sidebar only for known admin routes
  const showSidebar = VALID_ADMIN_PATHS.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className={`admin-container neon-blobs`}>
      {showSidebar && <AdminSidebar open={open} setOpen={setOpen} />}
      <main
        className="admin-main"
        style={{
          marginLeft: !isMobile && open && showSidebar ? '250px' : '0px',
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
        <Route path="add-language" element={<PrivateRoute element={<AddLanguage />} />} />
        <Route path="add-chapter" element={<PrivateRoute element={<AddChapter />} />} />
        <Route path="add-membership" element={<PrivateRoute element={<AddMembership />} />} />
        <Route path="show-order" element={<PrivateRoute element={<ShowOrder />} />} />
        <Route path="show-user" element={<PrivateRoute element={<ShowUser />} />} />
        <Route path="show-all-membership" element={<PrivateRoute element={<ShowAllMembership />} />} />
        <Route path="all-tutorials" element={<PrivateRoute element={<AllTutorial />} />} />
        <Route path="language/:id/chapters" element={<PrivateRoute element={<AllChapters />} />} />
        <Route path="dashboard" element={<PrivateRoute element={<Dashboard />} />} />

        {/* 404 fallback — no sidebar here */}
        <Route path="*" element={<h2 className="error-msg">404 - Page Not Found</h2>} />
      </Route>
    </Routes>
  );
};

export default Admin;
