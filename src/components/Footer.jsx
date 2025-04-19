import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userMessage: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceId = "your_service_id";
    const templateId = "your_template_id";
    const userId = "your_user_id";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(() => {
        setStatus("Email sent successfully!");
        setFormData({ userEmail: "", userMessage: "" });
      })
      .catch(() => {
        setStatus("Failed to send email. Please try again.");
      });
  };

  return (
    <section className="  text-center py-10" id="contact">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 ">
            Contact Us
          </h1>
      <div className="container mx-auto px-4">
        {/* Contact Us Form */}
        <div className="mt-8 max-w-lg mx-auto">
          <div className=" p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="userEmail" className="block ">
                  Your Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-teal-500   "
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="userMessage" className="block ">
                  Your Message
                </label>
                <textarea
                  id="userMessage"
                  name="userMessage"
                  value={formData.userMessage}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border  rounded-md  focus:outline-none focus:ring-2 focus:ring-teal-500  placeholder-gray-500"
                  rows="4"
                  placeholder="Enter your query"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-900  rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
            {status && <p className="text-teal-400 mt-4">{status}</p>}
          </div>
        </div>
        {/* Footer Info */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <p className="text-gray-400">&copy; 2025 Automated Parking. All rights reserved.</p>
          <p className="text-gray-400">Email: automated.parking@gmail.com</p>
          <p className="text-gray-400">Phone: +1 (234) 567-890</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;