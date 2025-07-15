import express from 'express'
import { createPost, deletePost, getPost, getPosts, uploadAuth } from '../controllers/post.controller.js';

const router= express.Router();

router.get('/',getPosts);
router.get("/auth-upload",uploadAuth);
router.get("/:slug",getPost);
router.post("/",createPost);
router.delete("/:id",deletePost);
router.patch("/feature",deletePost);

export default router;