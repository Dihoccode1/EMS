import Payslip from "../models/Payslips.js"; // Ensure you include .js extension if using ES modules natively
import Employee from "../models/Employee.js";

// POST /api/payslip
export const createPayslip = async(req, res) => {
    try {
        // Default allowances and deductions to 0 if not provided in the request
        const { employeeId, month, year, basicSalary, allowances = 0, deductions = 0 } = req.body;

        // Only check for fields that are strictly required and cannot be 0
        if (!employeeId || !month || !year || basicSalary === undefined) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const netSalary = Number(basicSalary) + Number(allowances) - Number(deductions);

        const payslip = await Payslip.create({
            employeeId,
            month: Number(month),
            year: Number(year),
            basicSalary: Number(basicSalary),
            allowances: Number(allowances),
            deductions: Number(deductions),
            netSalary
        });

        return res.json({ success: true, data: payslip });
    } catch (error) {
        console.error("Error creating payslip:", error);
        return res.status(500).json({ error: "Failed to create payslip" });
    }
};

// GET /api/payslip
export const getPayslips = async(req, res) => {
    try {
        const session = req.session || {};
        const isAdmin = session.role === "ADMIN";

        if (isAdmin) {
            const payslips = await Payslip.find().populate("employeeId").sort({ createdAt: -1 });
            const data = payslips.map((payslip) => {
                const object = payslip.toObject();
                return {
                    ...object,
                    id: object._id.toString(),
                    employee: object.employeeId,
                    // Safety check in case the employee was deleted from the DB
                    employeeId: object.employeeId ? object.employeeId._id.toString() : null,
                };
            });
            return res.json({ data });
        } else {
            // Guard clause for unauthenticated users
            if (!session.userId) {
                return res.status(401).json({ error: "Unauthorized: No session found" });
            }

            const employee = await Employee.findOne({ userId: session.userId });
            if (!employee) {
                return res.status(404).json({ error: "Employee not found" });
            }

            const payslips = await Payslip.find({
                employeeId: employee._id
            }).sort({ createdAt: -1 });

            return res.json({ data: payslips });
        }
    } catch (error) {
        console.error("Error fetching payslips:", error);
        return res.status(500).json({ error: "Failed to fetch payslips" });
    }
};

// GET /api/payslip/:id
export const getPayslipById = async(req, res) => {
    try {
        const payslip = await Payslip.findById(req.params.id).populate("employeeId").lean();

        if (!payslip) {
            return res.status(404).json({ error: "Payslip not found" });
        }

        const result = {
            ...payslip,
            id: payslip._id.toString(),
            employee: payslip.employeeId,
        };

        return res.json(result);
    } catch (error) {
        console.error("Error fetching payslip by ID:", error);
        return res.status(500).json({ error: "Failed to fetch payslip" });
    }
};