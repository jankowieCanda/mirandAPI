
import { APIError } from '../APIError';
import { Room } from '../interfaces/Room';
const roomsData = require('../data/rooms.json');


export const getAllRooms = async () => {
    return roomsData;
}

export const getRoom = async (id: number) => {
    const room = roomsData.find((room: Room) => room.Room_ID === id);
    if(!room) {
        throw new APIError(404, 'Room not found', true);
    }
    return room;
}

export const updateRoom = async (obj: Room) => {
    return;
}

export const deleteRoom = async (id:number) => {
    return;
}

export const createRoom = async (obj: Room) => {
    return;
}