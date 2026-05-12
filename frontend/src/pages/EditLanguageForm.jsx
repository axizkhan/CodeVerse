import React, { useState } from "react";
import axios from "axios";
import "./AllTutorial.css";

export default function EditLanguageForm({ initialData, onCancel, onSuccess }) {
  const [form, setForm] = useState({
    name: initialData.name,
    description: initialData.description,
    trend: initialData.trend,
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [newLogo, setNewLogo] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewLogo(file);
    setSelectedFileName(file ? file.name : "");

    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    } else {
      setPreviewUrl("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("trend", form.trend);
      formData.append("oldLogo", initialData.logo || "");

      if (newLogo) {
        formData.append("logo", newLogo);
      }

      await axios.put(`${backendUrl}/language/${initialData._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onSuccess();
    } catch (err) {
      console.error("Error updating language:", err);
    }
  };

  return (
    <div className="glass card animate-fadeIn mx-auto max-w-2xl p-8 md:p-10">
      <div className="mb-8 border-b border-border-light pb-4">
        <h3 className="text-2xl font-bold tracking-tight text-text-primary">
          Edit Language
        </h3>
        <p className="text-sm text-text-secondary mt-1">
          Update the metadata, branding, and trending status for this
          technology.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        encType="multipart/form-data">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Language Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="input"
              placeholder="e.g. JavaScript"
            />
          </div>

          {/* Trend */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Trend Score
            </label>
            <input
              type="number"
              name="trend"
              value={form.trend}
              onChange={handleChange}
              className="input font-bold text-primary"
              placeholder="0"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="input min-h-[120px] py-3"
            placeholder="Provide a brief overview of the language..."
          />
        </div>

        {/* Branding / Logo Section */}
        <div className="rounded-card-md border border-border bg-background/50 p-6">
          <label className="mb-4 block text-xs font-bold uppercase tracking-wider text-text-muted">
            Branding & Assets
          </label>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            {/* Current Logo */}
            <div className="flex-1">
              <p className="mb-2 text-[11px] font-medium text-text-secondary">
                Current Logo
              </p>
              <div className="flex h-24 w-full items-center justify-center rounded-card-sm border border-border bg-surface-elevated p-4">
                {initialData.logo ? (
                  <img
                    src={`${backendUrl}${initialData.logo}`}
                    alt="Current Logo"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-xs text-text-muted">
                    No logo uploaded
                  </span>
                )}
              </div>
            </div>

            {/* New Logo Upload */}
            <div className="flex-1">
              <p className="mb-2 text-[11px] font-medium text-text-secondary">
                Upload New
              </p>
              <label className="flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-card-sm border-2 border-dashed border-border bg-surface transition-all hover:border-primary/50 hover:bg-surface-elevated">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="mb-1 h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-[10px] font-bold text-text-muted uppercase">
                    Select Image
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {selectedFileName && (
                <p className="mt-2 text-center text-[11px] font-bold text-success truncate">
                  Selected: {selectedFileName}
                </p>
              )}
            </div>
          </div>

          {/* Preview Area */}
          {previewUrl && (
            <div className="mt-6 animate-fadeIn rounded-card-sm border border-success/30 bg-success/5 p-4 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-success">
                New Logo Preview
              </p>
              <img
                src={previewUrl}
                alt="New Logo Preview"
                className="mx-auto h-20 object-contain drop-shadow-md"
              />
            </div>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end gap-4 border-t border-border-light pt-8">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 text-sm font-bold text-text-muted transition-colors hover:text-danger">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-card-sm bg-primary px-10 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
