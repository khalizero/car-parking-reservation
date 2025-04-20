// utils/jwt.js

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRATION = "1d"; // Token expiration time

// Function to generate JWT
export const generateToken = (user: any) => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

// Function to verify JWT
export const verifyToken = (token: any) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};
