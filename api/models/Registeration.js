import mongoose from 'mongoose';

const { Schema } = mongoose;

const registerSchema = new Schema({
    name: String,
    email: String,
    location: String,
}, {
    timestamps: true,
});

const Registeration = mongoose.model('Registeration', registerSchema);

export default Registeration;