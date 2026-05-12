import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import LanguageContext from "../LanguageContext.jsx";
import "./TutorialDetail.css";

const TutorialDetail = () => {
  const { language, topic = "introduction" } = useParams();
  const { languages, loading } = useContext(LanguageContext);
  const [htmlContent, setHtmlContent] = useState("<p>Loading content...</p>");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Scroll to top when topic changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topic]);

  // Find current language and topic
  const currentLang = languages.find(
    (lang) => lang.name.toLowerCase() === language.toLowerCase(),
  );

  const chapters = currentLang?.topics || [];

  const topicIndex = chapters.findIndex(
    (chap) => chap.name?.toLowerCase().trim() === topic.toLowerCase().trim(),
  );

  const currentChapter = topicIndex !== -1 ? chapters[topicIndex] : null;

  useEffect(() => {
    const loadHtml = async () => {
      if (!currentChapter) return;

      try {
        const content = currentChapter.content;

        if (typeof content === "string" && content.startsWith("/uploads")) {
          const res = await fetch(`${backendUrl}${content}`);
          const html = await res.text();
          setHtmlContent(html);
        } else {
          setHtmlContent(content || "<p>No content available.</p>");
        }
      } catch (err) {
        setHtmlContent("<p>Failed to load content.</p>");
        console.error(err);
      }
    };

    loadHtml();
  }, [currentChapter, backendUrl]);

  // Loading state
  if (loading) return <p className="text-center text-cyan-400">Loading...</p>;

  // Language not found, redirect
  if (!currentLang) return <Navigate to="/tutorials" />;

  // No chapters available
  if (chapters.length === 0) {
    return (
      <div className="tutorial-detail-container">
        <aside className="sidebar">
          <h2>{currentLang.name}</h2>
          <p className="no-chapters">No chapters available yet.</p>
        </aside>
        <main className="content-area">
          <Link
            to="/tutorials"
            className="back-button">
            ← Back to Tutorials
          </Link>
          <h1>{currentLang.name} Tutorial</h1>
          <p>This tutorial is under construction. Please check back later!</p>
        </main>
      </div>
    );
  }

  // Invalid topic — redirect to first valid chapter
  if (topicIndex === -1) {
    return <Navigate to={`/tutorials/${language}/${chapters[0]?.name}`} />;
  }

  return (
    <div className="tutorial-detail-container mt-5">
      <aside className="sidebar mt-5">
        <h2>{currentLang.name}</h2>
        <ul>
          {chapters.map((chap, idx) => (
            <li key={chap._id}>
              <Link
                to={`/tutorials/${language}/${chap.name}`}
                className={idx === topicIndex ? "active" : ""}>
                {chap.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="content-area">
        <Link
          to="/tutorials"
          className="back-button">
          ← Back to Tutorials
        </Link>

        <div className="navigation-buttons">
          {topicIndex > 0 && (
            <Link
              className="nav-button"
              to={`/tutorials/${language}/${chapters[topicIndex - 1].name}`}>
              ← Previous
            </Link>
          )}
          {topicIndex < chapters.length - 1 && (
            <Link
              className="nav-button"
              to={`/tutorials/${language}/${chapters[topicIndex + 1].name}`}>
              Next →
            </Link>
          )}
        </div>

        <div
          className="html-content mt-5"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>
    </div>
  );
};

export default TutorialDetail;
