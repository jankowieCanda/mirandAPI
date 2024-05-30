"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModel = void 0;
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
    Picture: String,
    Room_Number: Number,
    Room_ID: { type: Number, unique: true },
    Room_Type: String,
    Amenities: (Array),
    Price: Number,
    Offer_Price: Number,
    Status: String,
});
exports.RoomModel = (0, mongoose_1.model)('rooms', roomSchema);
