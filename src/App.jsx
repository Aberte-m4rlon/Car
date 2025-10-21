import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import CarListing from "./CarListing.jsx";
import OrderPage from "./OrderPage.jsx";

export default function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="flex justify-center space-x-8 bg-blue-600 text-white py-4 shadow-md">
        <Link to="/" className="hover:underline text-lg font-medium">
          Home
        </Link>
        <Link to="/listings" className="hover:underline text-lg font-medium">
          Car Listings
        </Link>
        <Link to="/order" className="hover:underline text-lg font-medium">
          Order
        </Link>
      </nav>

      {/* Page Routes */}
      <div className="p-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/listings" element={<CarListing />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Router>
  );
}
