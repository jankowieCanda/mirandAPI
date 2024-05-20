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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = exports.deleteBooking = exports.updateBooking = exports.getBooking = exports.getAllBookings = void 0;
const APIError_1 = require("../APIError");
const bookingsData = require('../data/bookings.json');
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    return bookingsData;
});
exports.getAllBookings = getAllBookings;
const getBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = bookingsData.find((booking) => booking.Reservation_ID === id);
    if (!booking) {
        throw new APIError_1.APIError(404, 'Booking not found', true);
    }
    return booking;
});
exports.getBooking = getBooking;
const updateBooking = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    return;
});
exports.updateBooking = updateBooking;
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return;
});
exports.deleteBooking = deleteBooking;
const createBooking = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    return;
});
exports.createBooking = createBooking;
