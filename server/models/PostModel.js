import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous',
    },
    attachment: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    // *timestamp
}, { timestamps: true }
    // *timestamp: set time Stamp => create two field : createdAt & updatedAt
);

export const PostModel = mongoose.model('Post', schema);