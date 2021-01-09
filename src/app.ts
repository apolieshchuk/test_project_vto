import express, { Application } from 'express';

// Application routing
import indexRouter from './router';

// Express
const app: Application = express();

// Parse JSON bodies (as sent by axios)
app.use(express.json());

// Application routing
app.use('/', indexRouter);

// Constants
const port = 3000;
const host = '0.0.0.0';

// Start server
app.listen(port, host, () => console.log(`Server is listening on port ${port}!`));
