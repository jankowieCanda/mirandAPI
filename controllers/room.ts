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
        const room = await getRoom(parseInt(req.params.id));
        res.json({data: room});
    } catch(e) {
        next(e);
    }
});

roomRouter.post('/rooms', auth, async (req: Request, res: Response) => {
    const newRoom = createRoom(req.body)
    res.json({data: newRoom});
});

roomRouter.patch('/rooms/:id', auth, (req: Request, res: Response) => {
    const patch = req.body;
    const patchedRoom = updateRoom(parseInt(req.params.id), patch);
    res.json({data: patchedRoom});
});

roomRouter.delete('/rooms/:id', auth, (req: Request, res: Response) => {
    const deletedRoom = deleteRoom(parseInt(req.params.id))
    res.json({data: deletedRoom});
});