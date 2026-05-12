import React, { useRef, useState } from "react";
import "./AddLanguage.css";
import axios from "axios";

const AddLanguage = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    trend: 0, // Default trend value
  });
  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState("");
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
      setMessage("All fields including logo are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("logo", logo);
    formData.append("trend", form.trend); // Append trend value

    try {
      setLoading(true);
      await axios.post(`${backendUrl}/language`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Language added successfully!");

      // Reset fields
      setForm({ name: "", description: "", trend: 0 });
      setLogo(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Remove message after 5 seconds
      setTimeout(() => setMessage(""), 5000);
    } catch (error) {
      setMessage("Failed to add language. Try again.");
      console.error(error);
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
              Add New <span className="text-primary">Language</span>
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Register a new technology stack and its initial trending metrics.
            </p>
          </div>

          <div className="space-y-6">
            {/* Name & Trend Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Language Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. TypeScript"
                  value={form.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Trend Value (0-100)
                </label>
                <input
                  type="number"
                  name="trend"
                  placeholder="75"
                  value={form.trend}
                  onChange={handleChange}
                  className="input font-bold text-primary"
                  min="0"
                  max="100"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Description
              </label>
              <textarea
                name="description"
                placeholder="What is the focus of this language curriculum?"
                value={form.description}
                onChange={handleChange}
                className="input min-h-[120px] py-3 text-sm leading-relaxed"
                required
              />
            </div>

            {/* Logo Upload Section */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Brand Identity (Logo)
              </label>
              <div
                onClick={() => fileInputRef.current.click()}
                className="group relative flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-card-md border-2 border-dashed border-border bg-surface-elevated/30 transition-all hover:border-primary/50 hover:bg-primary/5">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  hidden
                />

                <div className="flex flex-col items-center justify-center transition-transform group-hover:scale-105">
                  <svg
                    className="mb-2 h-8 w-8 text-primary/60 group-hover:text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs font-bold text-text-primary">
                    {logo ? logo.name : "Click to upload SVG or PNG"}
                  </p>
                  {logo && (
                    <p className="mt-1 text-[10px] text-success font-bold uppercase tracking-tight">
                      File Ready
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-card-sm bg-primary py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-hover hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}>
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Adding...</span>
                </div>
              ) : (
                "Add Language"
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

export default AddLanguage;
