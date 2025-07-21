import React, { useState } from 'react';
import './AddMembership.css';
import axios from 'axios';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AddMembership = () => {
  const [formData, setFormData] = useState({
  name: '',
  price: '',
  perks: [''],
  description: '',
  termsAndConditions: '',
  cancellationPolicy: '',
});
const backendUrl = import.meta.env.VITE_BACKEND_URL;


  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name === 'perks' && index !== null) {
      const updatedPerks = [...formData.perks];
      updatedPerks[index] = value;
      setFormData({ ...formData, perks: updatedPerks });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addPerk = () => {
    setFormData({ ...formData, perks: [...formData.perks, ''] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/memberships/add`, formData);
      alert('Membership added successfully!');
      setFormData({
        name: '',
        price: '',
        perks: [''],
        description: '',
        terms: '',
        cancellation: '',
      });
    } catch (error) {
      alert('Error adding membership');
      console.error(error);
    }
  };

  return (
    <div className="add-membership-container">
      <h2>Add Membership</h2>
      <form onSubmit={handleSubmit} className="membership-form">
        <input
          type="text"
          name="name"
          placeholder="Membership Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <div className="perks-section">
          {/* <label>Perks:</label>&nbsp; &nbsp; */}
          {formData.perks.map((perk, index) => (
            <input
              key={index}
              type="text"
              name="perks"
              placeholder={`Perk ${index + 1}`}
              value={perk}
              onChange={(e) => handleChange(e, index)}
              required
              style={{ marginRight: '10px',marginBottom: '10px' }}
            />
            
          ))}
          &nbsp; &nbsp; <button type="button" onClick={addPerk} className="add-perk-btn">
            + Add Perk
          </button>
        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <textarea
          name="termsAndConditions"
          placeholder="Terms & Conditions"
          value={formData.termsAndConditions}
          onChange={handleChange}
          required
        />

        <textarea
          name="cancellationPolicy"
          placeholder="Cancellation Policy"
          value={formData.cancellationPolicy}
          onChange={handleChange}
          required
        />


        <button type="submit" className="submit-btn">
          Add Membership
        </button>
      </form>
    </div>
  );
};

export default AddMembership;
