import { faker } from '@faker-js/faker';
import { Booking } from './interfaces/Booking';
import { createBooking } from './services/booking';
import { Room } from './interfaces/Room';
import { createRoom } from './services/room';
import { User } from './interfaces/User';
import { createUser } from './services/user';
import { Contact } from './interfaces/Contact';
import { connection } from './myDB';
import { sqlInsert } from './utils/preparedStatements';
const bcrypt = require('bcryptjs');

const ROUNDS = 10;

// DROP TABLES
connection.execute('DROP TABLE IF EXISTS booking, room, user, contact;');

// CREATE TABLES

connection.execute('CREATE TABLE contact(Id INT AUTO_INCREMENT, Date DATE, Hour TIME, Message_ID INT, Subject VARCHAR(100), Review LONGTEXT, Picture VARCHAR(255), Customer_Name VARCHAR(100), mail VARCHAR(50), Phone VARCHAR(25),CONSTRAINT PK_Id PRIMARY KEY(Id));');

connection.execute('CREATE TABLE user(Id INT AUTO_INCREMENT, Picture VARCHAR(255), Full_Name VARCHAR(100), Employee_ID INT, Email VARCHAR(50), Password VARCHAR(255), Start_Date DATE, Description VARCHAR(100), Contact VARCHAR(25), Status VARCHAR(25),CONSTRAINT PK_Id PRIMARY KEY(Id));');

connection.execute('CREATE TABLE room(Id INT AUTO_INCREMENT, Picture VARCHAR(255), Room_Number INT, Room_ID INT, Room_Type VARCHAR(50), Amenities VARCHAR(255), Price FLOAT, Offer_Price FLOAT, Status VARCHAR(25),CONSTRAINT PK_Id PRIMARY KEY(Id));');

connection.execute('CREATE TABLE booking(Id INT AUTO_INCREMENT, Guest VARCHAR(100), Reservation_ID INT, Order_Date DATE, Check_In DATE, Check_Out DATE, Special_Request VARCHAR(255), Room_Type VARCHAR(50), Room_Number INT, RoomID INT, Status VARCHAR(25),CONSTRAINT PK_Id PRIMARY KEY(Id), CONSTRAINT FK_Booking_RoomID FOREIGN KEY(RoomID) REFERENCES room(Id));');


function createBookings() {

    let bookings = [];

    for(let i = 0; i < ROUNDS; i++) {
        let guest = faker.person.fullName();
        let reservation_ID = faker.number.int({min: 1, max: 1000});
        let order_Date = faker.date.anytime().toISOString().slice(0, 10);
       let check_In = faker.date.future({refDate: order_Date}).toISOString().slice(0, 10);
        let check_Out = faker.date.future({refDate: check_In}).toISOString().slice(0, 10);
        let special_Request = faker.lorem.sentence({min: 5, max: 10});
        let room_Type = faker.helpers.arrayElement([
            'Single Bed',
            'Double Bed',
            'Double Superior',
            'Suite'
        ]);
        let room_Number = faker.number.int({min: 100, max: 499});
        let status = faker.helpers.arrayElement([
            'Check In',
            'Check Out',
            'In Progress'
        ]);

        let booking: Booking = {
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
    };

    bookings.forEach(async (booking) => {
        await createBooking(booking);
    });

}

function createRooms() {

    let rooms = [];
    
    for(let i = 0; i < ROUNDS; i++) {
        let picture = faker.image.avatar();
        let room_Number = faker.number.int({min: 100, max: 499});
        let room_ID = faker.number.int({min: 1000, max: 4999});
        let room_Type = faker.helpers.arrayElement([
            'Single Bed',
            'Double Bed',
            'Double Superior',
            'Suite'
        ]);
        let amenities = faker.helpers.arrayElements([
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
        ], {min: 5, max: 10});
        let price = parseFloat(faker.commerce.price({min: 100, max: 1000, symbol: ''}));
        let offerPrice = price * 0.85; 
        let status = faker.helpers.arrayElement([
            'Available',
            'Booked'
        ]);

        let room: Room = {
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
    };

    rooms.forEach(async (room) => {
        await createRoom(room);
    });
}

function createUsers() {

    let users = [];

    for(let i = 0; i < ROUNDS; i++) {
        let picture = faker.image.avatar();
        let name = faker.person.fullName();
        let emp_ID = faker.number.int({min: 1000, max: 100000});
        let email = faker.internet.email({firstName: name, provider: 'mirandashboard.com'});
        let password = process.env.PASSWORD;
        let start = faker.date.past().toISOString().slice(0, 10);
        let desc = faker.person.jobDescriptor();
        let contact = faker.phone.number();
        let status = faker.helpers.arrayElement([
            'Active',
            'Inactive'
        ]);

        let user: User = {
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
    };

    users.forEach(async (user) => {
        await createUser(user);
    });

}

function createContacts() {
    let reviews = [];

    for(let i = 0; i < ROUNDS; i++) {
        let date = faker.date.past().toISOString().slice(0, 10);
        let hour = faker.date.anytime().toTimeString().slice(0,7);
        let msn_ID = faker.number.int({min: 1000, max: 100000});
        let subject = faker.lorem.sentence({min: 5, max: 10});
        let rev = faker.lorem.sentences({min: 10, max: 15});
        let picture = faker.image.avatar();
        let name = faker.person.fullName();
        let email = faker.internet.email({firstName: name});
        let phone = faker.phone.number();

        let review: Contact = {
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
    };

    reviews.forEach((review) => {
        sqlInsert('contact', review);
    });

}

createContacts();
createUsers();
createRooms();
createBookings();

connection.end();
