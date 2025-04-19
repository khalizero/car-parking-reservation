import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

const AdvanceBooking = ({ userId }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    // Implement booking logic (e.g., API call or form submission)
    console.log(`Booking on ${date} at ${time}`);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center p-6 lg:p-12">
      <div className="w-full lg:w-1/2 space-y-6">
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-56 p-3 border border-gray-300 rounded-lg shadow-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-56 p-3 border border-gray-300 text-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleBooking}
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvanceBooking;
