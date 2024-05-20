"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const APIError_1 = require("../APIError");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
function login(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = data;
        if (email === 'user@mirandashboard.com' && password === 'mirandashboard') {
            const user = { email, password };
            const token = jsonwebtoken_1.default.sign(user, JWT_SECRET);
            /* console.log(token) */
            return token;
        }
        else {
            throw new APIError_1.APIError(401, 'Invalid Credential!', true);
        }
    });
}
exports.login = login;
