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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.getAllReviews = void 0;
const reviewsData = require('../data/contact.json');
const getAllReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    return reviewsData;
});
exports.getAllReviews = getAllReviews;
/* export const getReview = async (id: number) => {
    return reviewsData.find((review: Contact) => review.message_id === id);
}

export const updateReview = async (obj: Contact) => {
    return;
} */
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return;
});
exports.deleteReview = deleteReview;