import express, { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../services/room';

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
        const room = await getRoom(req.params.id);
        res.json({data: room});
    } catch(e) {
        next(e);
    }
});

roomRouter.post('/rooms', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newRoom = createRoom(req.body);
        res.json({data: newRoom});
    } catch(e) {
        next(e);
    }
});

roomRouter.patch('/rooms/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await updateRoom(req.params.id, req.body);
        res.json({data: `Room with _id [${req.params.id}] updated!`});
    } catch(e) {
        next(e);
    }
});

roomRouter.delete('/rooms/:id', auth, async (req: Request, res: Response) => {
    await deleteRoom(req.params.id)
    res.json({data: `Room with _id [${req.params.id}] deleted!`});
});