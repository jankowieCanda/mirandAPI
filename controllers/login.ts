
import express, { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

export const loginRouter = express.Router();

loginRouter.post('/login', (req: Request, res: Response) => {
    /* const {email, password} = req.body */
    if(EMAIL === 'user@mirandashboard.com' && PASSWORD === 'mirandashboard') {
        const token = jwt.sign(JSON.stringify({id: 1, email: EMAIL}), JWT_SECRET)
        return res.json({token});
    }
    return res.status(401).json({error: 'pone bien las cosas pelotudo'});
})