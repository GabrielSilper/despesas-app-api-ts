import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response } from 'express';
import userRouter from './app/routers/user.router';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/live', (req: Request, res: Response) => {
  res.status(200).send('App is a live');
});

app.use('/users', userRouter);

export default app;
