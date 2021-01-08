import express, { Application, Request, Response } from 'express';

// Express
const app: Application = express();
const port = 5000;

// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Hello on A.Polieshchuk Server' });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
