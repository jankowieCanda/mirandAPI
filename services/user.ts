import { User } from '../interfaces/User';
const usersData = require('../data/users.json');

export const getAllUsers = async () => {
    return usersData;
}

export const getUser = async (id: string) => {
    return usersData.find((user: User) => user.Employee_ID === id);
}

export const updateUser = async (obj: User) => {
    return;
}

export const deleteUser = async (id: string) => {
    return;
}

export const createUser = async (obj: User) => {
    return;
}