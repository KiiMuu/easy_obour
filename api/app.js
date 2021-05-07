import { config } from 'dotenv';
config();
import express from 'express';
import morgan from 'morgan';
import * as keys from './config/dev.js';
import connectDB from './config/db.js';

// * app
const app = express();

// * get routes
import dialogflowRoutes from './routes/dialogflow.js';

// * db connection
connectDB();

// * middlewares
app.use(express.json());
app.use(morgan('dev'));
// app.use(cors());

// * use routes
app.use('/api', dialogflowRoutes);

// * app listening
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is up on port: ${port}`);
});