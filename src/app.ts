import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/ErrorHandler';
import routes from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);
app.use(errorHandler);

export default app;