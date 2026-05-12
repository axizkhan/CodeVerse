import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllChapter.css";
import { useParams } from "react-router-dom";

const AllChapters = () => {
  const { id } = useParams(); // language ID from URL
  const [languageName, setLanguageName] = useState("");
  const [chapters, setChapters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingChapter, setEditingChapter] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    title: "",
    content: "",
  });
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
        setLanguageName(foundLang?.name || "Unknown Language");
      } catch (err) {
        console.error("Error fetching chapters:", err);
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
      formData.append("name", updatedData.name);
      formData.append("title", updatedData.title);
      if (newFile) formData.append("file", newFile);

      await axios.put(`${backendUrl}/chapter/${editingChapter}`, formData);
      setEditingChapter(null);
      window.location.reload(); // refresh to show update
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // Delete chapter
  const handleDelete = async (chapterId) => {
    if (!window.confirm("Are you sure you want to delete this chapter?"))
      return;
    try {
      await axios.delete(`${backendUrl}/chapter/${chapterId}`);
      setChapters((prev) => prev.filter((ch) => ch._id !== chapterId));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Download HTML content
  const downloadHTML = (htmlContent, filename) => {
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "chapter.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredChapters = chapters.filter(
    (chap) =>
      chap.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chap._id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="animate-fadeIn min-h-screen bg-background p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        {!editingChapter && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              {languageName} <span className="text-primary">— Chapters</span>
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Manage lessons, documentation content, and HTML assets.
            </p>
          </div>
        )}

        {editingChapter ? (
          <div className="flex justify-center py-10">
            <div className="glass card w-full max-w-xl p-8 shadow-2xl border-primary/20">
              <div className="mb-6 border-b border-border-light pb-4">
                <h3 className="text-xl font-bold text-text-primary">
                  Edit Chapter
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Chapter Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    value={updatedData.name}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, name: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Chapter Title
                  </label>
                  <input
                    type="text"
                    className="input"
                    value={updatedData.title}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, title: e.target.value })
                    }
                  />
                </div>

                <div className="rounded-card-md bg-surface-elevated p-5 border border-border">
                  <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-text-primary">
                    Content Asset Management
                  </label>

                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs text-text-secondary">
                      Current Version:
                    </span>
                    <button
                      className="flex items-center gap-2 rounded-card-sm bg-accent/10 px-4 py-2 text-xs font-bold text-accent transition-all hover:bg-accent hover:text-white"
                      onClick={() =>
                        downloadHTML(
                          updatedData.content,
                          `${updatedData.name}.html`,
                        )
                      }>
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      Download Source
                    </button>
                  </div>

                  <div className="relative">
                    <p className="mb-2 text-[11px] font-medium text-text-muted">
                      Upload Updated HTML
                    </p>
                    <input
                      type="file"
                      accept=".html"
                      onChange={(e) => setNewFile(e.target.files[0])}
                      className="w-full text-xs text-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-card-sm file:border-0 file:text-xs file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-border-light">
                  <button
                    className="px-6 py-2 text-sm font-bold text-text-muted transition-colors hover:text-danger"
                    onClick={() => setEditingChapter(null)}>
                    Cancel
                  </button>
                  <button
                    className="rounded-card-sm bg-primary px-8 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0"
                    onClick={handleUpdate}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Top Controls */}
            <div className="mb-6 flex items-center justify-between">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search chapters..."
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
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <p className="mt-4 font-bold text-primary">
                  Loading chapters...
                </p>
              </div>
            ) : filteredChapters.length === 0 ? (
              <div className="card flex flex-col items-center py-20 text-center">
                <p className="text-text-muted">
                  No chapters found for this criteria.
                </p>
              </div>
            ) : (
              <div className="card overflow-hidden border-border bg-surface shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-surface-elevated/50 text-xs font-bold uppercase tracking-wider text-text-secondary">
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Display Title</th>
                        <th className="px-6 py-4">Content</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light text-sm text-text-secondary">
                      {filteredChapters.map((chap) => (
                        <tr
                          key={chap._id}
                          className="transition-colors hover:bg-surface-elevated/40">
                          <td className="px-6 py-4 font-mono text-[10px] text-text-muted">
                            {chap._id.slice(-6).toUpperCase()}
                          </td>
                          <td className="px-6 py-4 font-bold text-text-primary">
                            {chap.name}
                          </td>
                          <td className="px-6 py-4 text-text-secondary">
                            {chap.title}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              className="flex items-center gap-2 text-xs font-bold text-accent hover:underline"
                              onClick={() =>
                                downloadHTML(chap.content, `${chap.name}.html`)
                              }>
                              <svg
                                width="14"
                                height="14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                              </svg>
                              Download HTML
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                className="rounded-card-sm border border-border bg-surface-elevated px-4 py-1.5 text-xs font-bold text-text-primary transition-all hover:border-primary hover:text-primary active:scale-95"
                                onClick={() => handleEdit(chap)}>
                                Edit
                              </button>
                              <button
                                className="rounded-card-sm bg-danger/10 px-4 py-1.5 text-xs font-bold text-danger transition-all hover:bg-danger hover:text-white active:scale-95"
                                onClick={() => handleDelete(chap._id)}>
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
        )}
      </div>
    </div>
  );
};

export default AllChapters;
