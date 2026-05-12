import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShowOrder.css"; // Optional: for styling

export default function ShowOrder() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // Adjust this based on your environment

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${backendUrl}/order/all`);
        console.log("Fetched orders:", res.data.data);
        setOrders(res.data.data);
        setFilteredOrders(res.data.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = orders.filter(
      (order) =>
        order.user?.username?.toLowerCase().includes(term) ||
        order.membershipName?.toLowerCase().includes(term),
    );
    setFilteredOrders(filtered);
  }, [searchTerm, orders]);

  return (
    <div className="animate-fadeIn min-h-screen bg-background p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">
              All Orders
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Monitor and manage membership transactions
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by user or membership..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pr-12 focus:ring-2"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
              <svg
                width="20"
                height="20"
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

        {/* Orders Table - Using your .card and .surface tokens */}
        <div className="card overflow-hidden border-border bg-surface shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-surface-elevated/50 text-xs font-bold uppercase tracking-wider text-text-secondary">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Membership</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Purchase Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light text-sm text-text-secondary">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr
                      key={order._id}
                      className="transition-colors hover:bg-surface-elevated/40">
                      <td className="px-6 py-4 font-mono text-[11px] text-text-muted">
                        #{order._id.slice(-8).toUpperCase()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-text-primary">
                          {order.user?.username || "N/A"}
                        </div>
                        <div className="text-[11px] text-text-muted truncate max-w-[120px]">
                          {order.user?._id}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-md bg-info/10 px-2 py-1 text-xs font-medium text-info">
                          {order.membershipName}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-text-primary">
                        ₹{order.membershipPrice}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold border ${
                            order.status === "Completed"
                              ? "border-success/20 bg-success/10 text-success"
                              : "border-warning/20 bg-warning/10 text-warning"
                          }`}>
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              order.status === "Completed"
                                ? "bg-success"
                                : "bg-warning"
                            }`}
                          />
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-text-muted">
                        {new Date(order.purchaseDate).toLocaleDateString(
                          undefined,
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          },
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="rounded-full bg-surface-elevated p-4">
                          <svg
                            width="32"
                            height="32"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            className="text-text-muted opacity-40">
                            <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <p className="text-text-muted font-medium">
                          No orders found
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
