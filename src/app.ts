import express, { Application } from 'express';

// Application routing
import indexRouter from './router';

// Express
const app: Application = express();

// Parse JSON bodies (as sent by axios)
app.use(express.json());

// Application routing
app.use('/', indexRouter);

export default app;
