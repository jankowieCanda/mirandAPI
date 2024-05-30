"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    Picture: String,
    Full_Name: String,
    Employee_ID: { type: Number, unique: true },
    Email: String,
    Password: String,
    Start_Date: String,
    Description: String,
    Contact: String,
    Status: String,
});
exports.UserModel = (0, mongoose_1.model)('users', userSchema);
