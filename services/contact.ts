import { APIError } from '../APIError';
import { ContactModel } from '../models/Contact';


export const getAllReviews = async () => {
    const allReviews = await ContactModel.find();
    return allReviews;
}

/* export const getReview = async (id: number) => {
    return reviewsData.find((review: Contact) => review.message_id === id);
}

export const updateReview = async (obj: Contact) => {
    return;
} */

export const deleteReview = async (id: string) => {
    const review = await ContactModel.findByIdAndDelete({_id: id});
    if(!review) {
        throw new APIError(404, 'Review not found', true);
    }
    return review;
}

