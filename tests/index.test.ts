import { app } from "../app";
import { UserModel } from "../models/User";
import { server } from '../server';
import jwt from 'jsonwebtoken';
import { getAllBookings, getBooking } from "../services/booking";
import { response } from "express";
const request = require('supertest');

let token;
let user;

beforeEach(() => {
    user = async () => await UserModel.find({Employee_ID: 1});
    token = jwt.sign({id: user.Employee_ID, email: user.Email}, process.env.JWT_SECRET);
})

afterEach(() => {
    server.close();
})

describe('GET /bookings', () => {
    
    test('should get allBookings', async () => {
        let bookings = async () => await getAllBookings();
        const response = await request(app)
        .get('/bookings')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect(bookings)
        
    });
    test('should get one booking with _id', async () => {
        let booking = await getBooking('664f728646ae18826aef4823');
        console.log('booking: ' + booking)
        const response = await request(app)
        .get(`/bookings/664f728646ae18826aef4823`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect(booking);
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

// describe('GET /rooms', () => {
//     test('should get allRooms', async () => {
//         const response = await request(app)
//         .get('/rooms')
//         .set('Authorization', `Bearer ${token}`)
//         .expect(200)
//         .expect({"data":[{"Picture":"https://robohash.org/etealibero.png?size=50x50&set=set1","Room_Number":85,"Room_ID":1,"Room_Type":"Double Room","Amenities":"Mini Bar","Price":574,"Offer_Price":218,"Status":"Booked"},{"Picture":"https://robohash.org/similiquemaximeet.png?size=50x50&set=set1","Room_Number":85,"Room_ID":2,"Room_Type":"Double Superior","Amenities":"Mini Bar","Price":273,"Offer_Price":409,"Status":"Available"},{"Picture":"https://robohash.org/sequienimeos.png?size=50x50&set=set1","Room_Number":25,"Room_ID":3,"Room_Type":"Single Room","Amenities":"Mini Bar","Price":345,"Offer_Price":282,"Status":"Booked"},{"Picture":"https://robohash.org/sapientealiquidtotam.png?size=50x50&set=set1","Room_Number":53,"Room_ID":4,"Room_Type":"Suite","Amenities":"Wi-Fi","Price":408,"Offer_Price":230,"Status":"Available"},{"Picture":"https://robohash.org/ipsumetquis.png?size=50x50&set=set1","Room_Number":74,"Room_ID":5,"Room_Type":"Single Room","Amenities":"TV","Price":904,"Offer_Price":492,"Status":"Available"},{"Picture":"https://robohash.org/nullasapienteea.png?size=50x50&set=set1","Room_Number":4,"Room_ID":6,"Room_Type":"Double Room","Amenities":"TV","Price":224,"Offer_Price":198,"Status":"Booked"},{"Picture":"https://robohash.org/deseruntlaudantiumeos.png?size=50x50&set=set1","Room_Number":6,"Room_ID":7,"Room_Type":"Double Room","Amenities":"TV","Price":243,"Offer_Price":161,"Status":"Available"},{"Picture":"https://robohash.org/consequaturaperiamvitae.png?size=50x50&set=set1","Room_Number":48,"Room_ID":8,"Room_Type":"Single Room","Amenities":"TV","Price":707,"Offer_Price":394,"Status":"Booked"},{"Picture":"https://robohash.org/inutaccusantium.png?size=50x50&set=set1","Room_Number":19,"Room_ID":9,"Room_Type":"Double Room","Amenities":"Wi-Fi","Price":741,"Offer_Price":313,"Status":"Booked"},{"Picture":"https://robohash.org/facereisteullam.png?size=50x50&set=set1","Room_Number":62,"Room_ID":10,"Room_Type":"Single Room","Amenities":"TV","Price":531,"Offer_Price":212,"Status":"Booked"},{"Picture":"https://robohash.org/etomnissed.png?size=50x50&set=set1","Room_Number":10,"Room_ID":11,"Room_Type":"Suite","Amenities":"TV","Price":636,"Offer_Price":178,"Status":"Available"},{"Picture":"https://robohash.org/voluptatemtotamdolorem.png?size=50x50&set=set1","Room_Number":15,"Room_ID":12,"Room_Type":"Double Room","Amenities":"Mini Bar","Price":239,"Offer_Price":122,"Status":"Booked"},{"Picture":"https://robohash.org/occaecatiipsaut.png?size=50x50&set=set1","Room_Number":92,"Room_ID":13,"Room_Type":"Double Superior","Amenities":"Wi-Fi","Price":715,"Offer_Price":430,"Status":"Booked"},{"Picture":"https://robohash.org/animiautnihil.png?size=50x50&set=set1","Room_Number":33,"Room_ID":14,"Room_Type":"Suite","Amenities":"Wi-Fi","Price":144,"Offer_Price":390,"Status":"Booked"},{"Picture":"https://robohash.org/nonvoluptatemdolores.png?size=50x50&set=set1","Room_Number":20,"Room_ID":15,"Room_Type":"Single Room","Amenities":"Mini Bar","Price":690,"Offer_Price":294,"Status":"Booked"},{"Picture":"https://robohash.org/animiautsit.png?size=50x50&set=set1","Room_Number":65,"Room_ID":16,"Room_Type":"Single Room","Amenities":"Wi-Fi","Price":194,"Offer_Price":154,"Status":"Booked"},{"Picture":"https://robohash.org/eumnobispraesentium.png?size=50x50&set=set1","Room_Number":31,"Room_ID":17,"Room_Type":"Single Room","Amenities":"TV","Price":689,"Offer_Price":252,"Status":"Booked"},{"Picture":"https://robohash.org/atnecessitatibussint.png?size=50x50&set=set1","Room_Number":37,"Room_ID":18,"Room_Type":"Double Superior","Amenities":"Mini Bar","Price":286,"Offer_Price":498,"Status":"Booked"},{"Picture":"https://robohash.org/utdolorumtenetur.png?size=50x50&set=set1","Room_Number":51,"Room_ID":19,"Room_Type":"Suite","Amenities":"Mini Bar","Price":926,"Offer_Price":140,"Status":"Booked"},{"Picture":"https://robohash.org/quaminciduntoptio.png?size=50x50&set=set1","Room_Number":53,"Room_ID":20,"Room_Type":"Double Superior","Amenities":"Mini Bar","Price":733,"Offer_Price":290,"Status":"Booked"},{"Picture":"https://robohash.org/accusantiumaccusamusquibusdam.png?size=50x50&set=set1","Room_Number":94,"Room_ID":21,"Room_Type":"Suite","Amenities":"Air Conditioning","Price":989,"Offer_Price":313,"Status":"Available"}]})
        
//     });
//     test('should get one room with Room_ID', async () => {
//         const response = await request(app)
//         .get('/rooms/7')
//         .set('Authorization', `Bearer ${token}`)
//         .expect(200)
//         .expect({"data":{"Picture":"https://robohash.org/deseruntlaudantiumeos.png?size=50x50&set=set1","Room_Number":6,"Room_ID":7,"Room_Type":"Double Room","Amenities":"TV","Price":243,"Offer_Price":161,"Status":"Available"}})
//     });
//     test('should throw error room not found', async () => {
//         const response = await request(app)
//         .get('/rooms/25')
//         .set('Authorization', `Bearer ${token}`)
//         .expect(404, {"message":"Room not found"})
//     });
//     test('should throw error unauthorized', async () => {
//         const response = await request(app)
//         .get('/rooms/10')
//         .set('Authorization', `${token}`)
//         .expect(401, {message: 'Unauthorized credentials!'})
//     });
// });

// describe('GET /users', () => {
//     test('should get allUsers', async () => {
//         const response = await request(app)
//         .get('/users')
//         .set('Authorization', `Bearer ${token}`)
//         .expect(200)
//         .expect({"data":[{"Picture":"https://robohash.org/etearumexplicabo.png?size=50x50&set=set1","Full_Name":"Alfons Fairey","Employee_ID":"33-5664303","Email":"afairey0@hostgator.com","Start_Date":"1/12/2024","Description":"Proactive bifurcated Graphic Interface","Contact":"108-293-8061","Status":"Inactive"},{"Picture":"https://robohash.org/quaminaccusamus.png?size=50x50&set=set1","Full_Name":"Kinna Langmaid","Employee_ID":"32-3937385","Email":"klangmaid1@rediff.com","Start_Date":"8/10/2023","Description":"User-centric eco-centric hierarchy","Contact":"364-933-3764","Status":"Active"},{"Picture":"https://robohash.org/officiisetqui.png?size=50x50&set=set1","Full_Name":"Palm Ismead","Employee_ID":"87-3603160","Email":"pismead2@xing.com","Start_Date":"3/23/2024","Description":"Seamless global local area network","Contact":"634-379-1136","Status":"Active"},{"Picture":"https://robohash.org/molestiasbeataesaepe.png?size=50x50&set=set1","Full_Name":"Rab Romi","Employee_ID":"74-1485001","Email":"rromi3@alibaba.com","Start_Date":"8/12/2023","Description":"Reactive zero defect knowledge user","Contact":"686-307-5100","Status":"Active"},{"Picture":"https://robohash.org/mollitiaquiaerror.png?size=50x50&set=set1","Full_Name":"Arlette Kittow","Employee_ID":"86-9518505","Email":"akittow4@comsenz.com","Start_Date":"3/5/2024","Description":"Fundamental scalable forecast","Contact":"229-748-7918","Status":"Inactive"},{"Picture":"https://robohash.org/eligendiexercitationemea.png?size=50x50&set=set1","Full_Name":"Rivkah Matussov","Employee_ID":"92-2087600","Email":"rmatussov5@foxnews.com","Start_Date":"4/25/2023","Description":"Intuitive fresh-thinking internet solution","Contact":"395-514-3046","Status":"Inactive"},{"Picture":"https://robohash.org/liberocorporislaboriosam.png?size=50x50&set=set1","Full_Name":"Nikoletta Rutty","Employee_ID":"25-8444994","Email":"nrutty6@sciencedaily.com","Start_Date":"6/29/2023","Description":"Synergized modular attitude","Contact":"962-509-8314","Status":"Active"},{"Picture":"https://robohash.org/magniautconsequatur.png?size=50x50&set=set1","Full_Name":"Lucienne Abernethy","Employee_ID":"88-6151906","Email":"labernethy7@answers.com","Start_Date":"6/30/2023","Description":"Enterprise-wide exuding projection","Contact":"955-105-8089","Status":"Inactive"},{"Picture":"https://robohash.org/eumomnisdolore.png?size=50x50&set=set1","Full_Name":"Alli Joice","Employee_ID":"26-9742736","Email":"ajoice8@google.com","Start_Date":"7/31/2023","Description":"Cross-platform well-modulated strategy","Contact":"357-986-6531","Status":"Active"},{"Picture":"https://robohash.org/etutillum.png?size=50x50&set=set1","Full_Name":"Melisa Fennessy","Employee_ID":"17-9032945","Email":"mfennessy9@arstechnica.com","Start_Date":"9/25/2023","Description":"Inverse empowering website","Contact":"695-610-6139","Status":"Active"},{"Picture":"https://robohash.org/architectoeligendinumquam.png?size=50x50&set=set1","Full_Name":"Vinnie Tue","Employee_ID":"59-9339127","Email":"vtuea@jiathis.com","Start_Date":"7/3/2023","Description":"Advanced dedicated productivity","Contact":"630-408-5884","Status":"Inactive"},{"Picture":"https://robohash.org/evenietnullavoluptas.png?size=50x50&set=set1","Full_Name":"Hannis Hatry","Employee_ID":"99-9301037","Email":"hhatryb@gov.uk","Start_Date":"7/12/2023","Description":"Fundamental holistic toolset","Contact":"117-909-5476","Status":"Active"},{"Picture":"https://robohash.org/utatqueperferendis.png?size=50x50&set=set1","Full_Name":"Hazel Di Ruggiero","Employee_ID":"03-1316726","Email":"hdic@amazon.co.uk","Start_Date":"8/5/2023","Description":"Re-contextualized tertiary circuit","Contact":"642-558-9082","Status":"Active"},{"Picture":"https://robohash.org/quimagnamofficiis.png?size=50x50&set=set1","Full_Name":"Cordelia Cowhig","Employee_ID":"32-1455410","Email":"ccowhigd@tripod.com","Start_Date":"6/11/2023","Description":"Visionary non-volatile structure","Contact":"271-873-9144","Status":"Active"},{"Picture":"https://robohash.org/nostrumsuntsed.png?size=50x50&set=set1","Full_Name":"Nina Ludlem","Employee_ID":"53-7776507","Email":"nludleme@mayoclinic.com","Start_Date":"6/20/2023","Description":"Profit-focused attitude-oriented portal","Contact":"314-194-0735","Status":"Active"},{"Picture":"https://robohash.org/inventoreutquis.png?size=50x50&set=set1","Full_Name":"Penelopa Semark","Employee_ID":"61-8261714","Email":"psemarkf@youtu.be","Start_Date":"1/2/2024","Description":"Synchronised real-time budgetary management","Contact":"202-399-9596","Status":"Active"},{"Picture":"https://robohash.org/quibusdaminiusto.png?size=50x50&set=set1","Full_Name":"Sauncho Gyer","Employee_ID":"06-7966647","Email":"sgyerg@mit.edu","Start_Date":"7/26/2023","Description":"Synchronised local superstructure","Contact":"821-790-2046","Status":"Active"},{"Picture":"https://robohash.org/similiquereiciendiset.png?size=50x50&set=set1","Full_Name":"Agneta Breazeall","Employee_ID":"72-6508834","Email":"abreazeallh@cpanel.net","Start_Date":"6/1/2023","Description":"Compatible human-resource protocol","Contact":"565-674-3341","Status":"Inactive"},{"Picture":"https://robohash.org/sedsedfacilis.png?size=50x50&set=set1","Full_Name":"Rosana Garmon","Employee_ID":"67-4406712","Email":"rgarmoni@webs.com","Start_Date":"1/24/2024","Description":"Inverse clear-thinking data-warehouse","Contact":"330-282-3681","Status":"Inactive"},{"Picture":"https://robohash.org/temporabeataeeum.png?size=50x50&set=set1","Full_Name":"Celia Palk","Employee_ID":"34-3762941","Email":"cpalkj@hhs.gov","Start_Date":"10/29/2023","Description":"Future-proofed non-volatile database","Contact":"365-538-4442","Status":"Active"},{"Picture":"https://robohash.org/molestiasvoluptatemlaborum.png?size=50x50&set=set1","Full_Name":"Sayers Vynarde","Employee_ID":"54-9823968","Email":"svynardek@barnesandnoble.com","Start_Date":"10/13/2023","Description":"Cross-group zero defect access","Contact":"409-148-2949","Status":"Inactive"}]})
        
//     });
//     test('should get one user with Employee_ID', async () => {
//         const response = await request(app)
//         .get('/users/26-9742736')
//         .set('Authorization', `Bearer ${token}`)
//         .expect(200)
//         .expect({"data":{"Picture":"https://robohash.org/eumomnisdolore.png?size=50x50&set=set1","Full_Name":"Alli Joice","Employee_ID":"26-9742736","Email":"ajoice8@google.com","Start_Date":"7/31/2023","Description":"Cross-platform well-modulated strategy","Contact":"357-986-6531","Status":"Active"}})
//     });
//     test('should throw error user not found', async () => {
//         const response = await request(app)
//         .get('/users/12')
//         .set('Authorization', `Bearer ${token}`)
//         .expect(404, {"message":"User not found"})
//     });
//     test('should throw error unauthorized', async () => {
//         const response = await request(app)
//         .get('/users/26-9742736')
//         .set('Authorization', `${token}`)
//         .expect(401, {message: 'Unauthorized credentials!'})
//     });
// });

// describe('GET /contact', () => {
//     test('should get allContacts', async () => {
//         const response = await request(app)
//         .get('/contact')
//         .set('Authorization', `Bearer ${token}`)
//         .expect(200)
//         .expect({"data":[{"date":"8/21/2020","hour":"15:09","message_id":1,"subject":"dis parturient montes nascetur","review":"In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","picture":"https://robohash.org/quisquamrecusandaealias.png?size=50x50&set=set1","customer_name":"Marten Middis","mail":"mmiddis0@cargocollective.com","phone":"703-669-3358"},{"date":"4/13/2021","hour":"8:02","message_id":2,"subject":"vel accumsan tellus nisi","review":"Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.","picture":"https://robohash.org/etdictaconsectetur.png?size=50x50&set=set1","customer_name":"Oralla Boomes","mail":"oboomes1@hatena.ne.jp","phone":"120-765-9765"},{"date":"8/15/2022","hour":"3:55","message_id":3,"subject":"luctus nec","review":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","picture":"https://robohash.org/sitquoalias.png?size=50x50&set=set1","customer_name":"Ricky Ibert","mail":"ribert2@nhs.uk","phone":"171-900-3547"},{"date":"9/9/2022","hour":"8:45","message_id":4,"subject":"odio porttitor id consequat","review":"Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.","picture":"https://robohash.org/sintasperioresut.png?size=50x50&set=set1","customer_name":"Ursulina Gossipin","mail":"ugossipin3@feedburner.com","phone":"273-157-4183"},{"date":"8/13/2021","hour":"18:47","message_id":5,"subject":"duis bibendum felis","review":"Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","picture":"https://robohash.org/atveritatisnesciunt.png?size=50x50&set=set1","customer_name":"Aron Duhig","mail":"aduhig4@army.mil","phone":"716-395-6694"},{"date":"3/31/2022","hour":"8:03","message_id":6,"subject":"eget orci vehicula","review":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","picture":"https://robohash.org/aperiamdoloreset.png?size=50x50&set=set1","customer_name":"Fabio Langdridge","mail":"flangdridge5@nhs.uk","phone":"175-504-0780"},{"date":"6/18/2021","hour":"14:39","message_id":7,"subject":"in porttitor pede justo","review":"Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","picture":"https://robohash.org/praesentiumquosarchitecto.png?size=50x50&set=set1","customer_name":"Lamond Sher","mail":"lsher6@wiley.com","phone":"643-251-7404"},{"date":"10/19/2022","hour":"8:18","message_id":8,"subject":"dui luctus","review":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.","picture":"https://robohash.org/temporibussapientedoloremque.png?size=50x50&set=set1","customer_name":"Osborn Agent","mail":"oagent7@feedburner.com","phone":"928-813-7980"},{"date":"10/22/2020","hour":"18:03","message_id":9,"subject":"pharetra magna ac","review":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","picture":"https://robohash.org/cumvoluptatibusipsam.png?size=50x50&set=set1","customer_name":"Fields Dominicacci","mail":"fdominicacci8@twitpic.com","phone":"867-682-4024"},{"date":"10/26/2021","hour":"5:30","message_id":10,"subject":"curabitur in libero ut","review":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.","picture":"https://robohash.org/quisnullaamet.png?size=50x50&set=set1","customer_name":"Moria Donalson","mail":"mdonalson9@vistaprint.com","phone":"855-886-3427"},{"date":"1/30/2021","hour":"5:19","message_id":11,"subject":"tempus","review":"Morbi ut odio.","picture":"https://robohash.org/nonetsequi.png?size=50x50&set=set1","customer_name":"Garrick Lambdin","mail":"glambdina@devhub.com","phone":"266-601-9757"},{"date":"10/28/2022","hour":"1:55","message_id":12,"subject":"nascetur ridiculus mus etiam","review":"Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.","picture":"https://robohash.org/quaeratmaximererum.png?size=50x50&set=set1","customer_name":"Lauren Fishburn","mail":"lfishburnb@wikimedia.org","phone":"526-220-4441"},{"date":"6/10/2021","hour":"1:11","message_id":13,"subject":"vestibulum sed","review":"Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.","picture":"https://robohash.org/magnamutquas.png?size=50x50&set=set1","customer_name":"Ines Ead","mail":"ieadc@europa.eu","phone":"672-165-0359"},{"date":"12/19/2021","hour":"18:21","message_id":14,"subject":"potenti in eleifend quam","review":"Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.","picture":"https://robohash.org/veliustoquam.png?size=50x50&set=set1","customer_name":"Nichole Blacker","mail":"nblackerd@about.me","phone":"750-358-1344"},{"date":"6/4/2022","hour":"17:45","message_id":15,"subject":"massa","review":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.","picture":"https://robohash.org/occaecatiquofugiat.png?size=50x50&set=set1","customer_name":"Jenifer Troy","mail":"jtroye@ihg.com","phone":"793-255-6468"},{"date":"5/12/2021","hour":"4:31","message_id":16,"subject":"parturient montes nascetur","review":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","picture":"https://robohash.org/consequaturvoluptatemest.png?size=50x50&set=set1","customer_name":"Gregorius Bailiss","mail":"gbailissf@about.me","phone":"764-546-3180"},{"date":"6/29/2020","hour":"21:54","message_id":17,"subject":"consequat in consequat ut nulla","review":"Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.","picture":"https://robohash.org/quisutvelit.png?size=50x50&set=set1","customer_name":"Nixie Kirvin","mail":"nkirving@dmoz.org","phone":"807-230-5880"},{"date":"12/23/2021","hour":"12:26","message_id":18,"subject":"primis in faucibus orci","review":"Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","picture":"https://robohash.org/esseconsecteturenim.png?size=50x50&set=set1","customer_name":"Idalia Valentim","mail":"ivalentimh@google.nl","phone":"737-291-0150"},{"date":"9/5/2020","hour":"10:59","message_id":19,"subject":"sed magna","review":"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","picture":"https://robohash.org/assumendanihilcorporis.png?size=50x50&set=set1","customer_name":"Britney Mulliss","mail":"bmullissi@nih.gov","phone":"394-938-7111"},{"date":"7/28/2020","hour":"0:52","message_id":20,"subject":"nunc purus","review":"Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.","picture":"https://robohash.org/praesentiumharumdicta.png?size=50x50&set=set1","customer_name":"Brodie Rose","mail":"brosej@desdev.cn","phone":"191-344-7509"},{"date":"8/21/2022","hour":"4:42","message_id":21,"subject":"duis aliquam convallis","review":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","picture":"https://robohash.org/ipsamnatusconsequatur.png?size=50x50&set=set1","customer_name":"Ara Tortoise","mail":"atortoisek@technorati.com","phone":"366-325-8762"}]})
        
//     });
//     test('should throw error unauthorized', async () => {
//         const response = await request(app)
//         .get('/contact')
//         .set('Authorization', `${token}`)
//         .expect(401, {message: 'Unauthorized credentials!'})
//     });
// });




