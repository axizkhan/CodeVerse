import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CheckOut.css';
import UserContext from '../UserContext'; // <-- import your UserContext

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { user } = useContext(UserContext); // <-- get user from context

  const [showDialog, setShowDialog] = React.useState(false);

  if (!state) {
    return (
      <div className="checkout-container">
        <div className="neon-blobs"></div>
        <h2 style={{ textAlign: 'center', marginTop: '80px', color: 'hotpink' }}>
          No plan data found. Please select a plan from the Get Started page.
        </h2>
      </div>
    );
  }

  const { planName, price, perks, terms, cancellation } = state;
  console.log('Checkout state:', state);

  const handleBuyNow = async () => {
    try {
      const userId = user?._id; // <-- get userId from context
      const membershipId = state.membershipId;

      if (!userId || !membershipId) {
        alert('User or membership information missing.');
        return;
      }

      const response = await axios.post('http://localhost:8080/order/add', {
        userId,
        membershipId,
      });

      if (response.data.success) {
        alert('Order placed successfully!');
        navigate('/get-started'); // Redirect to membership page
      } else {
        alert('Order failed: ' + response.data.message);
      }
    } catch (error) {
      alert('Order failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="checkout-container">
      <div className="neon-blobs"></div>

      <h1 className="checkout-title">
        Subscribe to <span className={`text-cyan`}>{planName}</span>
      </h1>

      <div className={`plan-box border-cyan`}>
        <h2>{planName}</h2>
        <p className="price">₹{price}/month</p>

        <h3>What's Included:</h3>
        <ul className="perks-list">
          {perks?.map((perk, idx) => (
            <li key={idx}>• {perk}</li>
          ))}
        </ul>

        <div className="details">
          <h4>Terms & Conditions</h4>
          <p>{terms}</p>

          <h4>Cancellation Policy</h4>
          <p>{cancellation}</p>
        </div>

        <button className="neon-button buy-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
