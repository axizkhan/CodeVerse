import React, { useState } from 'react';
import axios from 'axios';
import './AllTutorial.css';

export default function EditLanguageForm({ initialData, onCancel, onSuccess }) {
  const [form, setForm] = useState({
    name: initialData.name,
    description: initialData.description,
    trend: initialData.trend,
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [newLogo, setNewLogo] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewLogo(file);
    setSelectedFileName(file ? file.name : '');

    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    } else {
      setPreviewUrl('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('description', form.description);
      formData.append('trend', form.trend);
      formData.append('oldLogo', initialData.logo || '');

      if (newLogo) {
        formData.append('logo', newLogo);
      }

      await axios.put(`${backendUrl}/language/${initialData._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      onSuccess();
    } catch (err) {
      console.error('Error updating language:', err);
    }
  };

  return (
    <div className="edit-form-container">
      <h3>Edit Language</h3>
      <form onSubmit={handleSubmit} className="edit-form" encType="multipart/form-data">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} />

        <label>Trend</label>
        <input type="number" name="trend" value={form.trend} onChange={handleChange} />

        <label>Current Logo</label>
        <div>
          {initialData.logo ? (
            <img
              src={`${backendUrl}${initialData.logo}`}
              alt="Current Logo"
              height="60"
              style={{ marginTop: '5px', objectFit: 'contain' }}
            />
          ) : (
            <span style={{ color: 'gray' }}>No logo uploaded</span>
          )}
        </div>

        <label className="custom-file-upload">
          Upload New Logo
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>

        {/* ✅ Show selected file name */}
        {selectedFileName && (
          <p style={{ color: 'lightgreen', marginTop: '5px' }}>
            Selected: {selectedFileName}
          </p>
        )}

        {/* ✅ Show preview */}
        {previewUrl && (
          <div style={{ marginTop: '10px' }}>
            <strong style={{ color: 'cyan' }}>New Logo Preview:</strong>
            <img
              src={previewUrl}
              alt="New Logo Preview"
              style={{
                marginTop: '5px',
                height: '60px',
                objectFit: 'contain',
                border: '1px solid #333',
                borderRadius: '6px',
              }}
            />
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="btn save-btn">Save</button>
          <button type="button" className="btn cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
