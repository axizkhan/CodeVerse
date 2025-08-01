import React, { useRef, useState } from 'react';
import './AddLanguage.css';
import axios from 'axios';

const AddLanguage = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    trend: 0, // Default trend value
  });
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !logo) {
      setMessage('All fields including logo are required.');
      return;
    }

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('logo', logo);
    formData.append('trend', form.trend); // Append trend value

    try {
      setLoading(true);
      await axios.post(`${backendUrl}/language`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Language added successfully!');

      // Reset fields
      setForm({ name: '', description: '' , trend: 0 });
      setLogo(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Remove message after 5 seconds
      setTimeout(() => setMessage(''), 5000);

    } catch (error) {
      setMessage('Failed to add language. Try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-language-container ">
      <form className="add-language-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add New Language</h2>

        <input
          type="text"
          name="name"
          placeholder="Language Name"
          value={form.name}
          onChange={handleChange}
          className="form-input"
        />

        <textarea
          name="description"
          placeholder="Language Description"
          value={form.description}
          onChange={handleChange}
          className="form-textarea"
        />
        <input
          type="number"
          name="trend"
          placeholder="Trend Value (0-100)"
          value={form.trend}
          onChange={handleChange}
          className="form-input"
          min="0"
          max="100"
        />
        <label className="custom-file-upload">
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                hidden
            />
            {logo ? logo.name : "Choose Logo"}
        </label>


        <button
          type="submit"
          className="neon-button submit-btn"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Language'}
        </button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default AddLanguage;
