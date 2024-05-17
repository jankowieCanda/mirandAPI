
import express, { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { APIError } from '../APIError';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


export async function login(data: {email: string, password: string}) {
    const {email, password} = data;
    if(email === 'user@mirandashboard.com' && password === 'mirandashboard') {
        const user = {email, password};
        const token = jwt.sign(user, JWT_SECRET)
        /* console.log(token) */
        return token;
    } else {
        throw new APIError(401, 'Invalid Credential!', true);
    }
    
}