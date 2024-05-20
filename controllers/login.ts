
import express, { Request, Response, NextFunction} from 'express';
import { login } from '../services/login';

export const loginRouter = express.Router();

loginRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = await login(req.body);
        res.json({token});
    } catch(e) {
        next(e);
    }
})