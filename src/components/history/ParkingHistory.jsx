import React from "react";
import { motion } from "framer-motion";

const ParkingHistory = ({ userId }) => {
  // Mock data for parking history
  const parkingData = [
    { id: 1, date: "2025-01-16", location: "Main Street", duration: "3 hours" },
    { id: 2, date: "2025-01-15", location: "Downtown", duration: "2 hours" },
    // Add more data as needed
  ];

  return (
    <div className="p-6">
      <div className="space-y-6">
        {parkingData.map((item) => (
          <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-transparent shadow-md rounded-lg p-6"
                >
            <div className="space-y-2">
              <p className="text-lg font-semibold text-teal-600">Date: {item.date}</p>
              <p className="text-lg">Location: {item.location}</p>
              <p className="text-lg">Duration: {item.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ParkingHistory;
