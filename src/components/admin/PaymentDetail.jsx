import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiDollarSign, FiTrash } from "react-icons/fi";
// import Sidebar from "./Sidebar";

const PaymentDetailsPage = () => {
  const [payments, setPayments] = useState([
    { id: 1, user: "user1@example.com", amount: "$50", status: "Pending" },
    { id: 2, user: "user2@example.com", amount: "$100", status: "Completed" },
    { id: 3, user: "user3@example.com", amount: "$75", status: "Pending" },
  ]);

  const deletePayment = (id) => {
    setPayments((prev) => prev.filter((payment) => payment.id !== id));
  };

  return (
    <div className="flex min-h-screen pt-24">
      {/* <Sidebar /> */}
      <motion.div 
        className="p-8  flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white flex items-center">
          <FiDollarSign className="mr-3" /> Payment Details
        </h1>

        <div className="space-y-4">
          {payments.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-lg">No payment records found.</p>
          ) : (
            payments.map((payment) => (
              <motion.div 
                key={payment.id}
                className={`p-4 rounded-lg shadow-md flex justify-between items-center ${
                  payment.status === "Pending" ? "bg-yellow-100 dark:bg-yellow-800" :
                  "bg-green-100 dark:bg-green-800"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gray-900 dark:text-white font-semibold">
                  {payment.user} - {payment.amount} ({payment.status})
                </span>
                <button onClick={() => deletePayment(payment.id)} className="text-red-500 hover:text-red-700">
                  <FiTrash size={20} />
                </button>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentDetailsPage;
