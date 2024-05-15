import express, { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const JWT_SECRET = process.env.JWT_SECRET;

dotenv.config();

export const auth = (req: Request, res: Response, next: NextFunction) => {
    let authorized: boolean;
    const authHeader = req.get('Authorization');
    if(!authHeader) {
        authorized = false;
        return res.status(401).json({message: 'Auth header not found!'})
    }
    const token = authHeader.split('Bearer ')[1];
    try {
        const tokenVerify = jwt.verify(token, JWT_SECRET);
        authorized = true;
        next();
    } catch(e) {
        console.error(e);
        return res.status(401).json({message: 'Unauthorized credentials!'})
    }
    return authorized;
}