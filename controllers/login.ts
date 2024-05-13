import express, { Request, Response, NextFunction } from 'express';

export const loginController = express.Router();

loginController.get('/login', (req: Request, res: Response) => {
    res.send('LOGIN');
})