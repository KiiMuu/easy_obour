import mongoose from 'mongoose';
import { MongoURI } from './dev.js';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;