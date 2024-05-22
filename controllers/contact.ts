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
        await deleteReview(req.params.id);
        res.json({data: `Review with _id [${req.params.id}] deleted!`});
    } catch(e) {
        next(e)
    }
});