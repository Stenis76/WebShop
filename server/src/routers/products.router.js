const express = require("express");
const router = express.Router();
const Post = require("../models/products.model");

// GET ALL
router.get("/api/products", async (req, res) => {
  try {
    const posts = await Products.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE
router.get("/api/posts/:postId", isAuthenticated, (req, res) => {
  Post.findById(req.params.postId)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json(err));
});

// CREATE
router.post("/api/posts", isAuthenticated, (req, res) => {
  const post = new Post({
    title: req.body.title,
    username: req.body.username,
    content: req.body.content,
    authorId: req.body.authorId,
    date: new Date().toString(),
  });

  post.save((err, post) => {
    if (err) res.status(400).json(err);
    else res.status(201).json(post);
  });
});

// DELETE
router.delete("/api/posts/:postId", isAuthenticated, async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.status(200).json({ status: "removed post" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/api/posts/:postId", isAuthenticated, async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          username: req.body.username,
          content: req.body.content,
        },
      }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
