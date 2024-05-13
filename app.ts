import express, { Request, Response, NextFunction } from "express";
import { loginController } from "./controllers/login";

export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('DASHBOARD');
})

app.use(loginController);
