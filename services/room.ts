
import { APIError } from '../APIError';
import { Room } from '../interfaces/Room';
import { RoomModel } from '../models/Room';

export const getAllRooms = async () => {
    const allRooms = RoomModel.find();
    return allRooms;
}

export const getRoom = async (id: number) => {
    const room = RoomModel.findOne({Room_ID: id});
    if(!room) {
        throw new APIError(404, 'Room not found', true);
    }
    return room;
}

export const updateRoom = async (id: number, obj: Room) => {
    const room = RoomModel.findOneAndUpdate({Room_ID: id}, obj);
    if(!room) {
        throw new APIError(404, 'Booking not found', true);
    }
    return room;
}

export const deleteRoom = async (id:number) => {
    const room = RoomModel.findOneAndDelete({Room_ID: id});
    if(!room) {
        throw new APIError(404, 'Booking not found', true);
    }
    return room;
}

export const createRoom = async (obj: Room) => {
    const newRoom = new RoomModel(obj);
    await newRoom.save();
    return newRoom;
}