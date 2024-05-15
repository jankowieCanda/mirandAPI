import express, { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { getAllRooms, getRoom } from '../services/room';

export const roomRouter = express.Router();

roomRouter.get('/rooms', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const rooms = await getAllRooms();
        res.json({data: rooms});
    } catch(e) {
        next(e);
    }
});

roomRouter.get('/rooms/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const room = await getRoom(parseInt(req.params.id));
        res.json({data: room});
    } catch(e) {
        next(e);
    }
});

roomRouter.post('/rooms', auth, (req: Request, res: Response) => {
    res.send('ROOM POST');
});

roomRouter.patch('/rooms/:id', auth, (req: Request, res: Response) => {
    res.send('ROOM PATCH INDIVIDUAL');
});

roomRouter.delete('/rooms/:id', auth, (req: Request, res: Response) => {
    res.send('ROOMS DELETE');
});