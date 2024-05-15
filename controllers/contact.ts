import express, { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/auth';
import { getAllReviews } from '../services/contact';

export const contactRouter = express.Router();


contactRouter.get('/contact', auth, async (req: Request, res: Response) => {
    const reviews = await getAllReviews();
    res.json({data: reviews});
});

contactRouter.delete('/contact/:id', auth, (req: Request, res: Response) => {
    res.send('CONTACT DELETE');
});