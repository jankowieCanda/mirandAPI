import express, { Request, Response, NextFunction } from "express";

export const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
})