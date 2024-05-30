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
const request = require('supertest');
let token;
let user;
beforeEach(() => {
    user = () => __awaiter(void 0, void 0, void 0, function* () { return yield User_1.UserModel.find({ Employee_ID: 1 }); });
    token = jsonwebtoken_1.default.sign({ id: user.Employee_ID, email: user.Email }, process.env.JWT_SECRET);
});
afterEach(() => {
    server_1.server.close();
});
describe('GET /users', () => {
    test('should get allUsers', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .get('/users')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .expect({ "data": [{ "Picture": "https://robohash.org/etearumexplicabo.png?size=50x50&set=set1", "Full_Name": "Alfons Fairey", "Employee_ID": "33-5664303", "Email": "afairey0@hostgator.com", "Start_Date": "1/12/2024", "Description": "Proactive bifurcated Graphic Interface", "Contact": "108-293-8061", "Status": "Inactive" }, { "Picture": "https://robohash.org/quaminaccusamus.png?size=50x50&set=set1", "Full_Name": "Kinna Langmaid", "Employee_ID": "32-3937385", "Email": "klangmaid1@rediff.com", "Start_Date": "8/10/2023", "Description": "User-centric eco-centric hierarchy", "Contact": "364-933-3764", "Status": "Active" }, { "Picture": "https://robohash.org/officiisetqui.png?size=50x50&set=set1", "Full_Name": "Palm Ismead", "Employee_ID": "87-3603160", "Email": "pismead2@xing.com", "Start_Date": "3/23/2024", "Description": "Seamless global local area network", "Contact": "634-379-1136", "Status": "Active" }, { "Picture": "https://robohash.org/molestiasbeataesaepe.png?size=50x50&set=set1", "Full_Name": "Rab Romi", "Employee_ID": "74-1485001", "Email": "rromi3@alibaba.com", "Start_Date": "8/12/2023", "Description": "Reactive zero defect knowledge user", "Contact": "686-307-5100", "Status": "Active" }, { "Picture": "https://robohash.org/mollitiaquiaerror.png?size=50x50&set=set1", "Full_Name": "Arlette Kittow", "Employee_ID": "86-9518505", "Email": "akittow4@comsenz.com", "Start_Date": "3/5/2024", "Description": "Fundamental scalable forecast", "Contact": "229-748-7918", "Status": "Inactive" }, { "Picture": "https://robohash.org/eligendiexercitationemea.png?size=50x50&set=set1", "Full_Name": "Rivkah Matussov", "Employee_ID": "92-2087600", "Email": "rmatussov5@foxnews.com", "Start_Date": "4/25/2023", "Description": "Intuitive fresh-thinking internet solution", "Contact": "395-514-3046", "Status": "Inactive" }, { "Picture": "https://robohash.org/liberocorporislaboriosam.png?size=50x50&set=set1", "Full_Name": "Nikoletta Rutty", "Employee_ID": "25-8444994", "Email": "nrutty6@sciencedaily.com", "Start_Date": "6/29/2023", "Description": "Synergized modular attitude", "Contact": "962-509-8314", "Status": "Active" }, { "Picture": "https://robohash.org/magniautconsequatur.png?size=50x50&set=set1", "Full_Name": "Lucienne Abernethy", "Employee_ID": "88-6151906", "Email": "labernethy7@answers.com", "Start_Date": "6/30/2023", "Description": "Enterprise-wide exuding projection", "Contact": "955-105-8089", "Status": "Inactive" }, { "Picture": "https://robohash.org/eumomnisdolore.png?size=50x50&set=set1", "Full_Name": "Alli Joice", "Employee_ID": "26-9742736", "Email": "ajoice8@google.com", "Start_Date": "7/31/2023", "Description": "Cross-platform well-modulated strategy", "Contact": "357-986-6531", "Status": "Active" }, { "Picture": "https://robohash.org/etutillum.png?size=50x50&set=set1", "Full_Name": "Melisa Fennessy", "Employee_ID": "17-9032945", "Email": "mfennessy9@arstechnica.com", "Start_Date": "9/25/2023", "Description": "Inverse empowering website", "Contact": "695-610-6139", "Status": "Active" }, { "Picture": "https://robohash.org/architectoeligendinumquam.png?size=50x50&set=set1", "Full_Name": "Vinnie Tue", "Employee_ID": "59-9339127", "Email": "vtuea@jiathis.com", "Start_Date": "7/3/2023", "Description": "Advanced dedicated productivity", "Contact": "630-408-5884", "Status": "Inactive" }, { "Picture": "https://robohash.org/evenietnullavoluptas.png?size=50x50&set=set1", "Full_Name": "Hannis Hatry", "Employee_ID": "99-9301037", "Email": "hhatryb@gov.uk", "Start_Date": "7/12/2023", "Description": "Fundamental holistic toolset", "Contact": "117-909-5476", "Status": "Active" }, { "Picture": "https://robohash.org/utatqueperferendis.png?size=50x50&set=set1", "Full_Name": "Hazel Di Ruggiero", "Employee_ID": "03-1316726", "Email": "hdic@amazon.co.uk", "Start_Date": "8/5/2023", "Description": "Re-contextualized tertiary circuit", "Contact": "642-558-9082", "Status": "Active" }, { "Picture": "https://robohash.org/quimagnamofficiis.png?size=50x50&set=set1", "Full_Name": "Cordelia Cowhig", "Employee_ID": "32-1455410", "Email": "ccowhigd@tripod.com", "Start_Date": "6/11/2023", "Description": "Visionary non-volatile structure", "Contact": "271-873-9144", "Status": "Active" }, { "Picture": "https://robohash.org/nostrumsuntsed.png?size=50x50&set=set1", "Full_Name": "Nina Ludlem", "Employee_ID": "53-7776507", "Email": "nludleme@mayoclinic.com", "Start_Date": "6/20/2023", "Description": "Profit-focused attitude-oriented portal", "Contact": "314-194-0735", "Status": "Active" }, { "Picture": "https://robohash.org/inventoreutquis.png?size=50x50&set=set1", "Full_Name": "Penelopa Semark", "Employee_ID": "61-8261714", "Email": "psemarkf@youtu.be", "Start_Date": "1/2/2024", "Description": "Synchronised real-time budgetary management", "Contact": "202-399-9596", "Status": "Active" }, { "Picture": "https://robohash.org/quibusdaminiusto.png?size=50x50&set=set1", "Full_Name": "Sauncho Gyer", "Employee_ID": "06-7966647", "Email": "sgyerg@mit.edu", "Start_Date": "7/26/2023", "Description": "Synchronised local superstructure", "Contact": "821-790-2046", "Status": "Active" }, { "Picture": "https://robohash.org/similiquereiciendiset.png?size=50x50&set=set1", "Full_Name": "Agneta Breazeall", "Employee_ID": "72-6508834", "Email": "abreazeallh@cpanel.net", "Start_Date": "6/1/2023", "Description": "Compatible human-resource protocol", "Contact": "565-674-3341", "Status": "Inactive" }, { "Picture": "https://robohash.org/sedsedfacilis.png?size=50x50&set=set1", "Full_Name": "Rosana Garmon", "Employee_ID": "67-4406712", "Email": "rgarmoni@webs.com", "Start_Date": "1/24/2024", "Description": "Inverse clear-thinking data-warehouse", "Contact": "330-282-3681", "Status": "Inactive" }, { "Picture": "https://robohash.org/temporabeataeeum.png?size=50x50&set=set1", "Full_Name": "Celia Palk", "Employee_ID": "34-3762941", "Email": "cpalkj@hhs.gov", "Start_Date": "10/29/2023", "Description": "Future-proofed non-volatile database", "Contact": "365-538-4442", "Status": "Active" }, { "Picture": "https://robohash.org/molestiasvoluptatemlaborum.png?size=50x50&set=set1", "Full_Name": "Sayers Vynarde", "Employee_ID": "54-9823968", "Email": "svynardek@barnesandnoble.com", "Start_Date": "10/13/2023", "Description": "Cross-group zero defect access", "Contact": "409-148-2949", "Status": "Inactive" }] });
    }));
    test('should get one user with Employee_ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .get('/users/26-9742736')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .expect({ "data": { "Picture": "https://robohash.org/eumomnisdolore.png?size=50x50&set=set1", "Full_Name": "Alli Joice", "Employee_ID": "26-9742736", "Email": "ajoice8@google.com", "Start_Date": "7/31/2023", "Description": "Cross-platform well-modulated strategy", "Contact": "357-986-6531", "Status": "Active" } });
    }));
    test('should throw error user not found', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .get('/users/12')
            .set('Authorization', `Bearer ${token}`)
            .expect(404, { "message": "User not found" });
    }));
    test('should throw error unauthorized', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.app)
            .get('/users/26-9742736')
            .set('Authorization', `${token}`)
            .expect(401, { message: 'Unauthorized credentials!' });
    }));
});
