import express, { Request, Response, NextFunction } from "express";
import { loginController } from "./controllers/login";
import { bookingController } from "./controllers/booking";

export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('DASHBOARD');
})

app.use(loginController);

app.use(bookingController);
