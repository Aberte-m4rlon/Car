import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, List, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: <Home size={22} /> },
    { to: "/cars", label: "Cars", icon: <List size={22} /> },
    { to: "/order", label: "Order", icon: <ShoppingBag size={22} /> },
  ];

  return (
    <nav className="fixed z-50">
<div className="hidden md:flex justify-between items-center bg-white/10 backdrop-blur-x3 border border-white/20
  rounded-2xl shadow-xl shadow-black/30 px-6 py-2 top-2 left-1/2 -translate-x-1/2 fixed w-[100%] max-w-7x2">
  <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
    AutoSphere
  </h1>

  <div className="flex space-x-6 font-medium">
    {links.map(({ to, label, icon }) => (
      <Link
        key={to}
        to={to}
        className={`flex items-center gap-2 transition-all duration-300 px-3 py-2 rounded-lg ${
          location.pathname === to
            ? "text-white bg-purple-500/20 drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]"
            : "text-gray-200 hover:text-white hover:bg-white/10 hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]"
        }`}
      >
        {icon}
        {label}
      </Link>
    ))}
  </div>
</div>

      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md 
        bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl shadow-black/30 
        flex justify-around items-center py-3 px-4 transition-all duration-300">
        {links.map(({ to, label, icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-white scale-110 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                  : "text-gray-200 hover:text-white hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]"
              }`}
            >
              <div
                className={`relative flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-purple-500/30 to-indigo-500/30"
                    : "hover:bg-white/10"
                }`}
              >
                {icon}
              </div>
              <span className="text-xs mt-1">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
