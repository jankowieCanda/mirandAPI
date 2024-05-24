"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = void 0;
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    date: String,
    hour: String,
    message_id: { type: Number, unique: true },
    subject: String,
    review: String,
    picture: String,
    customer_name: String,
    mail: String,
    phone: String,
});
exports.ContactModel = (0, mongoose_1.model)('contacts', contactSchema);
