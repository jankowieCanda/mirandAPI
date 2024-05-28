import { app } from "../app";
import { UserModel } from "../models/User";
import { server } from '../server';
import jwt from 'jsonwebtoken';
import { getAllBookings, getBooking } from "../services/booking";
const request = require('supertest');

let token;
let user;

beforeEach(() => {
    user = async () => await UserModel.find({Employee_ID: 1});
    token = jwt.sign({id: user.Employee_ID, email: user.Email}, process.env.JWT_SECRET);
});

afterEach(() => {
    server.close();
});

describe('GET /rooms', () => {
    test('should get allRooms', async () => {
        const response = await request(app)
        .get('/rooms')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect({"data":[{"Picture":"https://robohash.org/etealibero.png?size=50x50&set=set1","Room_Number":85,"Room_ID":1,"Room_Type":"Double Room","Amenities":"Mini Bar","Price":574,"Offer_Price":218,"Status":"Booked"},{"Picture":"https://robohash.org/similiquemaximeet.png?size=50x50&set=set1","Room_Number":85,"Room_ID":2,"Room_Type":"Double Superior","Amenities":"Mini Bar","Price":273,"Offer_Price":409,"Status":"Available"},{"Picture":"https://robohash.org/sequienimeos.png?size=50x50&set=set1","Room_Number":25,"Room_ID":3,"Room_Type":"Single Room","Amenities":"Mini Bar","Price":345,"Offer_Price":282,"Status":"Booked"},{"Picture":"https://robohash.org/sapientealiquidtotam.png?size=50x50&set=set1","Room_Number":53,"Room_ID":4,"Room_Type":"Suite","Amenities":"Wi-Fi","Price":408,"Offer_Price":230,"Status":"Available"},{"Picture":"https://robohash.org/ipsumetquis.png?size=50x50&set=set1","Room_Number":74,"Room_ID":5,"Room_Type":"Single Room","Amenities":"TV","Price":904,"Offer_Price":492,"Status":"Available"},{"Picture":"https://robohash.org/nullasapienteea.png?size=50x50&set=set1","Room_Number":4,"Room_ID":6,"Room_Type":"Double Room","Amenities":"TV","Price":224,"Offer_Price":198,"Status":"Booked"},{"Picture":"https://robohash.org/deseruntlaudantiumeos.png?size=50x50&set=set1","Room_Number":6,"Room_ID":7,"Room_Type":"Double Room","Amenities":"TV","Price":243,"Offer_Price":161,"Status":"Available"},{"Picture":"https://robohash.org/consequaturaperiamvitae.png?size=50x50&set=set1","Room_Number":48,"Room_ID":8,"Room_Type":"Single Room","Amenities":"TV","Price":707,"Offer_Price":394,"Status":"Booked"},{"Picture":"https://robohash.org/inutaccusantium.png?size=50x50&set=set1","Room_Number":19,"Room_ID":9,"Room_Type":"Double Room","Amenities":"Wi-Fi","Price":741,"Offer_Price":313,"Status":"Booked"},{"Picture":"https://robohash.org/facereisteullam.png?size=50x50&set=set1","Room_Number":62,"Room_ID":10,"Room_Type":"Single Room","Amenities":"TV","Price":531,"Offer_Price":212,"Status":"Booked"},{"Picture":"https://robohash.org/etomnissed.png?size=50x50&set=set1","Room_Number":10,"Room_ID":11,"Room_Type":"Suite","Amenities":"TV","Price":636,"Offer_Price":178,"Status":"Available"},{"Picture":"https://robohash.org/voluptatemtotamdolorem.png?size=50x50&set=set1","Room_Number":15,"Room_ID":12,"Room_Type":"Double Room","Amenities":"Mini Bar","Price":239,"Offer_Price":122,"Status":"Booked"},{"Picture":"https://robohash.org/occaecatiipsaut.png?size=50x50&set=set1","Room_Number":92,"Room_ID":13,"Room_Type":"Double Superior","Amenities":"Wi-Fi","Price":715,"Offer_Price":430,"Status":"Booked"},{"Picture":"https://robohash.org/animiautnihil.png?size=50x50&set=set1","Room_Number":33,"Room_ID":14,"Room_Type":"Suite","Amenities":"Wi-Fi","Price":144,"Offer_Price":390,"Status":"Booked"},{"Picture":"https://robohash.org/nonvoluptatemdolores.png?size=50x50&set=set1","Room_Number":20,"Room_ID":15,"Room_Type":"Single Room","Amenities":"Mini Bar","Price":690,"Offer_Price":294,"Status":"Booked"},{"Picture":"https://robohash.org/animiautsit.png?size=50x50&set=set1","Room_Number":65,"Room_ID":16,"Room_Type":"Single Room","Amenities":"Wi-Fi","Price":194,"Offer_Price":154,"Status":"Booked"},{"Picture":"https://robohash.org/eumnobispraesentium.png?size=50x50&set=set1","Room_Number":31,"Room_ID":17,"Room_Type":"Single Room","Amenities":"TV","Price":689,"Offer_Price":252,"Status":"Booked"},{"Picture":"https://robohash.org/atnecessitatibussint.png?size=50x50&set=set1","Room_Number":37,"Room_ID":18,"Room_Type":"Double Superior","Amenities":"Mini Bar","Price":286,"Offer_Price":498,"Status":"Booked"},{"Picture":"https://robohash.org/utdolorumtenetur.png?size=50x50&set=set1","Room_Number":51,"Room_ID":19,"Room_Type":"Suite","Amenities":"Mini Bar","Price":926,"Offer_Price":140,"Status":"Booked"},{"Picture":"https://robohash.org/quaminciduntoptio.png?size=50x50&set=set1","Room_Number":53,"Room_ID":20,"Room_Type":"Double Superior","Amenities":"Mini Bar","Price":733,"Offer_Price":290,"Status":"Booked"},{"Picture":"https://robohash.org/accusantiumaccusamusquibusdam.png?size=50x50&set=set1","Room_Number":94,"Room_ID":21,"Room_Type":"Suite","Amenities":"Air Conditioning","Price":989,"Offer_Price":313,"Status":"Available"}]})
        
    });
    test('should get one room with Room_ID', async () => {
        const response = await request(app)
        .get('/rooms/7')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect({"data":{"Picture":"https://robohash.org/deseruntlaudantiumeos.png?size=50x50&set=set1","Room_Number":6,"Room_ID":7,"Room_Type":"Double Room","Amenities":"TV","Price":243,"Offer_Price":161,"Status":"Available"}})
    });
    test('should throw error room not found', async () => {
        const response = await request(app)
        .get('/rooms/25')
        .set('Authorization', `Bearer ${token}`)
        .expect(404, {"message":"Room not found"})
    });
    test('should throw error unauthorized', async () => {
        const response = await request(app)
        .get('/rooms/10')
        .set('Authorization', `${token}`)
        .expect(401, {message: 'Unauthorized credentials!'})
    });
});






