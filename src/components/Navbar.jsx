import React from "react";
import { Link } from "react-router-dom";
import { CarFront, Home, ShoppingBag, List } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          AutoSphere
        </h1>

        <div className="flex space-x-8 text-gray-300">
          <Link to="/" className="hover:text-white flex items-center gap-1 transition">
            <Home size={18} /> Home
          </Link>
          <Link to="/listings" className="hover:text-white flex items-center gap-1 transition">
            <List size={18} /> Cars
          </Link>
          <Link to="/order" className="hover:text-white flex items-center gap-1 transition">
            <ShoppingBag size={18} /> Order
          </Link>
        </div>
      </div>
    </nav>
  );
}
