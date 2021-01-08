import express, { Application, Request, Response } from 'express';

// Express
const app: Application = express();

// константы
const port = 3000;
const host = '0.0.0.0';

// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Hello on A.Polieshchuk Server' });
});

// Start server
app.listen(port, host, () => console.log(`Server is listening on port ${port}!`));
