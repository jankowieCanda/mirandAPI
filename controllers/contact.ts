import express, { Request, Response, NextFunction } from 'express';
import { Contact } from '../interfaces/Contact';
const allReviews = require('../data/contact.json');

export const contactController = express.Router();


contactController.get('/contact', (req: Request, res: Response) => {
    res.json(allReviews);
});

contactController.delete('/contact/:id', (req: Request, res: Response) => {
    res.send('CONTACT DELETE');
});