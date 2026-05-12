import React, { useEffect, useState } from "react";
import axios from "axios";
import MembershipForm from "./MembershipForm";
import "./ShowAllMembership.css";

export default function ShowAllMembership() {
  const [memberships, setMemberships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editing, setEditing] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    perks: [""],
    description: "",
    termsAndConditions: "",
    cancellationPolicy: "",
  });

  useEffect(() => {
    fetchMemberships();
  }, []);

  const fetchMemberships = async () => {
    try {
      const res = await axios.get(`${backendUrl}/memberships/all`);
      setMemberships(res.data.data || []);
    } catch (err) {
      console.error("Error fetching memberships:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this membership?"))
      return;
    try {
      await axios.delete(`${backendUrl}/memberships/delete/${id}`);
      fetchMemberships();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (membership) => {
    setEditing(membership._id);
    setEditForm({ ...membership });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${backendUrl}/memberships/update/${editing}`, editForm);
      setEditing(null);
      fetchMemberships();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredMemberships = memberships.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.price.toString().includes(searchTerm),
  );

  return (
    <div className="animate-fadeIn min-h-screen bg-background p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              Membership Plans
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Create and manage subscription tiers for CodeVerse
            </p>
          </div>

          {!editing && (
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pr-12"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
                <svg
                  width="18"
                  height="18"
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
          )}
        </div>

        {!editing ? (
          <div className="card overflow-hidden border-border bg-surface shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-surface-elevated/50 text-xs font-bold uppercase tracking-wider text-text-secondary">
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Plan Name</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Perks & Features</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light text-sm text-text-secondary">
                  {filteredMemberships.map((m) => (
                    <tr
                      key={m._id}
                      className="transition-colors hover:bg-surface-elevated/40">
                      <td className="px-6 py-4 font-mono text-[10px] text-text-muted">
                        {m._id.slice(-6).toUpperCase()}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-base font-bold text-text-primary">
                          {m.name}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-black text-primary">
                          ₹{m.price}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="space-y-1">
                          {m.perks.map((perk, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              {perk}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            className="rounded-card-sm border border-border bg-surface-elevated px-4 py-2 text-xs font-bold text-text-primary transition-all hover:border-primary hover:text-primary active:scale-95"
                            onClick={() => handleEditClick(m)}>
                            Update
                          </button>
                          <button
                            className="rounded-card-sm bg-danger/10 px-4 py-2 text-xs font-bold text-danger transition-all hover:bg-danger hover:text-white active:scale-95"
                            onClick={() => handleDelete(m._id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <MembershipForm
              formData={editForm}
              setFormData={setEditForm}
              onSubmit={handleEditSubmit}
              onCancel={() => setEditing(null)}
              isEditing
            />
          </div>
        )}
      </div>
    </div>
  );
}
