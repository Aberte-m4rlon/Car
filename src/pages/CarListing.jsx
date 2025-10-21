import React, { useState } from "react";

const cars = [
  {
    model: "Honda Civic",
    image: "/images/honda.jpg", // ✅ Correct path for Vite/React
    description: "Sleek, efficient, and reliable — perfect for city driving.",
    price: "$25,000",
  },
  {
    model: "Tesla Model S",
    image: "/images/tesla.jpg",
    description: "Luxury electric sedan with cutting-edge technology.",
    price: "$89,000",
  },
  {
    model: "BMW M3",
    image: "/images/bmw.jpg",
    description: "Sporty performance combined with timeless design.",
    price: "$70,000",
  },
];

export default function CarListing() {
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6 md:px-12">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8">
        Available Cars
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search car model..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 px-5 py-3 rounded-xl shadow-lg bg-white/70 border border-gray-200 focus:ring-2 focus:ring-indigo-400 backdrop-blur-md outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Car cards */}
      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl rounded-3xl overflow-hidden hover:scale-105 transition transform duration-300 w-full max-w-sm"
          >
            <img
              src={car.image}
              alt={car.model}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {car.model}
              </h3>
              <p className="text-gray-600 mt-2 mb-4">{car.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 font-semibold text-lg">
                  {car.price}
                </span>
                <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredCars.length === 0 && (
        <p className="text-center text-gray-500 text-lg mt-10">
          No cars found. Try another model.
        </p>
      )}
    </div>
  );
}
