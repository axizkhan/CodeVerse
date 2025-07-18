import React, { useState } from 'react';
import axios from 'axios';
import './AllTutorial.css';

export default function EditLanguageForm({ initialData, onCancel, onSuccess }) {
  const [form, setForm] = useState({
    name: initialData.name,
    description: initialData.description,
    trend: initialData.trend,
  });
  
  const [newLogo, setNewLogo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('description', form.description);
      formData.append('trend', form.trend);
      if (newLogo) {
        formData.append('logo', newLogo);
        formData.append('oldLogo', initialData.logo); // for deletion
      }

      await axios.put(`http://localhost:8080/language/${initialData._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      onSuccess();
    } catch (err) {
      console.error(err);
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
          {initialData.logo && (
            <img src={`http://localhost:8080${initialData.logo}`} alt="Current Logo" height="60" />
          )}
        </div>

        <label className="custom-file-upload">
            Upload New Logo
            <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>


        <div className="form-actions">
          <button type="submit" className="btn save-btn">Save</button>
          <button type="button" className="btn cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
