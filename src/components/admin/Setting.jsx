import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSettings, FiSave } from "react-icons/fi";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    theme: "Light",
    notifications: true,
    language: "English",
  });

  const updateSetting = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const saveSettings = () => {
    // Add logic to save settings (e.g., API call)
    alert("Settings saved successfully!");
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
          <FiSettings className="mr-3" /> Settings
        </h1>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Theme</label>
            <select
              value={settings.theme}
              onChange={(e) => updateSetting("theme", e.target.value)}
              className="block w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-2"
            >
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Notifications</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => updateSetting("notifications", e.target.checked)}
                className="mr-2"
              />
              <span className="text-gray-900 dark:text-white">Enable Notifications</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => updateSetting("language", e.target.value)}
              className="block w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-2"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>

          <button
            onClick={saveSettings}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
          >
            <FiSave className="mr-2" /> Save Settings
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;
