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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const user_1 = require("../services/user");
exports.userRouter = express_1.default.Router();
exports.userRouter.get('/users', auth_1.auth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_1.getAllUsers)();
        res.json({ data: users });
    }
    catch (e) {
        next(e);
    }
}));
exports.userRouter.get('/users/:id', auth_1.auth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_1.getUser)(req.params.id);
        res.json({ data: user });
    }
    catch (e) {
        next(e);
    }
}));
exports.userRouter.post('/users', auth_1.auth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, user_1.createUser)(req.body);
        res.json({ data: newUser });
    }
    catch (e) {
        next(e);
    }
}));
exports.userRouter.patch('/users/:id', auth_1.auth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, user_1.updateUser)(req.params.id, req.body);
        res.json({ data: `User with _id [${req.params.id}] updated!` });
    }
    catch (e) {
        next(e);
    }
}));
exports.userRouter.delete('/users/:id', auth_1.auth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, user_1.deleteUser)(req.params.id);
        res.json({ data: `User with _id [${req.params.id}] deleted!` });
    }
    catch (e) {
        next(e);
    }
}));
