"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const User_1 = require("../models/User");
const server_1 = require("../server");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const booking_1 = require("../services/booking");
const request = require('supertest');
let token;
let user;
beforeAll(() => {
    user = () => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.UserModel.find({ Employee_ID: 1 }); });
    token = jsonwebtoken_1.default.sign({ id: user.Employee_ID, email: user.Email }, process.env.JWT_SECRET);
});
afterAll(() => {
    console.log(server_1.server.listening);
    server_1.server.close();
    console.log(server_1.server.listening);
});
describe('GET /bookings', () => {
    test('should get allBookings', () => __awaiter(void 0, void 0, void 0, function* () {
        let bookings = () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, booking_1.getAllBookings)(); });
        Response = yield request(app_1.app)
            .get('/bookings')
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
        expect(bookings);
    }));
    test('should get one booking with _id', () => __awaiter(void 0, void 0, void 0, function* () {
        let booking = yield (0, booking_1.getBooking)('664f728646ae18826aef4823');
        const response = yield request(app_1.app)
            .get(`/bookings/664f728646ae18826aef4823`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
        expect(booking.Reservation_ID).toBe(459);
    }));
    test('should throw error booking not found', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .get('/bookings/884e35d482c36c1f9b598ac2')
            .set('Authorization', `Bearer ${token}`)
            .expect(404, { "message": "Booking not found" });
    }));
    test('should throw error unauthorized', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .get('/bookings/664f728646ae18826aef4823')
            .set('Authorization', `${token}`)
            .expect(401, { message: 'Unauthorized credentials!' });
    }));
});
describe.only('POST /bookings', () => {
    test('should create a new booking', () => __awaiter(void 0, void 0, void 0, function* () {
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
        const response = yield request(app_1.app)
            .post('/bookings')
            .send(newBooking)
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
});
