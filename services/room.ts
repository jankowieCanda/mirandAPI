import { APIError } from '../APIError';
import { Room } from '../interfaces/Room';
import { RoomModel } from '../models/Room';

export const getAllRooms = async () => {
    const allRooms = RoomModel.find();
    return allRooms;
}

export const getRoom = async (id: string) => {
    const room = await RoomModel.findById({_id: id});
    if(!room) {
        throw new APIError(404, 'Room not found', true);
    }
    return room;
}

export const updateRoom = async (id: string, obj: Room) => {
    const room = await RoomModel.findByIdAndUpdate({_id: id}, obj);
    if(!room) {
        throw new APIError(404, 'Booking not found', true);
    }
    return room;
}

export const deleteRoom = async (id: string) => {
    const room = RoomModel.findByIdAndDelete({_id: id});
    if(!room) {
        throw new APIError(404, 'Booking not found', true);
    }
    return room;
}

export const createRoom = async (obj: Room) => {
    const newRoom = new RoomModel(obj);
    await newRoom.save();
}