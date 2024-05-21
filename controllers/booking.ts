import express, { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { createBooking, deleteBooking, getAllBookings, getBooking, updateBooking } from '../services/booking';

export const bookingRouter = express.Router();


bookingRouter.get('/bookings', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookings = await getAllBookings();
        res.json({data: bookings});
    } catch (e) {
        next(e);
    }
});

bookingRouter.get('/bookings/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const booking = await getBooking(parseInt(req.params.id));
        res.json({data: booking});
    } catch(e) {
        next(e);
    }
});

bookingRouter.post('/bookings', auth, (req: Request, res: Response) => {
    const newBooking = createBooking(req.body);
    res.json({data: newBooking});
});

bookingRouter.patch('/bookings/:id', auth, (req: Request, res: Response) => {
    const patchedObj = req.body;
    const patchedBooking = updateBooking(parseInt(req.params.id), patchedObj);
    res.json({data: patchedBooking});
});

bookingRouter.delete('/bookings/:id', auth, (req: Request, res: Response) => {
    const deletedBooking = deleteBooking(parseInt(req.params.id))
    res.json({data: deletedBooking});
});