import React, { useState } from "react";

export default function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", model: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order submitted for ${form.model} by ${form.name}`);
    setForm({ name: "", email: "", model: "" });
  };

  return (
    <div className="pt-24 px-6 md:px-20 min-h-screen flex flex-col items-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-10 drop-shadow-lg">
        Order Your Dream <span className="text-purple-400">Car</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl shadow-purple-500/30 space-y-6 hover:shadow-purple-500/50 transition-shadow duration-500"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 bg-white/20 text-black border border-white/30 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 focus:shadow-lg backdrop-blur-sm transition duration-300"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 bg-white/20 text-black border border-white/30 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 focus:shadow-lg backdrop-blur-sm transition duration-300"
          required
        />
        <input
          type="text"
          placeholder="Car Model"
          value={form.model}
          onChange={(e) => setForm({ ...form, model: e.target.value })}
          className="w-full px-4 py-3 bg-white/20 text-black border border-white/30 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 focus:shadow-lg backdrop-blur-sm transition duration-300"
          required
        />
          <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full px-4 py-3 bg-white/20 text-black border border-white/30 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 focus:shadow-lg backdrop-blur-sm transition duration-300"
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={form.contactNumber}
          onChange={(e) => setForm({ ...form, contactNumber: e.target.value })}
          className="w-full px-4 py-3 bg-white/20 text-black border border-white/30 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 focus:shadow-lg backdrop-blur-sm transition duration-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/50 transition transform duration-300"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
