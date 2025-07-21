import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllTutorial.css';
import EditLanguageForm from './EditLanguageForm';
import { useNavigate } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default function AllTutorial() {
  const [languages, setLanguages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingLang, setEditingLang] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Fetch all languages
  const fetchLanguages = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${backendUrl}/language/all`);
      setLanguages(res.data);
    } catch (err) {
      console.error('Error fetching languages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  // Delete a language with confirmation
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this language?')) return;
    try {
      await axios.delete(`${backendUrl}/language/${id}`);
      fetchLanguages();
    } catch (err) {
      console.error('Error deleting language:', err);
    }
  };

  // Filtered list based on search
  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tutorial-container">
      <h2>All Tutorials</h2>

      {!editingLang && (
        <>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by language name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="tutorial-search"
            style={{
              borderBlockColor: 'cyan',
              outline: 'none',
              padding: '8px 12px',
              borderRadius: '6px'
            }}
          />

<<<<<<< HEAD
          <table className="tutorial-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Logo</th>
                <th>Name</th>
                <th>Description</th>
                <th>Trend</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lang) => (
                <tr key={lang._id}>
                  <td>{lang._id}</td>
                  <td>
                    {lang.logo ? (
                      <img
                        src={`${backendUrl}${lang.logo}`}
                        alt="logo"
                        className="logo-img"
                        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                      />
                    ) : (
                      <span style={{ color: 'gray' }}>No Logo</span>
                    )}
                  </td>
                  <td>{lang.name}</td>
                  <td>{lang.description}</td>
                  <td>{lang.trend}</td>
                  <td>
                    <button
                      onClick={() => setEditingLang(lang)}
                      className="btn edit-btn"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(lang._id)}
                      className="btn delete-btn"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => navigate(`/admin/language/${lang._id}/chapters`)}
                      className="btn chapters-btn"
                    >
                      Chapters
                    </button>
                  </td>
=======
          {/* Loading State */}
          {loading ? (
            <p style={{ textAlign: 'center', color: 'cyan', marginTop: '1rem' }}>
              Loading tutorials...
            </p>
          ) : filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'gray', marginTop: '1rem' }}>
              No matching tutorials found.
            </p>
          ) : (
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Trend</th>
                  <th>Actions</th>
>>>>>>> 56632f2 (final commit expected)
                </tr>
              </thead>
              <tbody>
                {filtered.map((lang) => (
                  <tr key={lang._id}>
                    <td>{lang._id}</td>
                    <td>
                      {lang.logo ? (
                        <img
                          src={`${backendUrl}${lang.logo}`}
                          alt="logo"
                          className="logo-img"
                          style={{
                            width: '40px',
                            height: '40px',
                            objectFit: 'contain'
                          }}
                        />
                      ) : (
                        <span style={{ color: 'gray' }}>No Logo</span>
                      )}
                    </td>
                    <td>{lang.name}</td>
                    <td>{lang.description}</td>
                    <td>{lang.trend}</td>
                    <td>
                      <button
                        onClick={() => setEditingLang(lang)}
                        className="btn edit-btn"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(lang._id)}
                        className="btn delete-btn"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() =>
                          navigate(`/admin/language/${lang._id}/chapters`)
                        }
                        className="btn chapters-btn"
                      >
                        Chapters
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}

      {/* Edit Mode */}
      {editingLang && (
        <EditLanguageForm
          initialData={editingLang}
          onCancel={() => setEditingLang(null)}
          onSuccess={() => {
            setEditingLang(null);
            fetchLanguages();
          }}
        />
      )}
    </div>
  );
}
