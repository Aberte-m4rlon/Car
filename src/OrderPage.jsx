import { ShoppingCart } from "lucide-react";

export default function OrderPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.2),_transparent_70%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.15),_transparent_70%)] blur-2xl"></div>

      {/* Glassy Card */}
      <div className="relative z-10 p-10 rounded-3xl backdrop-blur-xl bg-white/10 shadow-2xl border border-white/20 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-lg">
            <ShoppingCart size={42} strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">
          Order a Car
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-white/90 font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full rounded-xl bg-white/20 border border-white/30 p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-md"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-white/90 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full rounded-xl bg-white/20 border border-white/30 p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-md"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-white/90 font-medium mb-2">Car Model</label>
            <select className="w-full rounded-xl bg-white/20 border border-white/30 p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-md">
              <option className="bg-indigo-600">Toyota Vios</option>
              <option className="bg-indigo-600">Honda Civic</option>
              <option className="bg-indigo-600">Mitsubishi Mirage</option>
            </select>
          </div>

          <button className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white py-3 rounded-xl font-semibold backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-white/20">
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}
