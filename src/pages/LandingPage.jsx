import React from "react";
import PrimaryButton from "../components/primaryButton";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 px-6 md:px-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Build Modern <span className="text-purple-400">Web Apps</span> with Ease
          </h1>
          <p className="text-gray-400">
            Create fast, responsive, and aesthetic car company websites using React and Tailwind CSS.
          </p>
          <PrimaryButton label="Order Now" onClick={() => navigate("/order")} />
        </div>

        <img
          src="./public/images/honda.jpg"
          alt="Luxury Car"
          className="md:w-1/2 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10"
        />
      </section>

      {/* Features Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-indigo-400">AutoSphere</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon="speed"
            title="Top Performance"
            description="Experience lightning-fast load times and optimized engines designed for smooth drives."
          />
          <Card
            icon="design"
            title="Premium Design"
            description="Crafted with elegance, comfort, and futuristic aesthetics in mind."
          />
          <Card
            icon="power"
            title="Powerful Experience"
            description="Unleash raw power with advanced car tech engineered for maximum output."
          />
        </div>
      </section>
    </div>
  );
}
