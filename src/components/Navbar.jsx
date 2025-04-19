import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="fixed top-0 left-0  w-full z-50 bg-transparent dark:bg-transparent shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">PARK BUDDY</div>

        {/* Navbar Links Centered */}
        <div className="hidden md:flex justify-center flex-1 space-x-6 font-semibold text-sm">
          <Link to="/" className="hover:text-teal-500">Home</Link>
          {location.pathname === "/dashboard" && (
            <>
              <Link to="#features" className="hover:text-teal-500">Features</Link>
              <Link to="#payment-plans" className="hover:text-teal-500">Plans</Link>
            </>
          )}
          <Link to="#about-us" className="hover:text-teal-500">About Us</Link>
          <Link to="#contact" className="hover:text-teal-500">Contact Us</Link>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4 font-medium">
          {isAuthenticated ? (
            <>
              {location.pathname === "/admin" ? (
                <Link to="/" onClick={handleLogout} className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                  Logout
                </Link>
              ) : (
                <>
                  {(location.pathname === "/dashboard" || location.pathname === "/booknow") && (
                    <Link to="/booknow" className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-teal-600">
                      Book Now
                    </Link>
                  )}
                  <Link to="/" onClick={handleLogout} className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                    Logout
                  </Link>
                </>
              )}
            </>
          ) : (
            <>
              <Link to="/signup" className="text-black dark:text-white hover:text-teal-500">Sign In</Link>
              <Link to="/login">
                <button className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-600">
                  Get Started
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
