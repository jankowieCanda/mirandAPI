import { APIError } from '../APIError';
import { Booking } from '../interfaces/Booking';
import { BookingModel } from '../models/Booking';

export const getAllBookings = async () => {
    const allBookings = await BookingModel.find();
    return allBookings;
}

export const getBooking = async (id: number) => {
    const booking = BookingModel.findOne({Reservation_ID: id});
    if(!booking) {
        throw new APIError(404, 'Booking not found', true);
    }
    return booking;
}

export const updateBooking = async (id: number, obj: Booking) => {
    const booking = BookingModel.findOneAndUpdate({Reservation_ID: id}, obj);
    if(!booking) {
        throw new APIError(404, 'Booking not found', true);
    }
    return booking;
}

export const deleteBooking = async (id: number) => {
    const booking = BookingModel.findOneAndDelete({Reservation_ID: id});
    if(!booking) {
        throw new APIError(404, 'Booking not found', true);
    }
    return booking;
}

export const createBooking = async (obj: Booking) => {
    const newBooking = new BookingModel(obj)
    await newBooking.save();
}