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
        const booking = await getBooking(req.params.id);
        res.json({data: booking});
    } catch(e) {
        next(e);
    }
});

bookingRouter.post('/bookings', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newBooking = await createBooking(req.body);
        res.json({data: newBooking});
    } catch(e) {
        next(e);
    }
});

bookingRouter.patch('/bookings/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await updateBooking(req.params.id, req.body);
        res.json({data: `Booking with _id [${req.params.id}] updated!`});
    } catch(e) {
        next(e);
    }
});

bookingRouter.delete('/bookings/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        await deleteBooking(req.params.id)
        res.json({data: `Booking with _id [${req.params.id}] deleted!`});
    } catch(e) {
        next(e)
    }
});