import express, { Request, Response, NextFunction } from "express";
import { loginRouter } from "./controllers/login";
import { bookingRouter } from "./controllers/booking";
import { roomRouter } from "./controllers/room";
import { userRouter } from "./controllers/user";
import { contactRouter } from "./controllers/contact";
import { APIError } from "./APIError";
import path from "path";
const db = require('./db');

export const app = express();

app.use(express.json());

app.use(loginRouter);

app.use(bookingRouter);

app.use(roomRouter);

app.use(userRouter);

app.use(contactRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
  res.render('index.html');
});

app.use(async (err: APIError, req: Request, res: Response , next: NextFunction) => {
  console.error(err);
  return res.status(err.status ?? 500).json({message: err.safe ? err.message : 'Fatal Error!'})
})