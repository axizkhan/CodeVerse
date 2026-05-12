import React, { useState } from "react";
import "./AddMembership.css";
import axios from "axios";

const AddMembership = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    perks: [""],
    description: "",
    termsAndConditions: "",
    cancellationPolicy: "",
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/memberships/add`, formData);
      alert("Membership added successfully!");
      setFormData({
        name: "",
        price: "",
        perks: [""],
        description: "",
        terms: "",
        cancellation: "",
      });
    } catch (error) {
      alert("Error adding membership");
      console.error(error);
    }
  };

  return (
    <div className="animate-fadeIn min-h-screen bg-background p-6 md:p-10">
      <div className="mx-auto max-w-3xl">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black tracking-tight text-text-primary">
            New <span className="text-primary">Membership</span>
          </h2>
          <p className="mt-2 text-text-secondary">
            Define a new subscription tier for your students and developers.
          </p>
        </div>

        <div className="glass card p-8 shadow-2xl border-border">
          <form
            onSubmit={handleSubmit}
            className="space-y-8">
            {/* Core Details Group */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Plan Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Platinum Access"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Monthly Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="0.00"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="input font-bold text-primary text-lg"
                />
              </div>
            </div>

            {/* Perks Section */}
            <div className="rounded-card-md bg-surface-elevated/40 p-6 border border-border/50">
              <div className="mb-4 flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-widest text-text-primary">
                  Membership Perks
                  <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                    {formData.perks.length} Active
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {formData.perks.map((perk, index) => (
                  <div
                    key={index}
                    className="group relative">
                    <input
                      type="text"
                      name="perks"
                      placeholder={`Feature #${index + 1}`}
                      value={perk}
                      onChange={(e) => handleChange(e, index)}
                      required
                      className="input pr-10 text-sm"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-primary">
                      <svg
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addPerk}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-card-sm border-2 border-dashed border-border py-3 text-xs font-bold text-text-muted transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5">
                <span className="text-lg">+</span> Add Another Benefit
              </button>
            </div>

            {/* Informational Textareas */}
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Public Description
                </label>
                <textarea
                  name="description"
                  placeholder="Describe the value proposition..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="input min-h-[100px] py-3 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    Legal Terms
                  </label>
                  <textarea
                    name="termsAndConditions"
                    placeholder="User agreement..."
                    value={formData.termsAndConditions}
                    onChange={handleChange}
                    required
                    className="input min-h-[120px] py-3 text-xs leading-relaxed"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    Cancellation Policy
                  </label>
                  <textarea
                    name="cancellationPolicy"
                    placeholder="Refund and exit rules..."
                    value={formData.cancellationPolicy}
                    onChange={handleChange}
                    required
                    className="input min-h-[120px] py-3 text-xs leading-relaxed"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full rounded-card-md bg-primary py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-hover hover:-translate-y-1 active:translate-y-0">
                Launch Membership Tier
              </button>
              <p className="mt-4 text-center text-[10px] text-text-muted uppercase tracking-[0.2em]">
                This plan will be immediately visible on the subscription page
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMembership;
