import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cars = [
  {
    model: "Honda Civic",
    image: "/images/hnda.png",
    description: "Sleek, efficient, and reliable — perfect for city driving.",
    price: "$25,000",
  },
  {
    model: "Tesla Model S",
    image: "/images/tesla.png",
    description: "Luxury electric sedan with cutting-edge technology.",
    price: "$89,000",
  },
  {
    model: "BMW M3",
    image: "/images/bmw.png",
    description: "Sporty performance combined with timeless design.",
    price: "$70,000",
  },
];

export default function CarShowcase() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextCar = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.6, ease: "easeIn" },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      {/* Floating gradient orbs for ambiance */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/40 via-pink-300/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-300/40 via-purple-300/30 to-transparent rounded-full blur-3xl animate-pulse"></div>

      <h1 className="text-6xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 drop-shadow-[0_5px_25px_rgba(168,85,247,0.4)] tracking-wide">
        Car Showcase
      </h1>

      <div className="relative flex items-center justify-center w-full max-w-5xl h-[420px]">
        {/* Left Arrow */}
        <button
          onClick={prevCar}
          className="absolute left-4 md:left-10 z-30 bg-white/20 backdrop-blur-lg p-3 rounded-full shadow-lg border border-white/40 hover:scale-125 hover:shadow-purple-400/50 transition-all duration-300"
        >
          <span className="text-3xl text-purple-600 font-bold drop-shadow-md">←</span>
        </button>

        {/* Car Display */}
        <div className="relative w-[650px] h-[420px] flex items-center justify-center overflow-visible">
          <AnimatePresence custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-[650px] h-[400px] flex flex-col items-center justify-end"
            >
              {/* Glowing shadow BELOW the car */}
              <motion.div
                className="absolute bottom-16 w-[380px] h-[60px] rounded-full bg-purple-400/30 blur-3xl shadow-[0_0_90px_40px_rgba(168,85,247,0.5)] transition-all duration-700"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Car image */}
              <motion.img
                src={cars[current].image}
                alt={cars[current].model}
                className="relative w-[700px] h-auto object-contain drop-shadow-[0_25px_80px_rgba(0,0,0,0.45)] select-none pointer-events-none transition-transform duration-700 hover:scale-110 hover:drop-shadow-[0_35px_90px_rgba(168,85,247,0.6)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextCar}
          className="absolute right-4 md:right-10 z-30 bg-white/20 backdrop-blur-lg p-3 rounded-full shadow-lg border border-white/40 hover:scale-125 hover:shadow-purple-400/50 transition-all duration-300"
        >
          <span className="text-3xl text-purple-600 font-bold drop-shadow-md">→</span>
        </button>
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cars[current].model}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-white/40 backdrop-blur-xl border border-purple-200 shadow-xl px-10 py-6 rounded-2xl max-w-2xl text-center transition-all hover:shadow-purple-400/40"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
            {cars[current].model}
          </h3>
          <p className="text-gray-700 text-lg italic">
            {cars[current].description}
          </p>
          <p className="mt-3 text-purple-600 font-semibold text-2xl drop-shadow-sm">
            {cars[current].price}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
