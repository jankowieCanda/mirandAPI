import { APIError } from '../APIError';
import { User } from '../interfaces/User';
const usersData = require('../data/users.json');

export const getAllUsers = async () => {
    return usersData;
}

export const getUser = async (id: string) => {
    const user = usersData.find((user: User) => user.Employee_ID === id);
    if(!user) {
        throw new APIError(404, 'User not found', true);
    }
    return user;
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