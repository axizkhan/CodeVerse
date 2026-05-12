import React from "react";
import "./ShowAllMembership.css";

export default function MembershipForm({
  formData,
  setFormData,
  onSubmit,
  onCancel,
  isEditing = false,
}) {
  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name === "perks" && index !== null) {
      const updatedPerks = [...formData.perks];
      updatedPerks[index] = value;
      setFormData({ ...formData, perks: updatedPerks });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addPerk = () => {
    setFormData({ ...formData, perks: [...formData.perks, ""] });
  };

  return (
    <div className="glass card animate-fadeIn mx-auto max-w-2xl p-8 md:p-10">
      <div className="mb-8 border-b border-border-light pb-4">
        <h3 className="text-2xl font-bold tracking-tight text-text-primary">
          {isEditing ? "Edit Membership Plan" : "Create New Membership"}
        </h3>
        <p className="text-sm text-text-secondary mt-1">
          Configure the pricing, details, and exclusive perks for this tier.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Plan Name */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Plan Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Pro Developer"
              required
              className="input"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Price (₹)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              required
              className="input font-bold text-primary"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="What makes this plan special?"
            className="input min-h-[100px] py-3"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Terms */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Terms & Conditions
            </label>
            <textarea
              name="termsAndConditions"
              value={formData.termsAndConditions}
              onChange={handleChange}
              placeholder="Legal requirements..."
              className="input min-h-[80px] text-sm py-3"
            />
          </div>

          {/* Cancellation */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
              Cancellation Policy
            </label>
            <textarea
              name="cancellationPolicy"
              value={formData.cancellationPolicy}
              onChange={handleChange}
              placeholder="Refund details..."
              className="input min-h-[80px] text-sm py-3"
            />
          </div>
        </div>

        {/* Perks Management */}
        <div className="rounded-card-md border border-border bg-background/50 p-6">
          <label className="mb-4 block text-xs font-bold uppercase tracking-wider text-text-muted">
            Membership Perks
          </label>
          <div className="space-y-3">
            {formData.perks.map((perk, idx) => (
              <div
                key={idx}
                className="flex gap-2">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card-sm bg-surface-elevated text-xs font-bold text-primary border border-border">
                  {idx + 1}
                </div>
                <input
                  type="text"
                  name="perks"
                  value={perk}
                  onChange={(e) => handleChange(e, idx)}
                  placeholder={`Add a benefit...`}
                  className="input"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addPerk}
              className="mt-2 flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-hover active:scale-95">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-lg">
                +
              </span>
              Add Another Perk
            </button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end gap-4 border-t border-border-light pt-8">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 text-sm font-bold text-text-muted transition-colors hover:text-danger">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-card-sm bg-primary px-10 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0">
            {isEditing ? "Update Plan" : "Create Plan"}
          </button>
        </div>
      </form>
    </div>
  );
}
