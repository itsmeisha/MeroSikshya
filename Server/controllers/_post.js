import { postModel } from "../.config/models.js";
// for parsing the file
import multer from "multer";

//getting single post
export const getPostById = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json({ msg: `Invalid id` }); // if the id is not provided
  try {
    const existance = await postModel.findById(id);
    if (!existance) return res.status(404).json({ msg: `Post doesn't exist` });
    return res.status(200).json({
      msg: `Successfully fetched the post with id ${id}`,
      post: existance,
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Error occured while getting the post`, error: e });
  }
};

//adding a post
export const addPost = async (req, res) => {
  try {
    const post = req.body.post;
    if (
      post.title === "" ||
      post.id === "" ||
      post.description === "" ||
      post.image === ""
    )
      return res.status(400).json({ msg: `Inavlid post information` });

    const existance = await postModel.findOne({ _id: post.id });
    if (existance) return res.status(400).json({ msg: `Post already exist` });

    const addedPost = await new postModel(post).save();
    if (!addedPost)
      return res
        .status(400)
        .json({ msg: `Something went wrong while adding the post` });

    return res
      .status(201)
      .json({ msg: `New post has been added`, post: addedPost });
  } catch (e) {
    return res
      .status(500)
      .json({ msg: `Error occured while adding a new post`, error: e });
  }
};

//deleting a post
export const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const existance = await postModel.findById(id);
    if (!existance)
      return res.status(400).json({ msg: `The post doesnot exist` });
    await postModel.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ msg: `The post has been deleted successfully` });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Something went wrong while deleting the post`, error: e });
  }
};

//getting post by subject
export const getPostBySubject = async (req, res) => {
  try {
    //getting subject from url
    const subject = req.params.subject;
    //checking if the subject is provided or not
    if (!subject) return res.status(400).json({ msg: `Invalid subject` });
    //getting all the posts
    const posts = await postModel.find({ subject: subject });
    //checking if the post array is empty or not
    if (posts.length === 0)
      return res.status(404).json({ msg: `No posts found` });
    //returning the posts
    return res
      .status(200)
      .json({ msg: `Successfully fetched the posts`, posts: posts });
  } catch (e) {
    //if error occurs
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Error occured while getting the post`, error: e });
  }
};

export const uploadImage = async (req, res) => {
  if (req.file) return res.status(200).json({ fileName: req.file.path });
  console.log({ filestatus: req.file });
  return res.status(400).json({ error: "failed to upload file " });
};
