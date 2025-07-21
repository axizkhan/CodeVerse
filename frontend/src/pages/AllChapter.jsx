import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllChapter.css';
import { useParams } from 'react-router-dom';

const AllChapters = () => {
  const { id } = useParams(); // language ID from URL
  const [languageName, setLanguageName] = useState('');
  const [chapters, setChapters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingChapter, setEditingChapter] = useState(null);
  const [updatedData, setUpdatedData] = useState({ name: '', title: '', content: '' });
  const [newFile, setNewFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Fetch chapters and language name
  useEffect(() => {
    const fetchChapters = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${backendUrl}/language/${id}/chapters`);
        setChapters(res.data);

        const langRes = await axios.get(`${backendUrl}/language`);
        const foundLang = langRes.data.find((lang) => lang._id === id);
        setLanguageName(foundLang?.name || 'Unknown Language');
      } catch (err) {
        console.error('Error fetching chapters:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, [id]);

  // Edit handler
  const handleEdit = (chapter) => {
    setEditingChapter(chapter._id);
    setUpdatedData({
      name: chapter.name,
      title: chapter.title,
      content: chapter.content,
    });
    setNewFile(null);
  };

  // Save updated chapter
  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append('name', updatedData.name);
      formData.append('title', updatedData.title);
      if (newFile) formData.append('file', newFile);

      await axios.put(`${backendUrl}/chapter/${editingChapter}`, formData);
      setEditingChapter(null);
      window.location.reload(); // refresh to show update
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  // Delete chapter
  const handleDelete = async (chapterId) => {
    if (!window.confirm('Are you sure you want to delete this chapter?')) return;
    try {
      await axios.delete(`${backendUrl}/chapter/${chapterId}`);
      setChapters((prev) => prev.filter((ch) => ch._id !== chapterId));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  // Download HTML content
  const downloadHTML = (htmlContent, filename) => {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'chapter.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredChapters = chapters.filter(
    (chap) =>
      chap.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chap._id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-chapters-container">
      {!editingChapter && (
        <h2 className="page-heading">{languageName} - All Chapters</h2>
      )}

      {/* Edit Form */}
      {editingChapter ? (
        <div className="edit-form-centered">
          <div className="edit-form-box">
            <h3>Edit Chapter</h3>

            <label>Chapter Name:</label>
            <input
              type="text"
              value={updatedData.name}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, name: e.target.value })
              }
            />

            <label>Chapter Title:</label>
            <input
              type="text"
              value={updatedData.title}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, title: e.target.value })
              }
            />

            <label>Download Old HTML:</label>
            <button
              className="download-btn"
              onClick={() =>
                downloadHTML(updatedData.content, `${updatedData.name}.html`)
              }
              style={{ marginBottom: '10px' }}
            >
              Download Old
            </button>

            <label>Upload New HTML File (optional):</label>
            <input
              type="file"
              accept=".html"
              onChange={(e) => setNewFile(e.target.files[0])}
            />

            <div style={{ marginTop: '20px' }}>
              <button
                className="action-btn"
                onClick={handleUpdate}
                style={{ marginRight: '10px' }}
              >
                Save
              </button>
              <button
                className="action-btn danger"
                onClick={() => setEditingChapter(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by chapter name or ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="chapter-search"
          />

          {/* Loading */}
          {loading ? (
            <p style={{ textAlign: 'center', color: 'cyan', marginTop: '1rem' }}>
              Loading chapters...
            </p>
          ) : filteredChapters.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'gray', marginTop: '1rem' }}>
              No matching chapters found.
            </p>
          ) : (
            <table className="chapter-table">
              <thead>
                <tr>
                  <th>Chapter ID</th>
                  <th>Name</th>
                  <th>Title</th>
                  <th>HTML File</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredChapters.map((chap) => (
                  <tr key={chap._id}>
                    <td>{chap._id}</td>
                    <td>{chap.name}</td>
                    <td>{chap.title}</td>
                    <td>
                      <button
                        className="download-btn"
                        onClick={() =>
                          downloadHTML(chap.content, `${chap.name}.html`)
                        }
                      >
                        Download
                      </button>
                    </td>
                    <td>
                      <button
                        className="action-btn"
                        onClick={() => handleEdit(chap)}
                        style={{ marginRight: '10px' }}
                      >
                        Edit
                      </button>
                      <button
                        className="action-btn danger"
                        onClick={() => handleDelete(chap._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default AllChapters;
