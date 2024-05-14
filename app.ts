import express, { Request, Response, NextFunction } from "express";
import { loginController } from "./controllers/login";
import { bookingController } from "./controllers/booking";
import { roomController } from "./controllers/room";
import { userController } from "./controllers/user";

export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('DASHBOARD');
})

app.use(loginController);

app.use(bookingController);

app.use(roomController);

app.use(userController);