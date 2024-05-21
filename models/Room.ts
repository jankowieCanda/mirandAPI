import { Schema, model } from "mongoose"
import { Room } from "../interfaces/Room"

const roomSchema = new Schema<Room>({
    Picture: String,
    Room_Number: Number,
    Room_ID: {type: Number, unique: true},
    Room_Type: String,
    Amenities: Array<String>,
    Price: Number,
    Offer_Price: Number,
    Status: String,
});

export const RoomModel = model('rooms', roomSchema);