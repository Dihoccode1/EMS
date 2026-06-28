import "dotenv/config";
import bcrypt from "bcrypt";

import connectDB from "./config/db.js";
import User from "./models/User.js";

const TemporaryPassword = "admin123";
async function registerAdmin() {
    try {
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
        if (!ADMIN_EMAIL) {
            console.error("Missing ADMIN_EMAIL environment variable");
            process.exit(1);
        }
        await connectDB();
        const exitingAdmin = await User.findOne({
            emaiL: process.env.ADMIN_EMAIL,
        });
        if (exitingAdmin) {
            console.log("User already exists as role ", exitingAdmin.role);
            process.exit(1);
        }
        const hashedPassword = await bcrypt.hash(TemporaryPassword, 10);
        const admin = await User.create({
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: "ADMIN"
        })
        console.log("Admin registered successfully");
        console.log("\nEmail:", admin.email);
        console.log("\nPassword:", TemporaryPassword);
        console.log("\nChange the password after login");
    } catch (error) {
        console.error("Error registering admin:", error);

    }
}

registerAdmin();