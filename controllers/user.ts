import express, { Request, Response, NextFunction } from 'express';
import { User } from '../interfaces/User';
const allUsers = require('../data/users.json');

export const userController = express.Router();


userController.get('/users', (req: Request, res: Response) => {
    res.json(allUsers);
});

userController.get('/users/:id', (req: Request, res: Response) => {
    res.json(allUsers.find((user: User) => user.Employee_ID === req.params.id));
});

userController.post('/users', (req: Request, res: Response) => {
    res.send('USER POST');
});

userController.patch('/users/:id', (req: Request, res: Response) => {
    res.send('USER PATCH INDIVIDUAL');
});

userController.delete('/users/:id', (req: Request, res: Response) => {
    res.send('USER DELETE');
});