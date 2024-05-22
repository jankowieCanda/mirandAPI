import { Schema, model } from "mongoose";
import { User } from "../interfaces/User";

const userSchema = new Schema<User>({
    Picture: String,
    Full_Name: String,
    Employee_ID: {type: Number, unique: true},
    Email: String,
    Password: String,
    Start_Date: String,
    Description: String,
    Contact: String,
    Status: String,
});

export const UserModel = model('users', userSchema);