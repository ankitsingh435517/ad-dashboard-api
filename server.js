import express from 'express';
import mongoose from "mongoose";

import { APP_PORT, DB_URL } from './config';
import appRoutes from './routes';
import { errorHandler } from './middlewares';

const app = express();

// db connection
mongoose.connect(DB_URL).then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log(`Something went wrong in db: ${err}`);
})

// middlewares
app.use(express.json());

// routes
app.use('/api', appRoutes)


// error handler middleware
app.use(errorHandler);

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));