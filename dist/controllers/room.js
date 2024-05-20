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
exports.roomRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const room_1 = require("../services/room");
exports.roomRouter = express_1.default.Router();
exports.roomRouter.get('/rooms', auth_1.auth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield (0, room_1.getAllRooms)();
        res.json({ data: rooms });
    }
    catch (e) {
        next(e);
    }
}));
exports.roomRouter.get('/rooms/:id', auth_1.auth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield (0, room_1.getRoom)(parseInt(req.params.id));
        res.json({ data: room });
    }
    catch (e) {
        next(e);
    }
}));
exports.roomRouter.post('/rooms', auth_1.auth, (req, res) => {
    res.send('ROOM POST');
});
exports.roomRouter.patch('/rooms/:id', auth_1.auth, (req, res) => {
    res.send('ROOM PATCH INDIVIDUAL');
});
exports.roomRouter.delete('/rooms/:id', auth_1.auth, (req, res) => {
    res.send('ROOMS DELETE');
});
