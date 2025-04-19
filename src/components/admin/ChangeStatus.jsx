import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiEdit, FiCheckCircle } from "react-icons/fi";

const ChangeStatusPage = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "admin@example.com", status: "Active" },
    { id: 2, email: "user1@example.com", status: "Inactive" },
    { id: 3, email: "user2@example.com", status: "Pending" },
  ]);

  const changeStatus = (id, newStatus) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status: newStatus } : user
      )
    );
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen pt-24">
      {/* Sidebar can go here if needed */}
      <motion.div
        className="p-4 lg:p-8  flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl lg:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white flex items-center">
          <FiEdit className="mr-3" /> Change User Status
        </h1>

        <div className="space-y-4">
          {users.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-lg">No users found.</p>
          ) : (
            users.map((user) => (
              <motion.div
                key={user.id}
                className="p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-200 dark:bg-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gray-900 dark:text-white font-semibold mb-2 sm:mb-0">
                  {user.email} - {user.status}
                </span>
                <div className="flex space-x-2">
                  {user.status !== "Active" && (
                    <button
                      onClick={() => changeStatus(user.id, "Active")}
                      className="text-green-500 hover:text-green-700 flex items-center"
                    >
                      <FiCheckCircle size={20} className="mr-1" /> Active
                    </button>
                  )}
                  {user.status !== "Inactive" && (
                    <button
                      onClick={() => changeStatus(user.id, "Inactive")}
                      className="text-yellow-500 hover:text-yellow-700 flex items-center"
                    >
                      <FiCheckCircle size={20} className="mr-1" /> Inactive
                    </button>
                  )}
                  {user.status !== "Pending" && (
                    <button
                      onClick={() => changeStatus(user.id, "Pending")}
                      className="text-blue-500 hover:text-blue-700 flex items-center"
                    >
                      <FiCheckCircle size={20} className="mr-1" /> Pending
                    </button>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ChangeStatusPage;
