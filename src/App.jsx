import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarListing from "./pages/CarListing";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <Link to="/">Home</Link>
        <Link to="/listings">Car Listing</Link>
        <Link to="/order">Order</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listings" element={<CarListing />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
