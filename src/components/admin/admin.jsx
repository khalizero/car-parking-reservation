import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiBell,
  FiTrash,
  FiEye,
  FiUsers,
  FiHome,
  FiSettings,
  FiDollarSign,
  FiUserMinus,
  FiEdit,
} from "react-icons/fi";
import UserTable from "./UserTable";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      className={`h-screen  text-white p-4 flex-shrink-0 ${isOpen ? "w-64" : "w-20"}`}
      initial={{ width: 0 }}
      animate={{ width: isOpen ? 256 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="text-white mb-4 focus:outline-none hover:bg-gray-700 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Collapse" : "Expand"}
      </button>
      <nav>
        <Link to="/admin" className="flex items-center p-3 hover:bg-gray-700 rounded">
          <FiHome className="mr-2" /> {isOpen && "Dashboard"}
        </Link>
        <Link to="/admin/users" className="flex items-center p-3 hover:bg-gray-700 rounded">
          <FiUsers className="mr-2" /> {isOpen && "Users"}
        </Link>
        <Link to="/admin/notifications" className="flex items-center p-3 hover:bg-gray-700 rounded">
          <FiBell className="mr-2" /> {isOpen && "Notifications"}
        </Link>
        <Link to="/admin/payment-details" className="flex items-center p-3 hover:bg-gray-700 rounded">
          <FiDollarSign className="mr-2" /> {isOpen && "Payment Details"}
        </Link>
        <Link to="/admin/remove-user" className="flex items-center p-3 hover:bg-gray-700 rounded">
          <FiUserMinus className="mr-2" /> {isOpen && "Remove User"}
        </Link>
        <Link to="/admin/change-status" className="flex items-center p-3 hover:bg-gray-700 rounded">
          <FiEdit className="mr-2" /> {isOpen && "Change Status"}
        </Link>
        <Link to="/admin/settings" className="flex items-center p-3 hover:bg-gray-700 rounded">
          <FiSettings className="mr-2" /> {isOpen && "Settings"}
        </Link>
      </nav>
    </motion.div>
  );
};

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "user1@example.com", phone: "12345678901", unpaid: true },
    { id: 2, email: "user2@example.com", phone: "09876543210", unpaid: false },
  ]);

  const sendNotification = (user) => {
    alert(`Notification sent to:\nEmail: ${user.email}\nPhone: ${user.phone}`);
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    alert(`User with ID ${id} deleted.`);
  };

  return (
    <div className="flex flex-col lg:flex-row pt-20">
      <Sidebar />
      <motion.div
        className="p-8  min-h-screen flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl lg:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Admin Panel
        </h1>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="overflow-auto"
        >
          <UserTable users={users} sendNotification={sendNotification} deleteUser={deleteUser} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminPage;
