import React, { useEffect, useRef, useState } from "react";
import "./AddChapter.css";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";

const AddChapter = () => {
  const [languages, setLanguages] = useState([]);
  const [form, setForm] = useState({
    name: "",
    title: "",
    languageId: "",
    content: "",
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${backendUrl}/language`)
      .then((res) => setLanguages(res.data))
      .catch((err) => console.error("Failed to load languages", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === "text/html") {
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
    formData.append("name", form.name);
    formData.append("title", form.title);
    formData.append("languageId", form.languageId);
    formData.append("content", file);

    setLoading(true);
    try {
      await axios.post(`${backendUrl}/chapter`, formData);
      setMessage("Chapter added successfully!");

      setForm({ name: "", title: "", content: "", languageId: "" });
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setTimeout(() => setMessage(""), 5000);
    } catch (err) {
      console.error(err);
      setMessage("Failed to add chapter. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fadeIn min-h-screen bg-background p-6 md:p-10 flex items-center justify-center">
      <div className="glass card w-full max-w-2xl p-8 md:p-12 shadow-2xl border-border">
        <form
          className="space-y-8"
          onSubmit={handleSubmit}>
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight text-text-primary uppercase">
              New <span className="text-secondary">Chapter</span>
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Upload HTML content and link it to a language curriculum.
            </p>
          </div>

          <div className="space-y-6">
            {/* Language Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-secondary">
                Target Language
              </label>
              <div className="relative">
                <select
                  name="languageId"
                  value={form.languageId}
                  onChange={handleChange}
                  className="input appearance-none cursor-pointer"
                  required>
                  <option
                    value=""
                    className="bg-surface">
                    Select Language
                  </option>
                  {languages.map((lang) => (
                    <option
                      key={lang._id}
                      value={lang._id}
                      className="bg-surface">
                      {lang.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Name & Title Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Internal Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. intro-to-hooks"
                  value={form.name}
                  onChange={handleChange}
                  className="input font-mono text-xs"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Display Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Introduction to Hooks"
                  value={form.title}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
            </div>

            {/* HTML Asset Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Chapter Content (HTML)
              </label>
              <div
                onClick={() => fileInputRef.current.click()}
                className="group relative flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-card-md border-2 border-dashed border-border bg-surface-elevated/30 transition-all hover:border-secondary/50 hover:bg-secondary/5">
                <input
                  type="file"
                  accept=".html"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  hidden
                />

                <div className="flex flex-col items-center justify-center text-center p-4">
                  <div className="mb-2 rounded-full bg-secondary/10 p-2 text-secondary group-hover:scale-110 transition-transform">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line
                        x1="16"
                        y1="13"
                        x2="8"
                        y2="13"
                      />
                      <line
                        x1="16"
                        y1="17"
                        x2="8"
                        y2="17"
                      />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-text-primary">
                    {file ? file.name : "Click to select lesson.html"}
                  </p>
                  <p className="mt-1 text-[10px] text-text-muted uppercase tracking-tighter">
                    Only .html files are supported
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-card-sm bg-secondary py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-secondary/20 transition-all hover:bg-secondary/90 hover:-translate-y-1 active:translate-y-0 disabled:opacity-50"
              disabled={loading}>
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Publishing...</span>
                </div>
              ) : (
                "Add Chapter"
              )}
            </button>

            {message && (
              <div
                className={`mt-6 rounded-card-sm border p-4 text-center text-xs font-bold uppercase tracking-wider ${message.includes("success") ? "bg-success/10 border-success/30 text-success" : "bg-danger/10 border-danger/30 text-danger"}`}>
                {message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChapter;
