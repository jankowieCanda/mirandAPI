
import { Room } from '../interfaces/Room';
const roomsData = require('../data/rooms.json');


export const getAllRooms = async () => {
    return roomsData;
}

export const getRoom = async (id: number) => {
    return roomsData.find((room: Room) => room.Room_ID === id);
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