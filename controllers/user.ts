import express, { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../services/user';

export const userRouter = express.Router();


userRouter.get('/users', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getAllUsers();
        res.json({data: users});
    } catch(e) {
        next(e);
    }
});

userRouter.get('/users/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getUser(req.params.id)
        res.json({data: user});
    } catch(e) {
        next(e);
    }
});

userRouter.post('/users', auth, async (req: Request, res: Response) => {
    const newUser = await createUser(req.body)
    res.json({data: newUser});
});

userRouter.patch('/users/:id', auth, async (req: Request, res: Response) => {
    const patch = req.body;
    const patchedUser = await updateUser(req.params.id, patch);
    res.json({data: patchedUser});
});

userRouter.delete('/users/:id', auth, async (req: Request, res: Response) => {
    const deletedUser = deleteUser(req.params.id)
    res.json({data: deletedUser});
});