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
const usersData = require('../data/users.json');
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return usersData;
});
exports.getAllUsers = getAllUsers;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = usersData.find((user) => user.Employee_ID === id);
    if (!user) {
        throw new APIError_1.APIError(404, 'User not found', true);
    }
    return user;
});
exports.getUser = getUser;
const updateUser = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    return;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return;
});
exports.deleteUser = deleteUser;
const createUser = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    return;
});
exports.createUser = createUser;
