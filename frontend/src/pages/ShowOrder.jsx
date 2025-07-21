import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowOrder.css'; // Optional: for styling


export default function ShowOrder() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // Adjust this based on your environment

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${backendUrl}/order/all`);
        console.log('Fetched orders:', res.data.data);
        setOrders(res.data.data);
        setFilteredOrders(res.data.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = orders.filter(order => 
      order.user?.username?.toLowerCase().includes(term) ||
      order.membershipName?.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  }, [searchTerm, orders]);

  return (
    <div className="show-orders-container">
      <h2>All Orders</h2>
      <input
        type="text"
        placeholder="Search by User or Membership"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="order-search-input"
      />

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Membership</th>
            <th>Price (₹)</th>
            <th>Status</th>
            <th>Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user?.username || 'N/A'}</td>
                <td>{order.membershipName}</td>
                <td>₹{order.membershipPrice}</td>
                <td>{order.status}</td>
                <td>{new Date(order.purchaseDate).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
