

import express, { type Request, type Response } from 'express';

const app = express();

app.use(express.json());

app.get('/home', (req: Request, res: Response) => {
  res.send('Welcome to the home page!');
});

app.get('/about', (req: Request, res: Response) => {
  res.send('This is the about page.');
});

app.get('/services', (req: Request, res: Response) => {
  res.send('Our services include web development, app development, and more.');
});

app.get('/contact', (req: Request, res: Response) => {
  res.send('Contact us at contact@example.com');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
