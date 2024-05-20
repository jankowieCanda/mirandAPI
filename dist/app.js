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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const login_1 = require("./controllers/login");
const booking_1 = require("./controllers/booking");
const room_1 = require("./controllers/room");
const user_1 = require("./controllers/user");
const contact_1 = require("./controllers/contact");
const path_1 = __importDefault(require("path"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(login_1.loginRouter);
exports.app.use(booking_1.bookingRouter);
exports.app.use(room_1.roomRouter);
exports.app.use(user_1.userRouter);
exports.app.use(contact_1.contactRouter);
exports.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.app.get('/', (req, res) => {
    res.render('index.html');
});
exports.app.use((err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.error(err);
    return res.status((_a = err.status) !== null && _a !== void 0 ? _a : 500).json({ message: err.safe ? err.message : 'Fatal Error!' });
}));
