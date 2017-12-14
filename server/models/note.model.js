import mongoose, { Schema } from 'mongoose';

const noteSchema = Schema({
    text: String,
    title: String
});

export default mongoose.model('Note', noteSchema);