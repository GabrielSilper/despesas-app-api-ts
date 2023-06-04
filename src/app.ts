import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/live', (req: Request, res: Response) => {
  res.status(200).send('App is a live');
});

export default app;
