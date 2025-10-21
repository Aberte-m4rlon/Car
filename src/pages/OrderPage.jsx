import React, { useState } from "react";

export default function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", model: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order submitted for ${form.model} by ${form.name}`);
    setForm({ name: "", email: "", model: "" });
  };

  return (
    <div className="pt-24 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Order Your Dream <span className="text-purple-400">Car</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Car Model"
          value={form.model}
          onChange={(e) => setForm({ ...form, model: e.target.value })}
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
