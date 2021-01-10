import app from './app';

// Constants
const port = 3000;
const host = '0.0.0.0';

// Start server
app.listen(port, host, () => console.log(`Server is listening on port ${port}!`));
