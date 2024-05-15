import { APIError } from '../APIError';
import { Booking } from '../interfaces/Booking';
const bookingsData = require('../data/bookings.json');

export const getAllBookings = async () => {
    return bookingsData;
}

export const getBooking = async (id: number) => {
    const booking = bookingsData.find((booking: Booking) => booking.Reservation_ID === id);
    if(!booking) {
        throw new APIError(404, 'Booking not found', true);
    }
    return booking;
}

export const updateBooking = async (obj: Booking) => {
    return;
}

export const deleteBooking = async (id: number) => {
    return;
}

export const createBooking = async (obj: Booking) => {
    return;
}