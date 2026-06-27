//Login for employee and admin

import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// POST/api/auth/login
export const login = async (req, res) => {
  try {
    const { email, password, role_type } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    if (role_type === "admin" && user.role !== "ADMIN") {
      return res.status(401).json({ error: "Not authorized as admin" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(401).json({ error: "Invalid credentials" });
    const payLoad = {
      userId: user._id.toString(),
      role: user.role,
      email: user.email,
    };

    const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.json;
    ({ user: payLoad, token });
  } catch (error) {
    console.error("Login error", error);
  }
};

// Get session for employee and admin
//  Get api/auth/session

export const session = async (req, res) => {
  const session = req.session;
  return res.json({ user: session });
};
// Change password for employee and admin
// PUT api/auth/password
export const changePassword = async (req, res) => {
  try {
    const session = req.session;
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).jso({ error: "Both passwords are required" });
    }
    const user = await User.findById(session.userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const isValidPassword = await bcrypt.compare(
      currentPassword,
      user.password,
    );
    if (!isValidPassword)
      return res.status(401).json({ error: "Current password is incorrect" });
    const hashed = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(session.userId, { password: hashed });
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to change password" });
  }
};
