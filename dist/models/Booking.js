"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModel = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    Guest: String,
    Reservation_ID: { type: Number, unique: true },
    Order_Date: String,
    Check_In: String,
    Check_Out: String,
    Special_Request: String,
    Room_Type: String,
    Room_Number: Number,
    Status: String
});
exports.BookingModel = (0, mongoose_1.model)('bookings', bookingSchema);
