import React, { useEffect, useState } from 'react';
import './GetStarted.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import membership from '../../../backend/models/Membership';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default function GetStarted() {
  const navigate = useNavigate();

  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Subscription Inquiry',
    message: ''
  });

  const [showDialog, setShowDialog] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Load membership plans from backend
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get(`${backendUrl}/memberships/all`);
        setPlans(res.data.data || []);
        console.log("Plans loaded:", res.data.data);
      } catch (err) {
        console.error("Error fetching plans:", err);
      } finally {
        setLoadingPlans(false);
      }
    };

    fetchPlans();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    const { name, email, message } = form;

    if (!name || !email || !message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${backendUrl}/api/contact`, form);
      setShowDialog(true);
      setForm({ name: '', email: '', subject: 'Subscription Inquiry', message: '' });
      setErrorMsg('');
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="get-started-container">
      <div className="neon-blobs" />

      <section className="gs-hero">
        <h2 className="animate-fade-in">Subscription</h2>
        <p className="animate-fade-in-slow">
          Join CodeVerse and choose a subscription that suits your needs.
        </p>
      </section>

      <section className="plans-grid">
        {loadingPlans ? (
          <p style={{ textAlign: 'center', color: 'cyan' }}>Loading plans...</p>
        ) : (
          plans.map((plan, i) => {
            const colorClass =
              i % 3 === 0 ? 'border-cyan' : i % 3 === 1 ? 'border-purple' : 'border-pink';

            return (
              <div
                key={i}
                className={`plan-card ${colorClass} animate-fade-in-slow2`}
                onClick={() =>
                  navigate(`/checkout/${plan.name.toLowerCase().replace(/\s+/g, '-')}`, {
                    state: {
                      membershipId: plan._id,
                      planName: plan.name,
                      price: plan.price,
                      perks: plan.perks,
                      terms: plan.termsAndConditions,
                      cancellation: plan.cancellationPolicy
                    }
                  })

                }
                style={{ cursor: 'pointer' }}
              >
                <h3>{plan.name}</h3>
                <p className="price">₹{plan.price}/month</p>
                <p className="desc">{plan.description}</p>
              </div>
            );
          })
        )}
      </section>

      <section className="gs-footer">
        <p className="footer-title">Have Questions? Reach out to us</p>
        <div className="footer-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="Your question"
            value={form.message}
            onChange={handleChange}
          />
          <div className="email-send-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />
            <button
              className="neon-button small"
              onClick={handleSend}
              disabled={loading}
              style={loading ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </div>
      </section>

      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <p>Your request has been sent successfully.</p>
            <button className="neon-button small" onClick={() => setShowDialog(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



// import React, { useState } from 'react';
// import './GetStarted.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const plans = [
//   { title: "Free", price: "$0/month", desc: "Access all basic tutorials", color: "cyan" },
//   { title: "Pro", price: "$15/month", desc: "Includes detailed notes", color: "purple" },
//   { title: "Plus", price: "$25/month", desc: "Includes video lectures", color: "pink" },
//   { title: "AI Assist", price: "$40/month", desc: "Includes AI coding help", color: "cyan" },
//   { title: "Mentor", price: "$80/month", desc: "Personal mentor with live sessions", color: "purple" },
//   { title: "Project", price: "$120/month", desc: "Build 5 unique projects with a mentor", color: "pink" },
// ];

// export default function GetStarted() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     subject: 'Subscription Inquiry',
//     message: ''
//   });

//   const [showDialog, setShowDialog] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSend = async () => {
//     const { name, email, subject, message } = form;

//     if (!name || !email || !message) {
//       setErrorMsg("Please fill in all required fields.");
//       return;
//     }

//     setLoading(true);

//     try {
//       await axios.post('http://localhost:8080/api/contact', form);
//       setShowDialog(true);
//       setForm({ name: '', email: '', subject: 'Subscription Inquiry', message: '' });
//       setErrorMsg('');
//     } catch (err) {
//       console.error(err);
//       setErrorMsg("Failed to send. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="get-started-container">
//       <div className="neon-blobs"></div>

//       <section className="gs-hero">
//         <h2 className="animate-fade-in">Subscription</h2>
//         <p className="animate-fade-in-slow">
//           Join CodeVerse and choose a subscription that suits your needs.
//         </p>
//       </section>

//       <section className="plans-grid">
//         {plans.map((plan, i) => (
//           <div
//             key={i}
//             className={`plan-card border-${plan.color} animate-fade-in-slow2`}
//             onClick={() => navigate(`/checkout/${plan.title.toLowerCase()}`)}
//             style={{ cursor: 'pointer' }}
//           >
//             <h3>{plan.title}</h3>
//             <p className="price">{plan.price}</p>
//             <p className="desc">{plan.desc}</p>
//           </div>
//         ))}
//       </section>

//       <section className="gs-footer">
//         <p className="footer-title">Have Questions? Reach out to us</p>
//         <div className="footer-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your name"
//             value={form.name}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="message"
//             placeholder="Your question"
//             value={form.message}
//             onChange={handleChange}
//           />
//           <div className="email-send-wrapper">
//             <input
//               type="email"
//               name="email"
//               placeholder="Your email"
//               value={form.email}
//               onChange={handleChange}
//             />
//             <button
//               className="neon-button small"
//               onClick={handleSend}
//               disabled={loading}
//               style={loading ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
//             >
//               {loading ? "Sending..." : "Send"}
//             </button>
//           </div>
//           {errorMsg && <p className="error-msg">{errorMsg}</p>}
//         </div>
//       </section>

//       {showDialog && (
//         <div className="dialog-overlay">
//           <div className="dialog-box">
//             <p>Your request has been sent successfully.</p>
//             <button className="neon-button small" onClick={() => setShowDialog(false)}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
