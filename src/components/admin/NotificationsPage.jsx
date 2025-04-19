import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiBell, FiTrash } from "react-icons/fi";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Payment overdue for User 1", type: "warning" },
    { id: 2, message: "New user registered: user2@example.com", type: "info" },
    { id: 3, message: "User 3 requested support", type: "alert" },
  ]);

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="flex min-h-screen pt-24">
      <motion.div 
        className="p-8  flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white flex items-center">
          <FiBell className="mr-3" /> Notifications
        </h1>

        <div className="space-y-4">
          {notifications.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-lg">No new notifications.</p>
          ) : (
            notifications.map((notif) => (
              <motion.div 
                key={notif.id}
                className={`p-4 rounded-lg shadow-md flex justify-between items-center ${
                  notif.type === "warning" ? "bg-yellow-100 dark:bg-yellow-800" :
                  notif.type === "info" ? "bg-blue-100 dark:bg-blue-800" :
                  "bg-red-100 dark:bg-red-800"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gray-900 dark:text-white font-semibold">{notif.message}</span>
                <button onClick={() => deleteNotification(notif.id)} className="text-red-500 hover:text-red-700">
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

export default NotificationsPage;
