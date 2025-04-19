import React from "react";
import { motion } from "framer-motion";

const PaymentHistory = ({ userId }) => {
  // Mock data for payment history
  const paymentData = [
    { id: 1, date: "2025-01-16", amount: "$30", method: "Credit Card" },
    { id: 2, date: "2025-01-15", amount: "$20", method: "PayPal" },
    // Add more data as needed
  ];

  return (
    <div className="p-6">
      <div className="space-y-6">
        {paymentData.map((item) => (
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
              <p className="text-lg">Amount: {item.amount}</p>
              <p className="text-lg">Method: {item.method}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
