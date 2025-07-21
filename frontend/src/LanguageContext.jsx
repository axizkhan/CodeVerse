import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHtmlFromPath = async (path) => {
    try {
      const res = await fetch(`${backendUrl}${path}`);
      return await res.text();
    } catch (err) {
      console.error(`Failed to fetch content from ${path}`);
      return '<p style="color:red;">Failed to load content.</p>';
    }
  };

  const fetchLanguages = async () => {
    try {
      const res = await axios.get(`${backendUrl}/language/all`);
      const rawLanguages = res.data;

      // Resolve chapter HTML content
      const processed = await Promise.all(
        rawLanguages.map(async (lang) => {
          const topicsWithHtml = await Promise.all(
            (lang.topics || []).map(async (chapter) => {
              if (chapter.content?.startsWith('/uploads/')) {
                
                const htmlContent = await fetchHtmlFromPath(chapter.content);
                return { ...chapter, content: htmlContent };
              }
              return chapter;
            })
          );
          return { ...lang, topics: topicsWithHtml };
        })
      );

      setLanguages(processed);
    } catch (error) {
      console.error('Failed to fetch languages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  return (
    <LanguageContext.Provider value={{ languages, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
