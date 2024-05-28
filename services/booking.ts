import { APIError } from '../APIError';
import { Booking } from '../interfaces/Booking';
import { BookingModel } from '../models/Booking';

export const getAllBookings = async () => {
    const allBookings = await BookingModel.find();
    return allBookings;
}

export const getBooking = async (id: string) => {
    const booking = await BookingModel.findById({_id: id});
    if(!booking) {
        throw new APIError(404, 'Booking not found', true);
    }
    return booking;
}

export const updateBooking = async (id: string, obj: Booking) => {
    const booking = BookingModel.findByIdAndUpdate({_id: id}, obj);
    if(!booking) {
        throw new APIError(404, 'Booking not found', true);
    }
    return booking;
}

export const deleteBooking = async (id: string) => {
    const booking = BookingModel.findByIdAndDelete({_id: id});
    if(!booking) {
        throw new APIError(404, 'Booking not found', true);
    }
    return booking;
}

export const createBooking = async (obj: Booking) => {
    const newBooking = new BookingModel(obj)
    await newBooking.save();
}