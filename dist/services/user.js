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
exports.createUser = exports.deleteUser = exports.updateUser = exports.getUser = exports.getAllUsers = void 0;
const APIError_1 = require("../APIError");
const User_1 = require("../models/User");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield User_1.UserModel.find();
    return allUsers;
});
exports.getAllUsers = getAllUsers;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.UserModel.findById({ _id: id });
    if (!user) {
        throw new APIError_1.APIError(404, 'User not found', true);
    }
    return user;
});
exports.getUser = getUser;
const updateUser = (id, obj) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.UserModel.findByIdAndUpdate({ _id: id }, obj);
    if (!user) {
        throw new APIError_1.APIError(404, 'User not found', true);
    }
    return user;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.UserModel.findByIdAndDelete({ _id: id });
    if (!user) {
        throw new APIError_1.APIError(404, 'User not found', true);
    }
    return user;
});
exports.deleteUser = deleteUser;
const createUser = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new User_1.UserModel(obj);
    yield newUser.save();
});
exports.createUser = createUser;
