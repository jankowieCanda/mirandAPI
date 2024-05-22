import express, { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { deleteReview, getAllReviews } from '../services/contact';

export const contactRouter = express.Router();


contactRouter.get('/contact', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reviews = await getAllReviews();
        res.json({data: reviews});
    } catch(e) {
        next(e)
    }
});

contactRouter.delete('/contact/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedReview = await deleteReview(parseInt(req.params.id));
        res.json({data: deletedReview});
    } catch(e) {
        next(e)
    }
});