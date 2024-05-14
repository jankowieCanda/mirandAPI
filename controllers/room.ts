import express, { Request, Response, NextFunction } from 'express';
import { Room } from '../interfaces/Room';
const allrooms = require('../data/rooms.json');

export const roomController = express.Router();


roomController.get('/rooms', (req: Request, res: Response) => {
    res.json(allrooms);
});

roomController.get('/rooms/:id', (req: Request, res: Response) => {
    res.json(allrooms.find((room: Room) => room.Room_ID === parseInt(req.params.id)));
});

roomController.post('/rooms', (req: Request, res: Response) => {
    res.send('ROOM POST');
});

roomController.patch('/rooms/:id', (req: Request, res: Response) => {
    res.send('ROOM PATCH INDIVIDUAL');
});

roomController.delete('/rooms/:id', (req: Request, res: Response) => {
    res.send('ROOMS DELETE');
});