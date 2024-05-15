import express, { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { getAllUsers, getUser } from '../services/user';

export const userRouter = express.Router();


userRouter.get('/users', auth, async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.json({data: users});
});

userRouter.get('/users/:id', auth, async (req: Request, res: Response) => {
    const user = await getUser(req.params.id)
    res.json({data: user});
});

userRouter.post('/users', auth, (req: Request, res: Response) => {
    res.send('USER POST');
});

userRouter.patch('/users/:id', auth, (req: Request, res: Response) => {
    res.send('USER PATCH INDIVIDUAL');
});

userRouter.delete('/users/:id', auth, (req: Request, res: Response) => {
    res.send('USER DELETE');
});