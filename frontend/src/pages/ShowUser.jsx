import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShowUser.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShowUser() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${backendUrl}/user/all`);
        setUsers(res.data);
        setFilteredUsers(res.data);
      } catch (err) {
        toast.error("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.username.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term) ||
        user._id.toLowerCase().includes(term),
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleToggleRole = async (id, currentRole) => {
    const newRole = currentRole === "user" ? "admin" : "user";
    try {
      const res = await axios.put(`${backendUrl}/user/role/${id}`, {
        role: newRole,
      });
      const updatedUser = res.data.user;
      const updatedList = users.map((user) =>
        user._id === id ? updatedUser : user,
      );
      setUsers(updatedList);
      toast.success(`Role changed to ${newRole.toUpperCase()}`);
    } catch (err) {
      toast.error("Failed to change role");
    }
  };

  const handleBlacklist = async (id) => {
    try {
      const res = await axios.put(`${backendUrl}/user/blacklist/${id}`);
      const updatedUser = res.data.user;
      const updatedList = users.map((user) =>
        user._id === id ? updatedUser : user,
      );
      setUsers(updatedList);
      toast.success("User blacklisted successfully");
    } catch (err) {
      toast.error("Failed to blacklist user");
    }
  };

  return (
    <div className="animate-fadeIn min-h-screen bg-background p-6 md:p-10">
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary">
            All Users
          </h2>

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by ID, Name, or Role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pr-12 focus:ring-2"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Table Container - Using your .card and .glass tokens */}
        <div className="card overflow-hidden border-border bg-surface shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-surface-elevated/50 text-xs font-bold uppercase tracking-wider text-text-secondary">
                  <th className="px-6 py-4">User ID</th>
                  <th className="px-6 py-4">Username</th>
                  <th className="px-6 py-4">Address</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light text-sm text-text-secondary">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr
                      key={user._id}
                      className="transition-colors hover:bg-surface-elevated/40">
                      <td className="px-6 py-4 font-mono text-[11px] text-text-muted">
                        {user._id}
                      </td>
                      <td className="px-6 py-4 font-semibold text-text-primary">
                        {user.username}
                      </td>
                      <td className="px-6 py-4">{user.address || "N/A"}</td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              user.status === "Blacklisted"
                                ? "bg-danger"
                                : "bg-success"
                            }`}
                          />
                          <span
                            className={
                              user.status === "Blacklisted"
                                ? "text-danger font-medium"
                                : ""
                            }>
                            {user.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            className="rounded-card-sm border border-border bg-surface-elevated px-3 py-1.5 text-xs font-bold text-text-primary transition-all hover:border-primary hover:text-primary active:scale-95"
                            onClick={() =>
                              handleToggleRole(user._id, user.role)
                            }>
                            Change Role
                          </button>
                          <button
                            className="rounded-card-sm bg-danger/10 px-3 py-1.5 text-xs font-bold text-danger transition-all hover:bg-danger hover:text-white disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                            onClick={() => handleBlacklist(user._id)}
                            disabled={user.status === "Blacklisted"}>
                            Blacklist
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-12 text-center text-text-muted">
                      <div className="flex flex-col items-center gap-2">
                        <svg
                          width="40"
                          height="40"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          viewBox="0 0 24 24"
                          className="opacity-20">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle
                            cx="9"
                            cy="7"
                            r="4"
                          />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        No users found matching your search.
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
