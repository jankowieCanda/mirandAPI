import { APIError } from '../APIError';
import { User } from '../interfaces/User';
import { UserModel } from '../models/User';

export const getAllUsers = async () => {
    const allUsers = await UserModel.find();
    return allUsers;
}

export const getUser = async (id: string) => {
    const user = await UserModel.findById({_id: id});
    if(!user) {
        throw new APIError(404, 'User not found', true);
    }
    return user;
}

export const updateUser = async (id: string, obj: User) => {
    const user = await UserModel.findByIdAndUpdate({_id: id}, obj);
    if(!user) {
        throw new APIError(404, 'User not found', true);
    }
    return user;
}

export const deleteUser = async (id: string) => {
    const user = await UserModel.findByIdAndDelete({_id: id});
    if(!user) {
        throw new APIError(404, 'User not found', true);
    }
    return user;
}

export const createUser = async (obj: User) => {
    const newUser = new UserModel(obj);
    await newUser.save();
}