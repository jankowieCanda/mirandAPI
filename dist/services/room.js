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
exports.createRoom = exports.deleteRoom = exports.updateRoom = exports.getRoom = exports.getAllRooms = void 0;
const APIError_1 = require("../APIError");
const Room_1 = require("../models/Room");
const getAllRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    const allRooms = Room_1.RoomModel.find();
    return allRooms;
});
exports.getAllRooms = getAllRooms;
const getRoom = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const room = yield Room_1.RoomModel.findById({ _id: id });
    if (!room) {
        throw new APIError_1.APIError(404, 'Room not found', true);
    }
    return room;
});
exports.getRoom = getRoom;
const updateRoom = (id, obj) => __awaiter(void 0, void 0, void 0, function* () {
    const room = yield Room_1.RoomModel.findByIdAndUpdate({ _id: id }, obj);
    if (!room) {
        throw new APIError_1.APIError(404, 'Booking not found', true);
    }
    return room;
});
exports.updateRoom = updateRoom;
const deleteRoom = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const room = Room_1.RoomModel.findByIdAndDelete({ _id: id });
    if (!room) {
        throw new APIError_1.APIError(404, 'Booking not found', true);
    }
    return room;
});
exports.deleteRoom = deleteRoom;
const createRoom = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const newRoom = new Room_1.RoomModel(obj);
    yield newRoom.save();
});
exports.createRoom = createRoom;
