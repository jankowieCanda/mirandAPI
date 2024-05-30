"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const JWT_SECRET = process.env.JWT_SECRET;
dotenv_1.default.config();
const auth = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'Auth header not found!' });
    }
    const token = authHeader.split('Bearer ')[1];
    try {
        const tokenVerify = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        return next();
    }
    catch (e) {
        console.error(e);
        return res.status(401).json({ message: 'Unauthorized credentials!' });
    }
};
exports.auth = auth;
