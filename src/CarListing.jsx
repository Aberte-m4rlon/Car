import { CarFront } from "lucide-react";

export default function CarListing() {
  return (
    <div className="relative p-10 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 text-white overflow-hidden">
      {/* Ambient light glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),_transparent_70%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.1),_transparent_70%)] blur-2xl"></div>

      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 mb-8">
        <div className="p-3 rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-lg">
          <CarFront size={40} strokeWidth={1.5} />
        </div>
        <h2 className="text-4xl font-extrabold drop-shadow-lg">Available Cars</h2>
      </div>

      {/* Car Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Toyota Vios */}
        <div className="bg-white/10 backdrop-blur-xl shadow-2xl p-8 rounded-3xl border border-white/20 hover:scale-105 hover:shadow-white/20 transition duration-500 ease-out">
          <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">
            Toyota Vios
          </h3>
          <p className="text-white/80 mb-6 font-medium text-lg">₱850,000</p>
          <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-xl border border-white/30 font-semibold backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/20">
            View Details
          </button>
        </div>

        {/* Honda Civic */}
        <div className="bg-white/10 backdrop-blur-xl shadow-2xl p-8 rounded-3xl border border-white/20 hover:scale-105 hover:shadow-white/20 transition duration-500 ease-out">
          <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">
            Honda Civic
          </h3>
          <p className="text-white/80 mb-6 font-medium text-lg">₱1,250,000</p>
          <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-xl border border-white/30 font-semibold backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/20">
            View Details
          </button>
        </div>

        {/* Mitsubishi Mirage */}
        <div className="bg-white/10 backdrop-blur-xl shadow-2xl p-8 rounded-3xl border border-white/20 hover:scale-105 hover:shadow-white/20 transition duration-500 ease-out">
          <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">
            Mitsubishi Mirage
          </h3>
          <p className="text-white/80 mb-6 font-medium text-lg">₱750,000</p>
          <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-xl border border-white/30 font-semibold backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/20">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
