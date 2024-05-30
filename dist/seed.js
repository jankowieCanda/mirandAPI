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
const faker_1 = require("@faker-js/faker");
const booking_1 = require("./services/booking");
const Booking_1 = require("./models/Booking");
const Room_1 = require("./models/Room");
const room_1 = require("./services/room");
const user_1 = require("./services/user");
const User_1 = require("./models/User");
const Contact_1 = require("./models/Contact");
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt = require('bcryptjs');
const db = require('./db');
dotenv_1.default.config();
const ROUNDS = 10;
Booking_1.BookingModel.collection.drop();
Room_1.RoomModel.collection.drop();
User_1.UserModel.collection.drop();
Contact_1.ContactModel.collection.drop();
function sowBookings() {
    let bookings = [];
    for (let i = 0; i < ROUNDS; i++) {
        let guest = faker_1.faker.person.fullName();
        let reservation_ID = faker_1.faker.number.int({ min: 1, max: 1000 });
        let order_Date = faker_1.faker.date.anytime().toISOString().slice(0, 10);
        let check_In = faker_1.faker.date.future({ refDate: order_Date }).toISOString().slice(0, 10);
        let check_Out = faker_1.faker.date.future({ refDate: check_In }).toISOString().slice(0, 10);
        let special_Request = faker_1.faker.lorem.sentence({ min: 5, max: 10 });
        let room_Type = faker_1.faker.helpers.arrayElement([
            'Single Bed',
            'Double Bed',
            'Double Superior',
            'Suite'
        ]);
        let room_Number = faker_1.faker.number.int({ min: 100, max: 499 });
        let status = faker_1.faker.helpers.arrayElement([
            'Check In',
            'Check Out',
            'In Progress'
        ]);
        let booking = {
            Guest: guest,
            Reservation_ID: reservation_ID,
            Order_Date: order_Date,
            Check_In: check_In,
            Check_Out: check_Out,
            Special_Request: special_Request,
            Room_Type: room_Type,
            Room_Number: room_Number,
            Status: status
        };
        bookings.push(booking);
    }
    ;
    bookings.forEach((booking) => __awaiter(this, void 0, void 0, function* () {
        yield (0, booking_1.createBooking)(booking);
    }));
}
function sowRooms() {
    let rooms = [];
    for (let i = 0; i < ROUNDS; i++) {
        let picture = faker_1.faker.image.avatar();
        let room_Number = faker_1.faker.number.int({ min: 100, max: 499 });
        let room_ID = faker_1.faker.number.int({ min: 1000, max: 4999 });
        let room_Type = faker_1.faker.helpers.arrayElement([
            'Single Bed',
            'Double Bed',
            'Double Superior',
            'Suite'
        ]);
        let amenities = faker_1.faker.helpers.arrayElements([
            "Free WiFi",
            "Swimming pool",
            "Gym",
            "Spa",
            "Restaurant",
            "Bar",
            "Room service",
            "24-hour reception",
            "Breakfast included",
            "Air conditioning",
            "Parking",
            "Accessible for disabled guests",
            "Business center",
            "Meeting rooms",
            "Laundry service",
            "Concierge service",
            "Airport shuttle",
            "Pet-friendly",
            "Cable TV",
            "Minibar",
            "Safe",
            "Babysitting service",
            "Bicycle rental",
            "Coffee/tea maker in room",
            "Hairdryer",
            "Iron and ironing board",
            "Wake-up service",
            "Luggage storage",
            "Gift shop",
            "Car rental service",
            "Children's playground",
            "Terrace",
            "Garden",
            "Library",
            "Game room",
            "Sports activities",
            "Ticket service",
            "Common lounge area"
        ], { min: 5, max: 10 });
        let price = parseFloat(faker_1.faker.commerce.price({ min: 100, max: 1000, symbol: '' }));
        let offerPrice = price * 0.85;
        let status = faker_1.faker.helpers.arrayElement([
            'Available',
            'Booked'
        ]);
        let room = {
            Picture: picture,
            Room_Number: room_Number,
            Room_ID: room_ID,
            Room_Type: room_Type,
            Amenities: amenities,
            Price: price,
            Offer_Price: offerPrice,
            Status: status
        };
        rooms.push(room);
    }
    ;
    rooms.forEach((room) => __awaiter(this, void 0, void 0, function* () {
        yield (0, room_1.createRoom)(room);
    }));
}
function sowUsers() {
    let users = [];
    for (let i = 0; i < ROUNDS; i++) {
        let picture = faker_1.faker.image.avatar();
        let name = faker_1.faker.person.fullName();
        let emp_ID = faker_1.faker.number.int({ min: 1000, max: 100000 });
        let email = faker_1.faker.internet.email({ firstName: name, provider: 'mirandashboard.com' });
        let password = process.env.PASSWORD;
        let start = faker_1.faker.date.past().toISOString().slice(0, 10);
        let desc = faker_1.faker.person.jobDescriptor();
        let contact = faker_1.faker.phone.number();
        let status = faker_1.faker.helpers.arrayElement([
            'Active',
            'Inactive'
        ]);
        let user = {
            Picture: picture,
            Full_Name: name,
            Employee_ID: emp_ID,
            Email: email,
            Password: bcrypt.hashSync(password, ROUNDS),
            Start_Date: start,
            Description: desc,
            Contact: contact,
            Status: status
        };
        users.push(user);
    }
    ;
    users.forEach((user) => __awaiter(this, void 0, void 0, function* () {
        yield (0, user_1.createUser)(user);
    }));
}
function sowContacts() {
    let reviews = [];
    for (let i = 0; i < ROUNDS; i++) {
        let date = faker_1.faker.date.past().toISOString().slice(0, 10);
        let hour = faker_1.faker.date.anytime().toTimeString().slice(0, 7);
        let msn_ID = faker_1.faker.number.int({ min: 1000, max: 100000 });
        let subject = faker_1.faker.lorem.sentence({ min: 5, max: 10 });
        let rev = faker_1.faker.lorem.sentences({ min: 10, max: 15 });
        let picture = faker_1.faker.image.avatar();
        let name = faker_1.faker.person.fullName();
        let email = faker_1.faker.internet.email({ firstName: name });
        let phone = faker_1.faker.phone.number();
        let review = {
            date: date,
            hour: hour,
            message_id: msn_ID,
            subject: subject,
            review: rev,
            picture: picture,
            customer_name: name,
            mail: email,
            phone: phone
        };
        reviews.push(review);
    }
    ;
    reviews.forEach((review) => __awaiter(this, void 0, void 0, function* () {
        yield Contact_1.ContactModel.collection.insertOne(review);
    }));
}
sowBookings();
sowRooms();
sowUsers();
sowContacts();
