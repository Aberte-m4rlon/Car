import { Car } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.1),_transparent_60%)] blur-2xl"></div>

      {/* Glassmorphic card */}
      <div className="relative z-10 p-10 rounded-3xl backdrop-blur-xl bg-white/10 shadow-2xl border border-white/20 max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-lg">
            <Car size={48} strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to the Car App
        </h1>
        <p className="text-lg opacity-90">
          Discover your dream car today with our amazing listings.
        </p>

        {/* CTA Button */}
        <button className="mt-8 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-white/20">
          Explore Now
        </button>
      </div>
    </div>
  );
}
