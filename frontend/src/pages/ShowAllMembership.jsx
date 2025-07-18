import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MembershipForm from './MembershipForm';
import './ShowAllMembership.css';

export default function ShowAllMembership() {
  const [memberships, setMemberships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    price: '',
    perks: [''],
    description: '',
    termsAndConditions: '',
    cancellationPolicy: ''
  });

  useEffect(() => {
    fetchMemberships();
  }, []);

  const fetchMemberships = async () => {
    try {
      const res = await axios.get('http://localhost:8080/memberships/all');
      setMemberships(res.data.data || []);
    } catch (err) {
      console.error("Error fetching memberships:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this membership?")) return;
    try {
      await axios.delete(`http://localhost:8080/memberships/delete/${id}`);
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
      await axios.put(`http://localhost:8080/memberships/update/${editing}`, editForm);
      setEditing(null);
      fetchMemberships();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredMemberships = memberships.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.price.toString().includes(searchTerm)
  );

  return (
    <div className="membership-container">
      <h2>All Memberships</h2>

      {!editing && (
        <>
          <input
            type="text"
            placeholder="Search by ID, name, or price"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="membership-search"
          />

          <table className="membership-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price (₹)</th>
                <th>Perks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMemberships.map((m) => (
                <tr key={m._id}>
                  <td>{m._id}</td>
                  <td>{m.name}</td>
                  <td>₹{m.price}</td>
                  <td>
                    <ul>
                      {m.perks.map((perk, i) => (
                        <li key={i}>{perk}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button className="action-btn" onClick={() => handleEditClick(m)}>
                      Update
                    </button>
                    <button className="action-btn danger" onClick={() => handleDelete(m._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {editing && (
        <MembershipForm
          formData={editForm}
          setFormData={setEditForm}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditing(null)}
          isEditing
        />
      )}
    </div>
  );
}
