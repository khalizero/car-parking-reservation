import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./darkmode/DarkModeToggle";

const HeroSection = () => {
  const location = useLocation();

  return (
    <main className="container mx-auto px-6 py-16 pt-24" id="hero">
      <section className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Automated Parking
          </h1>
          <p className="text-base md:text-lg mb-6">
            Modern equipment for the automation of parking spaces. Smart parking data collection and analysis.
          </p>
          {/* Conditional Button Rendering */}
          {location.pathname === "/dashboard" ? (
            <Link to="/booknow">
              <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-600">
                Book Now
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-600">
                Get Started
              </button>
            </Link>
          )}
          <DarkModeToggle />
        </div>

        {/* Hero Video */}
        <div className="w-2/3 md:w-1/2 mt-6 rounded-lg overflow-hidden shadow-lg pb-6">
          <video
            src="./3dvid.mp4" // Replace with the path to your video file
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-lg"
          ></video>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
