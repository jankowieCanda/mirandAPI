import express, { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const JWT_SECRET = process.env.JWT_SECRET;

dotenv.config();

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('Authorization');
    const token = authHeader.split('Bearer ')[1];
    const tokenVerify = jwt.verify(token, JWT_SECRET);
    next();
    
}