import React, { useEffect, useRef, useState } from 'react';
import './AddChapter.css';
import axios from 'axios';
import AdminSidebar from '../components/AdminSidebar/AdminSidebar';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AddChapter = () => {
  const [languages, setLanguages] = useState([]);
  const [form, setForm] = useState({
    name: '',
    title: '',
    languageId: '',
    content: ''
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    axios.get(`${backendUrl}/language`)
      .then(res => setLanguages(res.data))
      .catch(err => console.error("Failed to load languages", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === 'text/html') {
      const reader = new FileReader();
      reader.onload = (event) => {
        setForm({ ...form, content: event.target.result });
      };
      reader.readAsText(selectedFile);
      setFile(selectedFile);
    } else {
      setMessage("Please upload a valid HTML file.");
      setFile(null);
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.title || !form.languageId || !file) {
    setMessage("All fields are required including the HTML file.");
    return;
  }

  const formData = new FormData();
  formData.append('name', form.name);
  formData.append('title', form.title);
  formData.append('languageId', form.languageId);
  formData.append('content', file);

  setLoading(true);
  try {
    await axios.post(`${backendUrl}/chapter`, formData);
    setMessage("Chapter added successfully!");

    setForm({ name: '', title: '', content: '', languageId: '' });
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    setTimeout(() => setMessage(''), 5000);
  } catch (err) {
    console.error(err);
    setMessage("Failed to add chapter. Try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    
    <div className="add-chapter-container ">
      <form className="add-chapter-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add New Chapter</h2>

        <select
          name="languageId"
          value={form.languageId}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select Language</option>
          {languages.map(lang => (
            <option key={lang._id} value={lang._id}>{lang.name}</option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          placeholder="Chapter Name"
          value={form.name}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="text"
          name="title"
          placeholder="Chapter Title"
          value={form.title}
          onChange={handleChange}
          className="form-input"
        />

        {/* 👇 Custom HTML File Upload */}
        <label className="custom-file-upload">
          <input
            type="file"
            accept=".html"
            ref={fileInputRef}
            onChange={handleFileChange}
            hidden
          />
          {file ? file.name : "Choose HTML File"}
        </label>

        <button
          type="submit"
          className="neon-button submit-btn"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Chapter'}
        </button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default AddChapter;
