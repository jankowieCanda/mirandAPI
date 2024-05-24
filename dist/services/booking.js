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
const Booking_1 = require("../models/Booking");
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBookings = yield Booking_1.BookingModel.find();
    return allBookings;
});
exports.getAllBookings = getAllBookings;
const getBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield Booking_1.BookingModel.findById({ _id: id });
    if (!booking || booking === null) {
        throw new APIError_1.APIError(404, 'Booking not found', true);
    }
    return booking;
});
exports.getBooking = getBooking;
const updateBooking = (id, obj) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = Booking_1.BookingModel.findByIdAndUpdate({ _id: id }, obj);
    if (!booking) {
        throw new APIError_1.APIError(404, 'Booking not found', true);
    }
    return booking;
});
exports.updateBooking = updateBooking;
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = Booking_1.BookingModel.findByIdAndDelete({ _id: id });
    if (!booking) {
        throw new APIError_1.APIError(404, 'Booking not found', true);
    }
    return booking;
});
exports.deleteBooking = deleteBooking;
const createBooking = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const newBooking = new Booking_1.BookingModel(obj);
    yield newBooking.save();
});
exports.createBooking = createBooking;
