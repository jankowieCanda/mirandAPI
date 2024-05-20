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
exports.bookingRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const booking_1 = require("../services/booking");
exports.bookingRouter = express_1.default.Router();
exports.bookingRouter.get('/bookings', auth_1.auth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield (0, booking_1.getAllBookings)();
        res.json({ data: bookings });
    }
    catch (e) {
        next(e);
    }
}));
exports.bookingRouter.get('/bookings/:id', auth_1.auth, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield (0, booking_1.getBooking)(parseInt(req.params.id));
        res.json({ data: booking });
    }
    catch (e) {
        next(e);
    }
}));
exports.bookingRouter.post('/bookings', auth_1.auth, (req, res) => {
    res.send('booking POST');
});
exports.bookingRouter.patch('/bookings/:id', auth_1.auth, (req, res) => {
    res.send('booking PATCH INDIVIDUAL');
});
exports.bookingRouter.delete('/bookings/:id', auth_1.auth, (req, res) => {
    res.send('booking DELETE');
});
