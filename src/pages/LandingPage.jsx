import React, { useState, useEffect } from "react";
import PrimaryButton from "../components/primaryButton";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden text-white">
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/10 backdrop-blur-2xl border-l border-white/20 shadow-2xl shadow-purple-500/30 transition-transform duration-500 ease-in-out z-50 ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-purple-300">Exclusive Deals</h2>
          <p className="text-gray-200 text-sm">
            Explore the latest models and offers. Click the close button or outside to close this panel.
          </p>

          <div className="mt-4 space-y-3">
            <div className="p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition">
              <h3 className="font-semibold text-lg">BMW M Series</h3>
              <p className="text-gray-300 text-sm">High-performance luxury cars.</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition">
              <h3 className="font-semibold text-lg">Audi E-Tron</h3>
              <p className="text-gray-300 text-sm">Electric power with style.</p>
            </div>
            <div className="p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition">
              <h3 className="font-semibold text-lg">Mercedes AMG</h3>
              <p className="text-gray-300 text-sm">Dynamic performance redefined.</p>
            </div>
          </div>

          <button
            onClick={() => setIsPanelOpen(false)}
            className="mt-6 w-full py-2 bg-purple-500/30 hover:bg-purple-500/50 rounded-xl transition"
          >
            Close Panel
          </button>
        </div>
      </div>

      {(isPanelOpen || isModalOpen) && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => {
            setIsPanelOpen(false);
            setIsModalOpen(false);
          }}
        ></div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-purple-500/30 p-8 max-w-lg w-full text-white z-50">
            <h2 className="text-2xl font-bold mb-4">Modal</h2>
            <p className="mb-6 text-gray-200">
              This is my modal. You can put any content here.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-purple-500/30 hover:bg-purple-500/50 rounded-xl transition"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-indigo-500/30 hover:bg-indigo-500/50 rounded-xl transition">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-24 px-6 md:px-40">
        <section className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black">
              Build Modern <span className="text-purple-400">Web Apps</span> with Ease
            </h1>
            <p className="text-gray-300">
              Create fast, responsive, and aesthetic car company websites using React and Tailwind CSS.
            </p>
            <div className="flex space-x-4">
              <PrimaryButton label="Order Now" onClick={() => navigate("/order")} />
              <PrimaryButton label="Open Modal" onClick={() => setIsModalOpen(true)} />
              <PrimaryButton label="Open Panel" onClick={() => setIsPanelOpen(true)} />
            </div>
          </div>

          <img
            src="images/BMW.jpg"
            alt="Luxury Car"
            className="md:w-1/2 rounded-2xl shadow-2xl shadow-purple-300/50 hover:shadow-purple-500/70 transition-all duration-500 transform hover:scale-105 backdrop-blur-md border border-white/10"
          />
        </section>

        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-100 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
            Why Choose <span className="text-purple-400">AutoSphere</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-purple-400/30 hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-2">
              <Card
                icon="speed"
                title="Top Performance"
                description="Experience lightning-fast load times and optimized engines designed for smooth drives."
              />
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-indigo-400/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-2">
              <Card
                icon="design"
                title="Premium Design"
                description="Crafted with elegance, comfort, and futuristic aesthetics in mind."
              />
            </div>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-fuchsia-400/30 hover:shadow-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2">
              <Card
                icon="power"
                title="Powerful Experience"
                description="Unleash raw power with advanced car tech engineered for maximum output."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
