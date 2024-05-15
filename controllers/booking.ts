import express, { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { getAllBookings, getBooking } from '../services/booking';

export const bookingRouter = express.Router();


bookingRouter.get('/bookings', auth, async (req: Request, res: Response) => {
    const bookings = await getAllBookings();
    res.json({data: bookings});
});

bookingRouter.get('/bookings/:id', auth, async (req: Request, res: Response) => {
    const booking = await getBooking(parseInt(req.params.id))
    res.json({data: booking});
});

bookingRouter.post('/bookings', auth, (req: Request, res: Response) => {
    res.send('booking POST');
});

bookingRouter.patch('/bookings/:id', auth, (req: Request, res: Response) => {
    res.send('booking PATCH INDIVIDUAL');
});

bookingRouter.delete('/bookings/:id', auth, (req: Request, res: Response) => {
    res.send('booking DELETE');
});