import { Schema, model } from "mongoose";
import { Contact } from "../interfaces/Contact";

const contactSchema = new Schema<Contact>({
    date: String,
    hour: String,
    message_id: {type: Number, unique: true},
    subject: String,
    review: String,
    picture: String,
    customer_name: String,
    mail: String,
    phone: String,
});

export const ContactModel = model('contacts', contactSchema);