import { Booking } from '../interfaces/Booking';
const bookingsData = require('../data/bookings.json');

export const getAllBookings = async () => {
    return bookingsData;
}

export const getBooking = async (id: number) => {
    return bookingsData.find((booking: Booking) => booking.Reservation_ID === id);
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