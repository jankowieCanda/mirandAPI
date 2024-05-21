import { Schema, model } from "mongoose";
import { Booking } from "../interfaces/Booking";

const bookingSchema = new Schema<Booking>({
    Guest: String,
    Reservation_ID: {type: Number, unique: true},
    Order_Date: String,
    Check_In: String,
    Check_Out: String,
    Special_Request: String,
    Room_Type: String,
    Room_Number: Number,
    Status: String
});

export const BookingModel = model('BookingModel', bookingSchema);