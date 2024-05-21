import { Schema, model } from "mongoose";
import { User } from "../interfaces/User";

const userSchema = new Schema<User>({
    Picture: String,
    Full_Name: String,
    Employee_ID: {type: String, unique: true},
    Email: String,
    Start_Date: String,
    Description: String,
    Contact: String,
    Status: String,
});

export const UserModel = model('UserModel', userSchema);