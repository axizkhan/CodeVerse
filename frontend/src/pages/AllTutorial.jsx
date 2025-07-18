// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AllTutorial.css';
// import EditLanguageForm from './EditLanguageForm';

// export default function AllTutorial() {
//   const [languages, setLanguages] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [editingLang, setEditingLang] = useState(null);

//   const fetchLanguages = async () => {
//     try {
//       const res = await axios.get('http://localhost:8080/language/all');
//       setLanguages(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchLanguages();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure to delete this language?')) return;
//     try {
//       await axios.delete(`http://localhost:8080/language/${id}`);
//       fetchLanguages();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const filtered = languages.filter((lang) =>
//     lang.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="tutorial-container">
//       <h2>All Tutorials</h2>

//       {!editingLang && (
//         <>
//           <input
//             type="text"
//             placeholder="Search by language name..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="tutorial-search"
//             style={{borderBlockColor:'cyan'}}
//           />

//           <table className="tutorial-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Logo</th>
//                 <th>Name</th>
//                 <th>Description</th>
//                 <th>Trend</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((lang) => (
//                 <tr key={lang._id}>
//                   <td>{lang._id}</td>
//                   <td>
//                     {lang.logo && (
//                       <img src={`http://localhost:8080${lang.logo}`} alt="logo" className="logo-img" />
//                     )}
//                   </td>
//                   <td>{lang.name}</td>
//                   <td>{lang.description}</td>
//                   <td>{lang.trend}</td>
//                   <td>
//                     <button onClick={() => setEditingLang(lang)} className="btn edit-btn">Update</button>
//                     <button onClick={() => handleDelete(lang._id)} className="btn delete-btn">Delete</button>
//                     <button onClick={() => console.log("Chapters:", lang._id)} className="btn chapters-btn">Chapters</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}

//       {editingLang && (
//         <EditLanguageForm
//           initialData={editingLang}
//           onCancel={() => setEditingLang(null)}
//           onSuccess={() => {
//             setEditingLang(null);
//             fetchLanguages();
//           }}
//         />
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllTutorial.css';
import EditLanguageForm from './EditLanguageForm';
import { useNavigate } from 'react-router-dom';

export default function AllTutorial() {
  const [languages, setLanguages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingLang, setEditingLang] = useState(null);
  const navigate = useNavigate();

  const fetchLanguages = async () => {
    try {
      const res = await axios.get('http://localhost:8080/language/all');
      setLanguages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure to delete this language?')) return;
    try {
      await axios.delete(`http://localhost:8080/language/${id}`);
      fetchLanguages();
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tutorial-container">
      <h2>All Tutorials</h2>

      {!editingLang && (
        <>
          <input
            type="text"
            placeholder="Search by language name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="tutorial-search"
            style={{
              borderBlockColor: 'cyan',
              outline: 'none',
              padding: '8px 12px',
              borderRadius: '6px'
            }}
          />

          <table className="tutorial-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Logo</th>
                <th>Name</th>
                <th>Description</th>
                <th>Trend</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lang) => (
                <tr key={lang._id}>
                  <td>{lang._id}</td>
                  <td>
                    {lang.logo ? (
                      <img
                        src={`http://localhost:8080${lang.logo}`}
                        alt="logo"
                        className="logo-img"
                        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                      />
                    ) : (
                      <span style={{ color: 'gray' }}>No Logo</span>
                    )}
                  </td>
                  <td>{lang.name}</td>
                  <td>{lang.description}</td>
                  <td>{lang.trend}</td>
                  <td>
                    <button
                      onClick={() => setEditingLang(lang)}
                      className="btn edit-btn"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(lang._id)}
                      className="btn delete-btn"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => navigate(`/admin/language/${lang._id}/chapters`)}
                      className="btn chapters-btn"
                    >
                      Chapters
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {editingLang && (
        <EditLanguageForm
          initialData={editingLang}
          onCancel={() => setEditingLang(null)}
          onSuccess={() => {
            setEditingLang(null);
            fetchLanguages();
          }}
        />
      )}
    </div>
  );
}
