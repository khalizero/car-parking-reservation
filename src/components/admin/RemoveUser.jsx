import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUserMinus, FiTrash } from "react-icons/fi";

const RemoveUserPage = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "admin@example.com", role: "Admin" },
    { id: 2, email: "user1@example.com", role: "User" },
    { id: 3, email: "user2@example.com", role: "User" },
  ]);

  const removeUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="flex min-h-screen pt-24">
      {/* Sidebar can go here if needed */}
      <motion.div
        className="p-8  flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white flex items-center">
          <FiUserMinus className="mr-3" /> Remove Users
        </h1>

        <div className="space-y-4">
          {users.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-lg">No users found.</p>
          ) : (
            users.map((user) => (
              <motion.div
                key={user.id}
                className="p-4 rounded-lg shadow-md flex justify-between items-center bg-blue-100 dark:bg-blue-800"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gray-900 dark:text-white font-semibold">
                  {user.email} - {user.role}
                </span>
                <button
                  onClick={() => removeUser(user.id)}
                  className="text-red-500 hover:text-red-700"
                >
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

export default RemoveUserPage;
