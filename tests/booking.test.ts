import { app } from "../app";
import { UserModel } from "../models/User";
import { server } from '../server';
import jwt from 'jsonwebtoken';
import { createBooking, getAllBookings, getBooking } from "../services/booking";
import { resolve } from "path";
const request = require('supertest');

let token;
let user;

beforeAll(() => {
    user = async () => await UserModel.find({Employee_ID: 1});
    token = jwt.sign({id: user.Employee_ID, email: user.Email}, process.env.JWT_SECRET);
})

afterAll(() => {
    console.log(server.listening);
    server.close();
    console.log(server.listening);
})

describe('GET /bookings', () => {
    
    test('should get allBookings', async () => {
        let bookings = async () => await getAllBookings();
        Response = await request(app)
        .get('/bookings')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
        expect(bookings);
    });
    test('should get one booking with _id', async () => {
        let booking = await getBooking('664f728646ae18826aef4823');
        const response = await request(app)
        .get(`/bookings/664f728646ae18826aef4823`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
        expect(booking.Reservation_ID).toBe(459);
    });
    test('should throw error booking not found', async () => {
        const response = await request(app)
        .get('/bookings/884e35d482c36c1f9b598ac2')
        .set('Authorization', `Bearer ${token}`)
        .expect(404, {"message":"Booking not found"})
    });
    test('should throw error unauthorized', async () => {
        const response = await request(app)
        .get('/bookings/664f728646ae18826aef4823')
        .set('Authorization', `${token}`)
        .expect(401, {message: 'Unauthorized credentials!'})
    });
});

describe.only('POST /bookings', () => {
    test('should create a new booking', async () => {
        let newBooking = {
            "Guest": "Prueba",
            "Reservation_ID": 8999999999988,
            "Order_Date": "2023-09-15",
            "Check_In": "2023-09-22",
            "Check_Out": "2024-08-14",
            "Special_Request": "special request de prueba",
            "Room_Type": "Suite",
            "Room_Number": 2003,
            "Status": "Check In"
        };
        const response = await request(app)
        .post('/bookings')
        .send(newBooking)
        .set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(200);
        
    });
});