import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowUser.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ShowUser() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8080/user/all');
        setUsers(res.data);
        setFilteredUsers(res.data);
      } catch (err) {
        toast.error('Failed to fetch users');
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = users.filter(user =>
      user.username.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term) ||
      user._id.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleToggleRole = async (id, currentRole) => {
    const newRole = currentRole === 'user' ? 'admin' : 'user';
    try {
      const res = await axios.put(`http://localhost:8080/user/role/${id}`, { role: newRole });
      const updatedUser = res.data.user;
      const updatedList = users.map(user => (user._id === id ? updatedUser : user));
      setUsers(updatedList);
      toast.success(`Role changed to ${newRole.toUpperCase()}`);
    } catch (err) {
      toast.error('Failed to change role');
    }
  };

  const handleBlacklist = async (id) => {
    try {
      const res = await axios.put(`http://localhost:8080/user/blacklist/${id}`);
      const updatedUser = res.data.user;
      const updatedList = users.map(user => (user._id === id ? updatedUser : user));
      setUsers(updatedList);
      toast.success('User blacklisted successfully');
    } catch (err) {
      toast.error('Failed to blacklist user');
    }
  };

  return (
    <div className="show-users-container">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2>All Users</h2>
      <input
        type="text"
        placeholder="Search by ID, Name, or Role"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="user-search-input"
      />

      <table className="users-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Address</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.address || 'N/A'}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => handleToggleRole(user._id, user.role)}
                  >
                    Change Role
                  </button>
                  <button
                    className="action-btn danger"
                    onClick={() => handleBlacklist(user._id)}
                    disabled={user.status === 'Blacklisted'}
                  >
                    Blacklist
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
