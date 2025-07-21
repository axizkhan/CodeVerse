import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const MembershipExpiryAlerts = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [expiringUsers, setExpiringUsers] = useState([]);

  useEffect(() => {
    const fetchExpiring = async () => {
      try {
        const res = await axios.get(`${backendUrl}/admin/membership-expiring`);
        setExpiringUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchExpiring();
  }, []);

  const calculateExpiryDate = (purchaseDate) => {
    const date = new Date(purchaseDate);
    date.setDate(date.getDate() + 30); // Assuming 30-day membership
    return date.toLocaleDateString();
  };

  return (
    <div className="alert-card">
      <h3>Memberships Expiring Soon</h3>
      {expiringUsers.length === 0 ? (
        <p>No memberships expiring in next 7 days!</p>
      ) : (
        <ul>
          {expiringUsers.map(order => (
            <li key={order._id}>
              <strong>{order.user.username}</strong> — {order.membership.name} — Expiring on <strong>{calculateExpiryDate(order.purchaseDate)}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MembershipExpiryAlerts;
