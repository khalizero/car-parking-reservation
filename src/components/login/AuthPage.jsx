import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: "", age: "", phone: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{11}$/.test(phone);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Validation for required fields
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";
    if (isSignUp) {
      if (!formData.age) validationErrors.age = "Age is required";
      if (!formData.phone) validationErrors.phone = "Phone number is required";
      if (!validatePhone(formData.phone)) validationErrors.phone = "Phone number must be 11 digits";
      if (formData.password !== formData.confirmPassword) {
        validationErrors.confirmPassword = "Passwords do not match";
      }
    }
    if (formData.email && !validateEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      if (formData.email === "admin@gmail.com" && formData.password === "admin123") {
        alert("Welcome Admin!");
        navigate("/admin"); // Redirect to admin panel
        return;
      }
      if (isSignUp) {
        // Sign up API call
        const response = await fetch("http://localhost:5000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to sign up");
        }

        alert("Signup successful! You can now log in.");
        setIsSignUp(false); // Switch to login mode
      } else {
        // Login API call
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to log in");
        }

        // Store JWT token in localStorage
        localStorage.setItem("token", data.token);

        alert("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-primary p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center dark:text-white">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg  dark:text-white ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="example@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Age (Only for Signup) */}
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg  dark:text-white ${
                  errors.age ? "border-red-500" : ""
                }`}
                placeholder="Enter your age"
              />
              {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
            </div>
          )}

          {/* Phone Number (Only for Signup) */}
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg  dark:text-white ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder="Enter 11-digit phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          )}

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg  dark:text-gray-500 ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password (Only for Signup) */}
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg  dark:text-gray-600 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 mt-4 bg-teal-500 text-white rounded-lg hover:bg-blue-500"
            disabled={loading}
          >
            {loading ? "Processing..." : isSignUp ? "Create Account" : "Login"}
          </motion.button>
        </form>

        {/* Toggle Login/Signup */}
        <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-teal-500 hover:underline">
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
