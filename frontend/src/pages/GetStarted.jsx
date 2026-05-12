import React, { useEffect, useState } from "react";
import "./GetStarted.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import membership from '../../../backend/models/Membership';

export default function GetStarted() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Subscription Inquiry",
    message: "",
  });

  const [showDialog, setShowDialog] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
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
      setForm({
        name: "",
        email: "",
        subject: "Subscription Inquiry",
        message: "",
      });
      setErrorMsg("");
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden px-4 py-16 transition-colors duration-300">
      {/* Themed Neon Blobs */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-accent opacity-10 blur-[120px]" />

      {/* Hero Section */}
      <section className="relative z-10 mb-16 text-center">
        <h2 className="animate-fadeIn mb-4 text-4xl md:text-5xl font-black tracking-tight text-text-primary">
          Subscription <span className="text-primary">Plans</span>
        </h2>
        <p className="animate-fadeIn mx-auto max-w-2xl text-lg text-text-secondary">
          Join CodeVerse and choose a subscription that suits your needs. Unlock
          premium tutorials and expert mentorship.
        </p>
      </section>

      {/* Plans Grid */}
      <section className="relative z-10 mx-auto mb-24 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {loadingPlans ? (
          <div className="col-span-full py-20 text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="mt-4 font-bold text-primary">Loading plans...</p>
          </div>
        ) : (
          plans.map((plan, i) => {
            // Rotating themed borders based on your tokens
            const borderColors = [
              "hover:border-primary border-primary/20",
              "hover:border-secondary border-secondary/20",
              "hover:border-accent border-accent/20",
            ];
            const shadowColors = [
              "hover:shadow-primary/20",
              "hover:shadow-secondary/20",
              "hover:shadow-accent/20",
            ];

            return (
              <div
                key={i}
                onClick={() =>
                  navigate(
                    `/checkout/${plan.name.toLowerCase().replace(/\s+/g, "-")}`,
                    {
                      state: {
                        membershipId: plan._id,
                        planName: plan.name,
                        price: plan.price,
                        perks: plan.perks,
                        terms: plan.termsAndConditions,
                        cancellation: plan.cancellationPolicy,
                      },
                    },
                  )
                }
                className={`group relative flex cursor-pointer flex-col rounded-card-lg border-2 bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${borderColors[i % 3]} ${shadowColors[i % 3]}`}>
                <h3 className="mb-4 text-2xl font-bold text-text-primary group-hover:text-primary">
                  {plan.name}
                </h3>
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-text-primary">
                    ₹{plan.price}
                  </span>
                  <span className="text-text-muted">/month</span>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                  {plan.description}
                </p>

                <div className="mt-auto">
                  <button className="w-full rounded-card-sm bg-surface-elevated py-3 text-sm font-bold text-text-primary border border-border group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    Select Plan
                  </button>
                </div>
              </div>
            );
          })
        )}
      </section>

      {/* Footer Contact Form */}
      <section className="glass card mx-auto max-w-4xl p-8 md:p-12">
        <div className="mb-8 text-center">
          <p className="text-xl font-bold text-text-primary">Have Questions?</p>
          <p className="text-text-secondary">
            Our team is here to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="input"
          />
          <textarea
            name="message"
            placeholder="What's on your mind?"
            value={form.message}
            onChange={handleChange}
            className="input md:col-span-2 min-h-[100px] py-3"
          />
          <div className="md:col-span-2 text-center">
            <button
              className="rounded-card-md bg-primary px-12 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover active:scale-95 disabled:opacity-50"
              onClick={handleSend}
              disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {errorMsg && (
              <p className="mt-4 text-xs font-bold text-danger">{errorMsg}</p>
            )}
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="glass card animate-fadeIn w-full max-w-sm p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-success">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="mb-6 font-bold text-text-primary">
              Your request has been sent successfully.
            </p>
            <button
              className="w-full rounded-card-sm bg-primary py-2.5 font-bold text-white transition-all hover:bg-primary-hover"
              onClick={() => setShowDialog(false)}>
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
