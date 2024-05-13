import express, { Request, Response, NextFunction } from 'express';
import { Booking } from '../interfaces/Booking';
const allbooking = require('../data/bookings.json');

export const bookingController = express.Router();


bookingController.get('/bookings', (req: Request, res: Response) => {
    res.json(allbooking);
});

bookingController.get('/bookings/:id', (req: Request, res: Response) => {
    res.json(allbooking.find((booking: Booking) => booking.Reservation_ID === parseInt(req.params.id)));
});

bookingController.post('/bookings', (req: Request, res: Response) => {
    res.send('booking POST');
});

bookingController.patch('/bookings/:id', (req: Request, res: Response) => {
    res.send('booking PATCH INDIVIDUAL');
});

bookingController.delete('/bookings/:id', (req: Request, res: Response) => {
    res.send('booking DELETE');
});