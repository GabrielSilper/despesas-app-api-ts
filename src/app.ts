import express, { Request, Response } from 'express';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.get('/live', (req: Request, res: Response) => {
  res.status(200).send('App is a live');
});

export default app;
