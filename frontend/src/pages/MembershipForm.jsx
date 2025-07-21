import React from 'react';
import './ShowAllMembership.css';


export default function MembershipForm({
  formData,
  setFormData,
  onSubmit,
  onCancel,
  isEditing = false,
}) {
  
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

  return (
    <div className="edit-form-container">
      <h3>{isEditing ? 'Edit Membership' : 'Add Membership'}</h3>
      <form onSubmit={onSubmit} className="edit-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="form-input"
        />

        <label>Price (₹)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="form-input"
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="form-input"
        />

        <label>Terms & Conditions</label>
        <textarea
          name="termsAndConditions"
          value={formData.termsAndConditions}
          onChange={handleChange}
          placeholder="Terms & Conditions"
          className="form-input"
        />

        <label>Cancellation Policy</label>
        <textarea
          name="cancellationPolicy"
          value={formData.cancellationPolicy}
          onChange={handleChange}
          placeholder="Cancellation Policy"
          className="form-input"
        />

        <label>Perks</label>
        <div className="perks-edit">
          {formData.perks.map((perk, idx) => (
            <input
                key={idx}
                type="text"
                name="perks"
                value={perk}
                onChange={(e) => handleChange(e, idx)}
                placeholder={`Perk ${idx + 1}`}
                className="form-input perk-input"
            />

          ))}
          <button type="button" onClick={addPerk} className="add-perk-btn">
            + Add Perk
          </button>
        </div>

        <div className="form-actions">
          <button type="submit" className="action-btn">Save</button>
          <button type="button" onClick={onCancel} className="action-btn danger">Cancel</button>
        </div>
      </form>
    </div>
  );
}
