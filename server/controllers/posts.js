import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log('posts', posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);

        await post.save();

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json(error);
    };
};

export const updatePost = async (req, res) => {

    try {
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true });
        // default findOneAndUpdate return old data before update 
        // => set option {new: true} will return new data after update
        res.status(200).json(post);

    } catch (error) {
        res.status(500).json(errer)
    }
}