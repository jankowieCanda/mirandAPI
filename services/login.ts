
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { APIError } from '../APIError';
import { UserModel } from '../models/User';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export async function login(data: {email: string, password: string}) {
    const {email, password} = data;
    const user = await UserModel.findOne({Email: email});
    if(user) {
        let passOK = bcrypt.compareSync(password, user.Password)
        if(passOK) {            
            const userOK = {id: user.Employee_ID, email: user.Email};
            const token = jwt.sign(userOK, JWT_SECRET);
            return token;
        } else {
            throw new APIError(401, 'Invalid Credential!', true);
        }
    }
}
