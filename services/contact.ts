import { Contact } from '../interfaces/Contact';
const reviewsData = require('../data/contact.json');


export const getAllReviews = async () => {
    return reviewsData;
}

/* export const getReview = async (id: number) => {
    return reviewsData.find((review: Contact) => review.message_id === id);
}

export const updateReview = async (obj: Contact) => {
    return;
} */

export const deleteReview = async (id:number) => {
    return;
}
