import express, { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { createBooking, getAllBookings, getBooking } from '../services/booking';

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
        const booking = await getBooking(parseInt(req.params.id))
        res.json({data: booking});
    } catch(e) {
        next(e);
    }
});

bookingRouter.post('/bookings', auth, (req: Request, res: Response) => {
    const booking = createBooking(req.body)
    res.json({data: 'Booking added!'});
});

bookingRouter.patch('/bookings/:id', auth, (req: Request, res: Response) => {
    res.send('booking PATCH INDIVIDUAL');
});

bookingRouter.delete('/bookings/:id', auth, (req: Request, res: Response) => {
    res.send('booking DELETE');
});