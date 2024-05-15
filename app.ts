import express, { Request, Response, NextFunction } from "express";
import { loginRouter } from "./controllers/login";
import { bookingRouter } from "./controllers/booking";
import { roomRouter } from "./controllers/room";
import { userRouter } from "./controllers/user";
import { contactRouter } from "./controllers/contact";
import { auth } from "./middleware/auth";

export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('DASHBOARD');
});

app.use(auth);

app.use(loginRouter);

app.use(bookingRouter);

app.use(roomRouter);

app.use(userRouter);

app.use(contactRouter);