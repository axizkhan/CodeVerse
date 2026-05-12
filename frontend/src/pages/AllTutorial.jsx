import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllTutorial.css";
import EditLanguageForm from "./EditLanguageForm";
import { useNavigate } from "react-router-dom";

export default function AllTutorial() {
  const [languages, setLanguages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingLang, setEditingLang] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Fetch all languages
  const fetchLanguages = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${backendUrl}/language/all`);
      console.log(`${backendUrl}/language/all`);
      setLanguages(res.data);
    } catch (err) {
      console.error("Error fetching languages:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  // Delete a language with confirmation
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this language?"))
      return;
    try {
      await axios.delete(`${backendUrl}/language/${id}`);
      fetchLanguages();
    } catch (err) {
      console.error("Error deleting language:", err);
    }
  };

  // Filtered list based on search
  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="animate-fadeIn min-h-screen bg-background p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              Tutorial Curriculum
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Manage languages, course metadata, and lesson structures.
            </p>
          </div>

          {!editingLang && (
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search languages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pr-12"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                  />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {!editingLang ? (
          <>
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <p className="mt-4 font-bold text-primary">
                  Loading tutorials...
                </p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="card flex flex-col items-center py-20 text-center">
                <p className="text-text-muted">No matching tutorials found.</p>
              </div>
            ) : (
              <div className="card overflow-hidden border-border bg-surface shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-surface-elevated/50 text-xs font-bold uppercase tracking-wider text-text-secondary">
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">Branding</th>
                        <th className="px-6 py-4">Language</th>
                        <th className="px-6 py-4">Description</th>
                        <th className="px-6 py-4 text-center">Trend</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light text-sm text-text-secondary">
                      {filtered.map((lang) => (
                        <tr
                          key={lang._id}
                          className="transition-colors hover:bg-surface-elevated/40">
                          <td className="px-6 py-4 font-mono text-[10px] text-text-muted">
                            {lang._id.slice(-6).toUpperCase()}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-card-sm border border-border bg-white p-1 shadow-sm">
                              {lang.logo ? (
                                <img
                                  src={`${backendUrl}${lang.logo}`}
                                  alt={lang.name}
                                  className="h-full w-full object-contain"
                                />
                              ) : (
                                <div className="text-[8px] uppercase text-text-muted">
                                  N/A
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-base font-bold text-text-primary">
                              {lang.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 max-w-xs">
                            <p className="truncate text-text-muted">
                              {lang.description}
                            </p>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary border border-primary/20">
                              {lang.trend}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => setEditingLang(lang)}
                                className="rounded-card-sm border border-border bg-surface-elevated px-3 py-1.5 text-xs font-bold text-text-primary transition-all hover:border-primary hover:text-primary active:scale-95">
                                Update
                              </button>
                              <button
                                onClick={() =>
                                  navigate(
                                    `/admin/language/${lang._id}/chapters`,
                                  )
                                }
                                className="rounded-card-sm bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent transition-all hover:bg-accent hover:text-white active:scale-95">
                                Chapters
                              </button>
                              <button
                                onClick={() => handleDelete(lang._id)}
                                className="rounded-card-sm bg-danger/10 px-3 py-1.5 text-xs font-bold text-danger transition-all hover:bg-danger hover:text-white active:scale-95">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="animate-fadeIn">
            <EditLanguageForm
              initialData={editingLang}
              onCancel={() => setEditingLang(null)}
              onSuccess={() => {
                setEditingLang(null);
                fetchLanguages();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
